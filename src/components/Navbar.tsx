import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import LightDarkSwitch from './LightDarkSwitch';
import { personalInfo } from '../data/personalInfo';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="flex justify-between items-center p-4 transition-colors duration-300 bg-white dark:bg-gray-800">
            <div className="text-lg font-bold">
                <Link className="hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/">{personalInfo.name}'s Homepage</Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
                <Link className="hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/about">About</Link>
                <Link className="hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/projects">Projects</Link>
                <Link className="hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/cv">CV</Link>
                {/* <Link className="hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/blog">Blog</Link> */}
                <LightDarkSwitch />
            </div>
            <div className="flex items-center space-x-4 md:hidden">
                <LightDarkSwitch />
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full transition-all duration-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-white md:hidden">
                    <div className="flex flex-col items-start p-4 space-y-4">
                        <Link className="w-full hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/about" onClick={toggleMenu}>About</Link>
                        <Link className="w-full hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/projects" onClick={toggleMenu}>Projects</Link>
                        <Link className="w-full hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/cv">CV</Link>
                        {/* <Link className="w-full hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100" to="/blog">Blog</Link> */}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
