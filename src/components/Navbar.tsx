import { useEffect, useState } from "react"
import Logo from "./Logo"

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(true)
  const [drop, setDrop] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.9

      if (scrollY < 80) {
        setShowNavbar(true)
        setDrop(false)
      }

      else if (scrollY < heroHeight) {
        setShowNavbar(false)
      }

      else {
        setShowNavbar(true)
        setDrop(true)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-500
      ${showNavbar ? "top-0" : "-top-28"}
      ${drop ? "animate-navbarDrop bg-[#020617]/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >

      <div className="max-w-300 mx-auto px-6 py-6 flex items-center">

        <div className="flex items-center gap-3">

          <Logo />

          <h1 className="text-xl font-semibold">
            Jazzie<span className="text-cyan-400">.</span>
          </h1>

        </div>

        <div className="ml-auto flex items-center gap-10">

          <ul className="hidden md:flex items-center gap-8 text-[15px] text-gray-300">

            <li><a href="#home" className="relative font-bold text-gray-300 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-cyan-400 after:to-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Home</a></li>

            <li><a href="#about" className="relative font-bold text-gray-300 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-cyan-400 after:to-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">About</a></li>

            <li><a href="#skills" className="relative font-bold text-gray-300 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-cyan-400 after:to-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Skills</a></li>

            <li><a href="#experience" className="relative font-bold text-gray-300 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-cyan-400 after:to-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Experience</a></li>

            <li><a href="#projects" className="relative font-bold text-gray-300 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-cyan-400 after:to-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Projects</a></li>

            <li><a href="#contact" className="relative font-bold text-gray-300 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-cyan-400 after:to-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Contact</a></li>

          </ul>

          <a
            href="#contact"
            className="hidden md:block px-6 py-3 rounded-full text-white text-md font-semibold bg-linear-to-r from-cyan-500 border border-transparent hover:border-cyan-500 hover:from-transparent hover:text-cyan-500 transition-all duration-300"
          >
            Hire Me!
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar