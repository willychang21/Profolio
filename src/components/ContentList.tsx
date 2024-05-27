import { Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ContentYear } from '../data/contentInterfaces';

interface ContentListProps {
    content: ContentYear[];
    basePath: string;
}

const ContentList: React.FC<ContentListProps> = ({ content, basePath }) => {

    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagClick = (tag: string) => {
        const newTag = selectedTag === tag ? null : tag;
        setSelectedTag(newTag);
        navigate({
            to: basePath,
            search: { tag: newTag },
        });
    };

    const filteredContent = selectedTag
        ? content.map(yearlyContent => ({
            ...yearlyContent,
            items: yearlyContent.items.filter(item => item.tags?.includes(selectedTag))
        })).filter(yearlyContent => yearlyContent.items.length > 0)
        : content.filter(yearlyContent => yearlyContent.items.length > 0);

    const allTags = Array.from(new Set(content.flatMap(yearlyContent => yearlyContent.items.flatMap(item => item.tags))));

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text bg-gradient-to-r animate-fade-in">
                {basePath === '/projects' ? 'Projects' : 'Blogs'}
            </h1>
            <div className="flex flex-wrap justify-center mb-6 space-x-2">
                {allTags.map(tag => (
                    <span
                        key={tag}
                        onClick={() => handleTagClick(tag || "")}
                        className={`cursor-pointer px-3 py-2 mb-2 rounded-full transition-all duration-300 transform hover:scale-110 ${selectedTag === tag ? 'bg-gray-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {filteredContent.map((yearlyContent) => (
                <div key={yearlyContent.year} className="animate-slide-up">
                    <h2 className="text-2xl font-semibold my-6">{yearlyContent.year}</h2>
                    <hr className="border-gray-300 mb-6" />
                    <div className="space-y-6">
                        {yearlyContent.items.map((item) => (
                            <Link
                                key={item.title}
                                to={`${basePath}/${item.title}`}
                                params={{ itemId: item.title }}
                                className="block transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {item.image && <img src={item.image} alt={item.title} className="w-40 h-32 object-cover rounded-md" />}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 truncate whitespace-normal max-w-full break-words">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{item.date} &middot; {item.duration}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentList;
