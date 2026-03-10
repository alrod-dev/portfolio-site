import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#f0f9fc',
          100: '#cff3f9',
          200: '#a0e8f4',
          300: '#70ddef',
          400: '#41d3ea',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0a7ea4',
          800: '#0c6b86',
          900: '#155e75',
          950: '#0f434e',
        },
        navy: {
          900: '#0a0a1a',
          800: '#0f0f23',
          700: '#14142d',
        },
        slate: {
          850: '#1a1f35',
        },
      },
      backgroundColor: {
        'dark-base': '#0a0a1a',
        'dark-card': '#1e293b',
        'light-base': '#ffffff',
        'light-card': '#f8fafc',
      },
      textColor: {
        'dark-primary': '#ffffff',
        'dark-secondary': '#cbd5e1',
        'light-primary': '#0f172a',
        'light-secondary': '#475569',
      },
      backgroundImage: {
        'gradient-cyan-blue': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-cyan-blue-dark': 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typewriter': 'typewriter 0.75s steps(40,end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'scroll-indicator': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#06b6d4' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
        'glow-blue': '0 0 30px rgba(3, 102, 214, 0.5)',
        'card-hover': '0 20px 50px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        '10xl': '6rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
