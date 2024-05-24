import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import { projectDetail } from '../../data/projectDate';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export const Route = createLazyFileRoute('/projects/$projectId')({
    component: ProjectDetail,
});

function ProjectDetail() {
    const { projectId } = useParams({ from: '/projects/$projectId' });
    const [toc, setToc] = useState<Array<{ id: string, level: number, text: string }>>([]);
    const [activeId, setActiveId] = useState<string>('');
    const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

    const project = projectDetail
        .flatMap((yearlyProjects) => yearlyProjects.projects)
        .find(p => p.title === projectId);

    if (!project) {
        console.log("Project not found");
        return <div>Project not found</div>;
    }

    const markdownPath = `/projects/${projectId}.md`;

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

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                    <img src={project.image} alt={project.title} className="w-full h-auto rounded-md mb-4" />
                    <p className="text-gray-500 mb-4">{project.date} &middot; {project.duration}</p>
                    <div className="block md:hidden mb-4">
                        <TableOfContents toc={toc} activeId={activeId} />
                    </div>
                    <MarkdownRenderer markdownPath={markdownPath} setToc={setToc} />
                </div>
                <div className="hidden md:block w-full md:w-1/4 pl-8">
                    <div className="sticky top-16">
                        <TableOfContents toc={toc} activeId={activeId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const TableOfContents = ({ toc, activeId }: { toc: Array<{ id: string, level: number, text: string }>, activeId: string }) => (
    <div className="rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
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
                            className={clsx('block p-2 rounded hover:bg-blue-100 hover:text-blue-600 hover:underline focus:bg-blue-100', {
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

export default ProjectDetail;
