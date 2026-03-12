'use client'

import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/data'
import { ScrollReveal } from './ScrollReveal'

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform('')
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: transform ? 'none' : 'transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Things I&apos;ve <span className="bg-gradient-text">Built</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              From AI-powered platforms to enterprise tools — each project solves a real problem
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <TiltCard className="group h-full">
                <div className="relative bg-light-card dark:bg-dark-card rounded-xl overflow-hidden border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-card-hover">
                  {/* Project Header with Gradient */}
                  <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <div className="text-6xl flex items-center justify-center h-full group-hover:scale-125 transition-transform duration-500">
                        {project.icon}
                      </div>
                    </div>
                    {/* Shine overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.7s, opacity 0.3s' }} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 rounded-lg transition-all border border-cyan-500/30 hover:border-cyan-500/50 hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 rounded-lg transition-all border border-cyan-500/30 hover:border-cyan-500/50 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
