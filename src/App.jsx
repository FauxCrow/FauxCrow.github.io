import { useState } from 'react'
import { motion } from 'framer-motion';
import { GradientBackground } from './components/GradientBackground.jsx'
import { NavigationBar } from './components/NavigationBar.jsx'
import { RoleMap } from './components/RoleMap.jsx'

function App() {
  return (
    <>
      <GradientBackground>
        <NavigationBar/>

        <div className="space-y-5">
          { /* Hero Section */}
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] max-w-7xl mx-auto pt-20">
            { /* Left Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="relative flex flex-col">
                <span className="absolute -top-1 md:-top-2 font-heading font-bold text-3xl md:text-6xl text-transparent opacity-70 select-none z-0" style={{ WebkitTextStroke: '1px var(--colour-white)' }} aria-hidden="true">FauxCrow</span>
                <h1 className="translate-x-1 md:translate-x-2 font-bold font-heading text-3xl md:text-6xl text-(--colour-yellow) z-10 leading-none">FauxCrow</h1>
                <h2 className="mt-0 translate-x-10 md:translate-x-20 font-body text-[0.625rem] md:text-xl text-(--colour-yellow) whitespace-nowrap">Faustina Anne Francisco</h2>
                <div className="mt-8 md:mt-12 translate-x-5 md:translate-x-12">
                  <a href="/Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.05 }} className="px-12 md:px-20 py-2 bg-(--colour-yellow) text-(--colour-purple) rounded-full text-[0.625rem] md:text-lg font-bold shadow-xl">Resume</motion.button>
                  </a>
                </div>
              </div>
            </div>

            { /* Right Section */}
            <RoleMap />
          </main>

          { /* Works */}
          <section id="works" className="max-w-7xl mx-auto pt-20">
            <h1 className="font-heading font-bold text-(--colour-yellow) text-3xl">Works</h1>
          </section>

          { /* Experience */}
          <section id="experience" className="max-w-7xl mx-auto pt-20">
            <h1 className="font-heading font-bold text-(--colour-yellow) text-3xl">Experience</h1>
          </section>

          { /* Contact */}
          <section id="contact" className="max-w-7xl mx-auto pt-20">
            <h1 className="font-heading font-bold text-(--colour-yellow) text-3xl">Want To Chat?</h1>
          </section>

          { /* Footer */ }
          <footer className="py-10 text-center text-(--colour-yellow)/30">
            © {new Date().getFullYear()} FauxCrow
          </footer>
        </div>
      </GradientBackground>
    </>
  )
}

export default App
