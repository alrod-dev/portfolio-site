'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { EXPERIENCE } from '@/data'

export function Experience() {

  return (
    <section id="experience" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey building products and teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30 rounded-full" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="experience-item"
              >
                <div className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex items-start pt-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 rounded-full bg-cyan-500 shadow-glow-cyan ring-4 ring-navy-900 dark:ring-dark-base"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:w-1/2">
                    <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 md:p-8 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">
                        {exp.period}
                      </p>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
