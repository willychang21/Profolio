import SocialLinks from '../components/SocialLinks'
import { personalInfo } from '../data/personalInfo'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  const avatarRef = useRef(null)
  const infoRef = useRef(null)
  const navigate = useNavigate()
  const [isExiting, setIsExiting] = useState(false)

  const handleBackgroundClick = () => {
    setIsExiting(true)
    setTimeout(() => {
      navigate({ to: '/about' })
    }, 1000) // Match this duration with the exit animation duration
  }

  return (
    <div
      className="flex flex-col md:flex-row h-screen cursor-pointer"
      onClick={handleBackgroundClick}
    >
      {/* Avatar Section */}
      <motion.div
        ref={avatarRef}
        className="flex-1 flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-8"
        initial={{ opacity: 0, x: -100 }}
        animate={isExiting ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={personalInfo.avatar}
          alt={personalInfo.name}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
        />
      </motion.div>

      {/* Information Section */}
      <motion.div
        ref={infoRef}
        className="flex-1 flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-8"
        initial={{ opacity: 0, x: 100 }}
        animate={isExiting ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {personalInfo.name.toUpperCase()}
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
          {personalInfo.intro}
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <SocialLinks links={personalInfo.socialLinks} />
        </div>
      </motion.div>
    </div>
  )
}

export default Home
