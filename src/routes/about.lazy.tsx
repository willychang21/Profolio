import { createLazyFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from '../components/SocialLinks';
import ReactMarkdown from 'react-markdown';

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
        <div className="max-w-5xl mx-auto p-4 animate-fade-in">
            <div className="flex flex-col items-center mb-8">
                {/* Avatar Section */}
                <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-32 h-32 rounded-full mb-4 animate-pop-in"
                />
                {/* Name and Social Links */}
                <h1 className="text-4xl font-extrabold mb-2 animate-slide-down">{personalInfo.name}</h1>
                <div className="flex justify-center space-x-4 mb-4 animate-fade-in delay-200">
                    <SocialLinks links={personalInfo.socialLinks} />
                </div>
            </div>
            {/* Markdown content */}
            <div className="markdown-body prose dark:prose-dark max-w-none animate-slide-up delay-300">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default About;
