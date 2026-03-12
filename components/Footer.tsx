'use client'

import { Github, Mail, Heart } from 'lucide-react'
import { PERSONAL_INFO } from '@/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full border-t border-gray-200 dark:border-cyan-500/20 bg-light-card dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-text mb-2">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-500 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-500 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-lg hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-lg hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 hover:scale-110 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-cyan-500/20 pt-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center justify-center gap-1">
              &copy; {currentYear} {PERSONAL_INFO.name}. Built with
              <Heart className="w-3 h-3 text-red-500 inline-block" />
              Next.js, Three.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
