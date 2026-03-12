'use client'

import { CheckCircle2 } from 'lucide-react'
import { EXPERIENCE, PARTNERS } from '@/data'
import { ScrollReveal } from './ScrollReveal'

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="bg-gradient-text">Do</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              8+ years of shipping AI-powered and enterprise-grade solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30 rounded-full" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.15}>
                <div className="experience-item">
                  <div className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-shrink-0 flex items-start pt-2">
                      <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-glow-cyan ring-4 ring-navy-900 dark:ring-dark-base hover:scale-125 transition-transform" />
                    </div>

                    <div className="flex-1 md:w-1/2">
                      <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 md:p-8 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover group hover:-translate-y-1">
                        <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors mb-4">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
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

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Partners & Clients */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Companies I&apos;ve Partnered With
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10">
              Trusted by enterprise teams to deliver production-grade solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {PARTNERS.map((partner, i) => (
                <ScrollReveal key={partner.name} delay={0.3 + i * 0.1} direction="up">
                  <div className="bg-light-card dark:bg-dark-card rounded-xl px-6 py-4 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{partner.name}</p>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">{partner.industry}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
