import { createLazyFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { personalInfo, SocialLink } from '../data/personalInfo';

export const Route = createLazyFileRoute('/about')({
    component: About,
});

function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/about.md')
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="markdown-body max-w-5xl mx-auto p-4">
            <div className="flex flex-col items-center mb-8">
                <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-32 h-32 rounded-full mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                <div className="flex space-x-4">
                    {personalInfo.socialLinks.map((link: SocialLink) => (
                        //BUG: The text color should be gray-900 in light mode
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500"
                        >
                            <link.icon size="24" />
                        </a>
                    ))}
                </div>
            </div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
