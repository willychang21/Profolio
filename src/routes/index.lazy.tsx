import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Home
});

import { personalInfo, SocialLink, SkillCategory } from '../config/personalInfo';

//TODO: Github activity history
function Home() {
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start p-4 max-w-5xl mx-auto">
            {/* Avatar Section */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
                <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
                />
            </div>
            {/* Information Section */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                <div className="flex justify-center md:justify-start space-x-4 mb-4">
                    {personalInfo.socialLinks.map((link: SocialLink) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500"
                            >
                                <IconComponent size="24" />
                            </a>
                        );
                    })}
                </div>
                <p className="mb-4">
                    {personalInfo.intro}
                </p>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                {personalInfo.skills.map((category: SkillCategory) => (
                    <div key={category.category} className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                            {category.skills.map(skill => {
                                const IconComponent = skill.icon;
                                return (
                                    <div key={skill.name} className="flex items-center space-x-2 mb-2">
                                        <IconComponent size="24" className="text-gray-900 dark:text-gray-100" />
                                        <span className="text-gray-900 dark:text-gray-100">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}