import SocialLinks from '../components/SocialLinks'
import { personalInfo } from '../data/personalInfo'
import { createLazyFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

function About() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        {/* Avatar Section */}
        <motion.img
          src={personalInfo.avatar}
          alt={personalInfo.name}
          className="w-32 h-32 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Name and Social Links */}
        <motion.h1
          className="text-4xl font-extrabold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.div
          className="flex justify-center space-x-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLinks links={personalInfo.socialLinks} />
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="flex">
        <div className="w-full space-y-8 mt-8 pl-8">
          {/* Education Section */}
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          {personalInfo.education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="ml-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
                <p className="text-lg font-bold">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.period}
                </p>
                <p className="text-md mt-2">{edu.degree}</p>
                {edu.courses.length > 0 && (
                  <ul className="list-disc ml-5 mt-2">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}

          {/* Experience Section */}
          <h2 className="text-3xl font-semibold mb-6 mt-12">
            Professional Experience
          </h2>
          {personalInfo.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="ml-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
                <p className="text-lg font-bold">{exp.position}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </p>
                <p className="text-md mt-2">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {exp.company}
                  </a>
                </p>
                <ul className="list-disc ml-5 mt-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-4">
                    <div className="flex flex-wrap">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
