'use client'

import { SKILLS } from '@/data'
import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

const categoryIcons: Record<string, string> = {
  'AI & ML': '🧠',
  'Front-End': '🎨',
  'Back-End': '🔧',
  'DevOps & Tools': '🚀',
}

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-text">Toolkit</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              8+ years of collecting tools and actually learning when to use them
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, skills], catIndex) => (
            <ScrollReveal key={category} delay={catIndex * 0.1}>
              <div className="bg-light-card dark:bg-dark-card rounded-xl p-8 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
                <h3 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400 flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[category] || '💡'}</span>
                  {category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <div className="px-4 py-3 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg border border-cyan-200 dark:border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all duration-300 cursor-default">
                        <span className="text-sm font-medium text-cyan-900 dark:text-cyan-300">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fun footer */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-xl border border-cyan-500/30 dark:border-cyan-500/40 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              Always experimenting with new tech. Currently deep-diving into multi-agent AI systems and edge computing.
              <span className="text-cyan-500 ml-1">The learning never stops.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
