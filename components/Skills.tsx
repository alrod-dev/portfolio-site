'use client'

import { SKILLS } from '@/data'

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over 8+ years of professional development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div
              key={category}
              className="skill-group"
            >
              <div className="bg-light-card dark:bg-dark-card rounded-xl p-8 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover">
                <h3 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
                  {category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="group hover:scale-105 hover:translate-x-1 transition-transform"
                    >
                      <div className="px-4 py-3 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg border border-cyan-200 dark:border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer">
                        <span className="text-sm font-medium text-cyan-900 dark:text-cyan-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-200 transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-xl border border-cyan-500/30 dark:border-cyan-500/40">
          <p className="text-center text-gray-700 dark:text-gray-300">
            Always learning new technologies and staying up-to-date with industry trends.
            Open to exploring emerging frameworks and tools that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  )
}
