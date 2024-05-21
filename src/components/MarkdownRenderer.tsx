import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

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

                // console.log('Generated TOC:', toc); // Debugging log
                setToc(toc);
            })
            .catch((err) => {
                console.error('Failed to fetch markdown file:', err);
            });
    }, [markdownPath, setToc]);

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
