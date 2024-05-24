import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkEmoji from 'remark-emoji';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
    markdownPath: string;
    setToc: (toc: Array<{ id: string, level: number, text: string }>) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownPath, setToc }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(markdownPath)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);

                const toc: Array<{ id: string, level: number, text: string }> = [];
                const tree = unified()
                    .use(remarkParse)
                    .parse(text);

                visit(tree, 'heading', (node) => {
                    const text = node.children.map((child: any) => child.value).join('');
                    const id = text.toLowerCase().replace(/\s+/g, '-');
                    toc.push({
                        id,
                        level: node.depth,
                        text,
                    });
                });

                setToc(toc);
            })
            .catch((err) => {
                console.error('Failed to fetch markdown file:', err);
            });
    }, [markdownPath, setToc]);

    const renderers = {
        code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        math: ({ value }: any) => <div dangerouslySetInnerHTML={{ __html: value }} />,
        inlineMath: ({ value }: any) => <span dangerouslySetInnerHTML={{ __html: value }} />,
    };

    return (
        <ReactMarkdown
            className="markdown-body"
            remarkPlugins={[remarkGfm, remarkEmoji, remarkMath]}
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeKatex]}
            components={renderers}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
