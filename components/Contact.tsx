'use client'

import { useState, useRef, useEffect } from 'react'
import { Github, Mail, Copy, Check, Terminal } from 'lucide-react'
import { PERSONAL_INFO } from '@/data'
import { copyToClipboard } from '@/lib/utils'

const INITIAL_LINES = [
  { text: 'Welcome to alfredo.sh v2.0', type: 'system' as const },
  { text: "Type 'help' for available commands", type: 'system' as const },
]

type LineType = 'user' | 'system' | 'success' | 'error'

export function Contact() {
  const [lines, setLines] = useState<{ text: string; type: LineType }[]>(INITIAL_LINES)
  const [currentInput, setCurrentInput] = useState('')
  const [step, setStep] = useState<'idle' | 'name' | 'email' | 'message' | 'confirm'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const addLine = (text: string, type: LineType = 'system') => {
    setLines(prev => [...prev, { text, type }])
  }

  const handleCommand = (input: string) => {
    const cmd = input.trim().toLowerCase()
    addLine(`> ${input}`, 'user')

    if (step === 'name') {
      setFormData(prev => ({ ...prev, name: input.trim() }))
      addLine(`Nice to meet you, ${input.trim()}! What's your email?`, 'system')
      setStep('email')
    } else if (step === 'email') {
      if (!input.includes('@')) {
        addLine("Hmm, that doesn't look like an email. Try again:", 'error')
        return
      }
      setFormData(prev => ({ ...prev, email: input.trim() }))
      addLine("What's on your mind? Drop your message:", 'system')
      setStep('message')
    } else if (step === 'message') {
      const updatedForm = { ...formData, message: input.trim() }
      setFormData(updatedForm)
      addLine('--- Preview ---', 'system')
      addLine(`From: ${updatedForm.name} <${updatedForm.email}>`, 'system')
      addLine(`Message: ${input.trim()}`, 'system')
      addLine('--- End ---', 'system')
      addLine("Look good? Send it? (yes/no)", 'system')
      setStep('confirm')
    } else if (step === 'confirm') {
      if (cmd === 'yes' || cmd === 'y') {
        const subject = encodeURIComponent(`Hey Alfredo — from ${formData.name}`)
        const body = encodeURIComponent(`Hi Alfredo,\n\n${formData.message}\n\nBest,\n${formData.name} (${formData.email})`)
        window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank')
        addLine('Email client opened — message ready to fly!', 'success')
        addLine("Thanks for reaching out, I'll get back to you soon.", 'success')
        addLine("Type 'clear' to reset or keep exploring.", 'system')
        setStep('idle')
      } else {
        addLine('No worries, cancelled. Type "contact" to start over.', 'system')
        setStep('idle')
      }
    } else {
      switch (cmd) {
        case 'help':
          addLine('', 'system')
          addLine('  contact    Start a conversation with me', 'system')
          addLine('  github     Open my GitHub profile', 'system')
          addLine('  email      Copy my email address', 'system')
          addLine('  whoami     A bit about me', 'system')
          addLine('  skills     What I work with', 'system')
          addLine('  clear      Clear the terminal', 'system')
          addLine('  secret     ???', 'system')
          addLine('', 'system')
          break
        case 'contact':
        case 'hire':
        case 'hire me':
        case 'message':
        case 'msg':
          addLine("Let's do this! What's your name?", 'system')
          setStep('name')
          break
        case 'github':
          window.open(PERSONAL_INFO.github, '_blank')
          addLine('Opening GitHub...', 'success')
          break
        case 'email':
          copyToClipboard(PERSONAL_INFO.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
          addLine(`Copied to clipboard: ${PERSONAL_INFO.email}`, 'success')
          break
        case 'clear':
          setLines(INITIAL_LINES)
          setStep('idle')
          setFormData({ name: '', email: '', message: '' })
          break
        case 'whoami':
          addLine('', 'system')
          addLine('Alfredo Wiesner', 'success')
          addLine('AI Engineer & Senior Full-Stack Developer', 'system')
          addLine('8+ years | LLMs, RAG, React, Vue, Node, Python', 'system')
          addLine('Building intelligent systems that actually ship.', 'system')
          addLine('', 'system')
          break
        case 'skills':
          addLine('', 'system')
          addLine('AI:        LLMs, RAG, LangChain, Embeddings, Agents', 'system')
          addLine('Frontend:  React, Vue, Next.js, TypeScript', 'system')
          addLine('Backend:   Node, FastAPI, Python, Go, PostgreSQL', 'system')
          addLine('DevOps:    Docker, AWS, Vercel, CI/CD', 'system')
          addLine('', 'system')
          break
        case 'secret':
          addLine('', 'system')
          addLine("You found it! Here's a secret:", 'success')
          addLine('I once debugged a production issue at 3am', 'system')
          addLine('while eating cold pizza. The bug? A missing comma.', 'system')
          addLine("We've all been there.", 'system')
          addLine('', 'system')
          break
        case 'sudo':
        case 'sudo rm -rf':
        case 'sudo rm -rf /':
          addLine('Nice try. Permission denied... forever.', 'error')
          break
        case 'ls':
          addLine('projects/  skills/  experience/  .secret_stash/', 'system')
          break
        case 'cd .secret_stash':
        case 'cat .secret_stash':
          addLine("You're persistent. I like that. Type \"secret\".", 'system')
          break
        case 'ping':
          addLine('PONG!', 'success')
          break
        case 'hello':
        case 'hi':
        case 'hey':
          addLine("Hey there! Type 'contact' to send me a message.", 'system')
          break
        case 'exit':
        case 'quit':
          addLine('You can check out any time you like...', 'system')
          addLine('...but you can never leave. (Type "help" instead)', 'system')
          break
        case 'npm install happiness':
          addLine('Installing happiness@latest...', 'system')
          addLine('added 1 package in 0.001s', 'success')
          addLine('Done! You now have happiness.', 'success')
          break
        case 'coffee':
          addLine('Brewing coffee...', 'system')
          addLine('Here you go: ☕', 'success')
          break
        case 'matrix':
          addLine('Wake up, Neo...', 'success')
          addLine('The Matrix has you...', 'system')
          addLine('Follow the white rabbit.', 'system')
          break
        default:
          if (cmd) {
            addLine(`Command not found: ${cmd}. Type 'help' for options.`, 'error')
          }
      }
    }
    setCurrentInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      handleCommand(currentInput)
    }
  }

  const focusTerminal = () => {
    inputRef.current?.focus()
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="bg-gradient-text">Talk</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Drop me a line — or try the terminal if you&apos;re feeling adventurous
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                  <><Check className="w-4 h-4" /><span>Copied!</span></>
                ) : (
                  <><Copy className="w-4 h-4" /><span>Click to copy</span></>
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
        </div>

        {/* Terminal */}
        <div
          className="bg-[#0d1117] rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl cursor-text"
          onClick={focusTerminal}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-gray-500 font-mono flex items-center justify-center gap-2">
                <Terminal className="w-3 h-3" />
                alfredo.sh
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="p-4 md:p-6 font-mono text-sm max-h-[400px] overflow-y-auto terminal-scroll"
          >
            {/* ASCII Art */}
            <pre className="text-cyan-500 mb-4 text-[9px] md:text-xs leading-tight hidden md:block select-none">{`  ╔═══════════════════════════════════╗
  ║   █████╗ ██╗    ██╗              ║
  ║  ██╔══██╗██║    ██║              ║
  ║  ███████║██║ █╗ ██║              ║
  ║  ██╔══██║██║███╗██║              ║
  ║  ██║  ██║╚███╔███╔╝              ║
  ║  ╚═╝  ╚═╝ ╚══╝╚══╝              ║
  ╚═══════════════════════════════════╝`}</pre>

            {/* Lines */}
            {lines.map((line, i) => (
              <div
                key={i}
                className={`mb-1 whitespace-pre-wrap ${
                  line.type === 'user'
                    ? 'text-cyan-400'
                    : line.type === 'success'
                    ? 'text-green-400'
                    : line.type === 'error'
                    ? 'text-red-400'
                    : 'text-gray-300'
                }`}
              >
                {line.text}
              </div>
            ))}

            {/* Input */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-cyan-400 font-bold">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-gray-100 outline-none font-mono text-sm caret-cyan-400"
                placeholder={
                  step === 'idle'
                    ? "type 'help' or 'contact'"
                    : step === 'name'
                    ? 'your name...'
                    : step === 'email'
                    ? 'your@email.com...'
                    : step === 'message'
                    ? 'your message...'
                    : step === 'confirm'
                    ? 'yes or no...'
                    : ''
                }
                autoComplete="off"
                spellCheck={false}
              />
              <span className="w-2 h-5 bg-cyan-400 animate-pulse rounded-sm" />
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-600 mt-4">
          Try typing &quot;secret&quot;, &quot;npm install happiness&quot;, or &quot;coffee&quot;
        </p>
      </div>
    </section>
  )
}
