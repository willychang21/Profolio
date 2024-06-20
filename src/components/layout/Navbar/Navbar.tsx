import { personalInfo } from '../../../data/personalInfo'
import LightDarkSwitch from './LightDarkSwitch'
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="flex justify-between items-center p-4 transition-colors duration-300 bg-white dark:bg-gray-800 shadow-md relative z-50">
      <div className="text-lg font-bold transition-transform duration-300 hover:scale-105">
        <Link
          className="hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100"
          to="/"
        >
          {personalInfo.firstName}'s Homepage
        </Link>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <Link
          className={`transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-110 ${
            isActive('/about') ? 'font-bold underline' : ''
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-110 ${
            isActive('/projects') ? 'font-bold underline' : ''
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-110 ${
            isActive('/blogs') ? 'font-bold underline' : ''
          }`}
          to="/blogs"
        >
          Blogs
        </Link>
        <a
          className="transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-110"
          href={personalInfo.cvLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <LightDarkSwitch />
      </div>
      <div className="flex items-center space-x-4 md:hidden">
        <LightDarkSwitch />
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full transition-all duration-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-white md:hidden animate-slide-down z-50">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link
              className={`w-full transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-105 ${
                isActive('/about') ? 'font-bold underline' : ''
              }`}
              to="/about"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              className={`w-full transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-105 ${
                isActive('/projects') ? 'font-bold underline' : ''
              }`}
              to="/projects"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              className={`w-full transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-105 ${
                isActive('/blogs') ? 'font-bold underline' : ''
              }`}
              to="/blogs"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <a
              className="w-full transition duration-300 transform hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-100 hover:scale-105"
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
