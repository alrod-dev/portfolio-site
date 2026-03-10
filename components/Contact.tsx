'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react'
import { PERSONAL_INFO } from '@/data'
import { copyToClipboard } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(PERSONAL_INFO.email)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="contact" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have an exciting project or opportunity? I&apos;d love to hear from you
          </p>
        </div>

        {/* Contact Methods */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Email */}
          <div className="group">
            <button
              onClick={handleCopyEmail}
              className="w-full bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                {PERSONAL_INFO.email}
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Click to copy</span>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* GitHub */}
          <div className="group">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">GitHub</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Check out my projects and contributions
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-cyan-600 dark:text-cyan-400">
                <span>Visit Profile</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Connect with me professionally
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-cyan-600 dark:text-cyan-400">
                <span>Visit Profile</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className={`bg-light-card dark:bg-dark-card rounded-xl p-8 md:p-10 border border-gray-200 dark:border-cyan-500/20 transition-all duration-700 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3 bg-gradient-cyan-blue text-white font-semibold rounded-lg hover:shadow-glow-cyan hover:scale-[1.02] disabled:opacity-50 transition-all duration-300"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
