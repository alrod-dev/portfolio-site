import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alfredo Wiesner | AI Engineer & Full-Stack Developer',
  description:
    '8+ years building production systems — from enterprise Vue migrations to AI-powered platforms. Portfolio of innovative projects spanning AI, full-stack development, and design systems.',
  keywords: [
    'Alfredo Wiesner',
    'Portfolio',
    'Full-Stack Developer',
    'AI Engineer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Alfredo Wiesner', url: 'https://github.com/alrod-dev' }],
  creator: 'Alfredo Wiesner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alfredo-wiesner.dev',
    title: 'Alfredo Wiesner | AI Engineer & Full-Stack Developer',
    description:
      '8+ years building production systems — from enterprise Vue migrations to AI-powered platforms.',
    siteName: 'Alfredo Wiesner Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfredo Wiesner | AI Engineer & Full-Stack Developer',
    description:
      '8+ years building production systems — from enterprise Vue migrations to AI-powered platforms.',
    creator: '@alrod_dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a1a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-light-base dark:bg-dark-base text-light-primary dark:text-dark-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
