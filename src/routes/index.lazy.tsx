import { createLazyFileRoute } from '@tanstack/react-router';
import { personalInfo, SkillCategory } from '../data/personalInfo';
import SocialLinks from '../components/SocialLinks';
import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { gsap } from 'gsap';

export const Route = createLazyFileRoute('/')({
    component: Home
});

function Home() {
    const [currentTime, setCurrentTime] = useState('');
    const avatarRef = useRef(null);
    const infoRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        const timeZone = 'America/Chicago'; // Adjust this based on the desired timezone
        const updateTime = () => {
            const now = new Date();
            const zonedDate = toZonedTime(now, timeZone);
            const formattedTime = format(zonedDate, 'HH:mm (z)');
            setCurrentTime(formattedTime);
        };

        updateTime(); // Initial call to set the time immediately
        const intervalId = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    useEffect(() => {
        gsap.fromTo(
            avatarRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );

        gsap.fromTo(
            infoRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
        );

        gsap.fromTo(
            skillsRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power2.out', delay: 1 }
        );
    }, []);

    return (
        <div className="flex flex-col items-center md:flex-row md:items-start p-8 max-w-5xl mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
            {/* Avatar Section */}
            <div ref={avatarRef} className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
                <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                />
                {/* Location and Time Section */}
                <div className="mt-4 text-center md:text-left">
                    <div className="text-gray-700 dark:text-gray-300 flex items-center justify-center md:justify-start">
                        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                        {personalInfo.location}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 flex items-center justify-center md:justify-start mt-1">
                        <FaClock className="w-4 h-4 mr-1" />
                        {currentTime}
                    </div>
                </div>
            </div>
            {/* Information Section */}
            <div ref={infoRef} className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{personalInfo.name}</h1>
                <div className="flex justify-center md:justify-start space-x-4 mb-6">
                    <SocialLinks links={personalInfo.socialLinks} />
                </div>
                {/* Introduction Section */}
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {personalInfo.intro}
                </p>
                {/* Skills Section */}
                <div ref={skillsRef} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {personalInfo.skills.map((category: SkillCategory) => (
                            <div key={category.category} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{category.category}</h3>
                                <div className="flex flex-wrap">
                                    {category.skills.map((skill) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div key={skill.name} className="flex items-center space-x-2 mb-2 mr-4">
                                                <IconComponent size="28" className="text-gray-800 dark:text-gray-200" />
                                                <span className="text-gray-800 dark:text-gray-200 text-lg">{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
