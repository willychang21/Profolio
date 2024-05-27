import { useNavigate } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import clsx from 'clsx';
import { ContentItem } from '../data/contentInterfaces';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

interface ContentDetailProps {
    content: ContentItem;
    markdownPath: string;
    basePath: string;
}

const ContentDetail: React.FC<ContentDetailProps> = ({ content, markdownPath, basePath }) => {
    const navigate = useNavigate();
    const [toc, setToc] = useState<Array<{ id: string, level: number, text: string }>>([]);
    const [activeId, setActiveId] = useState<string>('');
    const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

    useEffect(() => {
        if (toc.length === 0) return;

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            headingElementsRef.current = entries.reduce((map, entry) => {
                map[entry.target.id] = entry;
                return map;
            }, headingElementsRef.current);

            const visibleHeadings: IntersectionObserverEntry[] = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const entry = headingElementsRef.current[key];
                if (entry.isIntersecting) visibleHeadings.push(entry);
            });

            const getIndexFromId = (id: string) => toc.findIndex((item) => item.id === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort((a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id));
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        const headingElements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [toc]);

    const handleTagClick = (tag: string) => {
        navigate({
            to: basePath,
            params: { tag }
        });
    };

    const shareUrl = window.location.href;
    const shareText = encodeURIComponent(content.title);

    return (
        <div className="max-w-5xl mx-auto p-4 animate-fade-in">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4">
                    <h1 className="text-4xl font-extrabold mb-6 animate-slide-down">{content.title}</h1>
                    <p className="text-gray-500 mb-4">{content.date} &middot; {content.duration}</p>
                    <div className="flex flex-wrap mb-6">
                        {content.tags?.map(tag => (
                            <span
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {content.image && (
                        <img src={content.image} alt={content.title} className="w-full h-auto rounded-md mb-6 shadow-lg animate-pop-in" />
                    )}
                    <div className="block md:hidden mb-6">
                        <TableOfContents toc={toc} activeId={activeId} />
                    </div>
                    <MarkdownRenderer markdownPath={markdownPath} setToc={setToc} />
                    <div className="flex space-x-4 mt-8">
                        <a
                            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-transform transform hover:scale-110"
                        >
                            <FaXTwitter size={24} />
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-transform transform hover:scale-110"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-transform transform hover:scale-110"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                <div className="hidden md:block w-full md:w-1/4 pl-8">
                    <div className="sticky top-16 animate-slide-up">
                        <TableOfContents toc={toc} activeId={activeId} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const TableOfContents = ({ toc, activeId }: { toc: Array<{ id: string, level: number, text: string }>, activeId: string }) => (
    <div className="rounded-lg p-4 bg-gray-50 dark:bg-gray-800 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <ul className="list-none p-0">
            {toc.length > 0 ? (
                toc.map(item => (
                    <li key={item.id} className={clsx('mb-1', {
                        'ml-0': item.level === 1,
                        'ml-4': item.level === 2,
                        'ml-8': item.level === 3,
                        'ml-12': item.level === 4,
                        'ml-16': item.level === 5,
                        'ml-20': item.level === 6,
                    })}>
                        <a
                            href={`#${item.id}`}
                            className={clsx('block p-2 rounded hover:bg-blue-100 hover:text-blue-600 hover:underline focus:bg-blue-100 transition-colors duration-300', {
                                'bg-blue-100 text-blue-600 underline': activeId === item.id,
                            })}
                        >
                            {item.text}
                        </a>
                    </li>
                ))
            ) : (
                <li>No TOC items found</li>
            )}
        </ul>
    </div>
);

export default ContentDetail;
