'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react'
import { PERSONAL_INFO } from '@/data'
import { copyToClipboard } from '@/lib/utils'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, you'd send this data to a backend service
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
    <section id="contact" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have an exciting project or opportunity? I'd love to hear from you
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group"
          >
            <button
              onClick={handleCopyEmail}
              className="w-full bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover"
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
          </motion.div>

          {/* GitHub */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover"
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
                <span>→</span>
              </div>
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group"
          >
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-card-hover"
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
                <span>→</span>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-light-card dark:bg-dark-card rounded-xl p-8 md:p-10 border border-gray-200 dark:border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
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

            {/* Email */}
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

            {/* Message */}
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

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3 bg-gradient-cyan-blue text-white font-semibold rounded-lg hover:shadow-glow-cyan disabled:opacity-50 transition-all duration-300"
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
