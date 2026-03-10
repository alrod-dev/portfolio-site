'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, Zap } from 'lucide-react'
import { PERSONAL_INFO, STATS } from '@/data'

export function About() {

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A full-stack engineer with a passion for building intelligent systems
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-max"
        >
          {/* Large Intro Card */}
          <motion.div
            variants={itemVariants}
            className=" md:col-span-2 md:row-span-2"
          >
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 md:p-10 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
              <div className="flex items-start gap-6 h-full">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">
                    I build intelligent systems that bridge AI and beautiful interfaces
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    With expertise spanning machine learning, full-stack development, and design systems, I create solutions that are both powerful and intuitive. I believe in writing clean, maintainable code and designing experiences that delight users.
                  </p>
                </div>
              </div>
              {/* Animated code background */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none rounded-2xl overflow-hidden">
                <Code2 className="w-32 h-32 absolute -bottom-10 -right-10 text-cyan-500" />
              </div>
            </div>
          </motion.div>

          {/* Globe Card */}
          <motion.div
            variants={itemVariants}
            className=""
          >
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover flex flex-col items-center justify-center gap-4 group">
              <Globe className="w-16 h-16 text-cyan-500 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300" />
              <div className="text-center">
                <p className="font-semibold mb-2">Remote Worldwide</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available for collaborations across the globe
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            variants={itemVariants}
            className=""
          >
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
              <h4 className="font-semibold mb-4 flex items-center gap-2 group-hover:text-cyan-500 transition-colors">
                <Zap className="w-5 h-5" />
                Tech Stack
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600 dark:text-gray-400">React, Next.js, Vue.js</li>
                <li className="text-gray-600 dark:text-gray-400">TypeScript, Tailwind CSS</li>
                <li className="text-gray-600 dark:text-gray-400">Python, FastAPI, Node.js</li>
                <li className="text-gray-600 dark:text-gray-400">AI & ML frameworks</li>
              </ul>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className=" md:col-span-2"
          >
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover">
              <h4 className="font-semibold mb-6">By The Numbers</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-cyan-500 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Currently Building */}
          <motion.div
            variants={itemVariants}
            className=""
          >
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
              <h4 className="font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
                Currently Building
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Multi-agent AI orchestration and advanced RAG pipelines for enterprise applications
              </p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className=""
          >
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-cyan-blue rounded-2xl p-8 h-full border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-glow-cyan flex flex-col items-center justify-center gap-4 text-white text-center group cursor-pointer"
            >
              <h4 className="font-semibold text-lg">Let's build something together</h4>
              <p className="text-sm opacity-90">
                Have a project in mind? Let's talk about it
              </p>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
