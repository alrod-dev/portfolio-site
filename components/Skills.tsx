'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/data'

export function Skills() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over 8+ years of professional development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="skill-group"
            >
              <div className="bg-light-card dark:bg-dark-card rounded-xl p-8 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover">
                <h3 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
                  {category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, x: 4 }}
                      className="group"
                    >
                      <div className="px-4 py-3 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg border border-cyan-200 dark:border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer">
                        <span className="text-sm font-medium text-cyan-900 dark:text-cyan-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-200 transition-colors">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-xl border border-cyan-500/30 dark:border-cyan-500/40"
        >
          <p className="text-center text-gray-700 dark:text-gray-300">
            Always learning new technologies and staying up-to-date with industry trends.
            Open to exploring emerging frameworks and tools that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
