import { useState, useEffect } from "react"
import Logo from "./components/Logo"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // loader duration

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App