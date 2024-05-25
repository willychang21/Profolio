import { SocialLink } from '../data/personalInfo';

interface SocialLinksProps {
    links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
    return (
        <div className="flex space-x-4">
            {links.map((link: SocialLink) => {
                const IconComponent = link.icon;
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500"
                    >
                        <IconComponent size="24" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;
