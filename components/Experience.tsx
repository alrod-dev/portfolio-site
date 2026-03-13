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
          <div className="mt-24 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Companies I&apos;ve Partnered With
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Trusted by enterprise teams to deliver production-grade solutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-3xl mx-auto">
              {PARTNERS.map((partner, i) => (
                <ScrollReveal key={partner.name} delay={0.2 + i * 0.08} direction="up">
                  <div
                    className="group relative bg-light-card dark:bg-dark-card rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700/50 hover:border-opacity-60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-center gap-3 min-h-[140px] overflow-hidden"
                    style={{
                      ['--partner-color' as string]: partner.color,
                    }}
                  >
                    {/* Subtle top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: partner.color }}
                    />
                    {/* Logo */}
                    <div className="w-full flex items-center justify-center h-12 md:h-14 opacity-80 group-hover:opacity-100 transition-opacity duration-300 dark:brightness-110 dark:contrast-110">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    {/* Industry label */}
                    <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-500 font-medium tracking-wide uppercase">
                      {partner.industry}
                    </p>
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
