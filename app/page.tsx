import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { CursorGlow } from '@/components/CursorGlow'
import { EasterEgg } from '@/components/EasterEgg'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <CursorGlow />
      <EasterEgg />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
