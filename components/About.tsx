'use client'

import { Code2, Globe, Zap, Sparkles } from 'lucide-react'
import { PERSONAL_INFO, STATS } from '@/data'
import { ScrollReveal } from './ScrollReveal'

export function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who I <span className="bg-gradient-text">Am</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              I turn coffee into code and ideas into products that scale
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-max">
          {/* Large Intro Card */}
          <ScrollReveal delay={0.1}>
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative bg-light-card dark:bg-dark-card rounded-2xl p-8 md:p-10 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group overflow-hidden">
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
            </div>
          </ScrollReveal>

          {/* Globe Card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover flex flex-col items-center justify-center gap-4 group">
              <Globe className="w-16 h-16 text-cyan-500 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 group-hover:animate-spin-slow" />
              <div className="text-center">
                <p className="font-semibold mb-2">Remote Worldwide</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pacific timezone, global mindset
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Tech Stack Card */}
          <ScrollReveal delay={0.3}>
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
              <h4 className="font-semibold mb-4 flex items-center gap-2 group-hover:text-cyan-500 transition-colors">
                <Zap className="w-5 h-5" />
                Tech Stack
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600 dark:text-gray-400">React, Next.js, Vue.js</li>
                <li className="text-gray-600 dark:text-gray-400">TypeScript, Tailwind CSS</li>
                <li className="text-gray-600 dark:text-gray-400">Python, FastAPI, Node.js</li>
                <li className="text-gray-600 dark:text-gray-400">LLMs, RAG, LangChain</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Stats Card */}
          <ScrollReveal delay={0.2}>
            <div className="md:col-span-2">
              <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover">
                <h4 className="font-semibold mb-6">By The Numbers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center group/stat">
                      <p className="text-2xl md:text-3xl font-bold text-cyan-500 mb-1 group-hover/stat:scale-110 transition-transform">
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Currently Building */}
          <ScrollReveal delay={0.3}>
            <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 h-full border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group">
              <h4 className="font-semibold mb-3 group-hover:text-cyan-500 transition-colors flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Currently Building
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Multi-agent AI orchestration and advanced RAG pipelines for enterprise applications
              </p>
            </div>
          </ScrollReveal>

          {/* CTA Card */}
          <ScrollReveal delay={0.4}>
            <a
              href="#contact"
              className="block bg-gradient-cyan-blue rounded-2xl p-8 h-full border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-glow-cyan hover:scale-[1.02] flex flex-col items-center justify-center gap-4 text-white text-center group cursor-pointer"
            >
              <h4 className="font-semibold text-lg">Got an idea? Let&apos;s build it.</h4>
              <p className="text-sm opacity-90">
                I&apos;m always down for interesting projects
              </p>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
