import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import BackToTop from "./components/BackToTop"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // ⏱ loader duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loader with exit animation */}
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {/*Main Content (always mounted underneath) */}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App