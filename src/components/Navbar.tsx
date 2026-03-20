import { useEffect, useState, useRef } from "react"
import Logo from "./Logo"

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(true)
  const [drop, setDrop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.9
      const isMobile = window.innerWidth < 768

      // MOBILE → never hide navbar
      if (isMobile) {
        setShowNavbar(true)
        setDrop(scrollY > 40)
        return
      }

      // DESKTOP (your original effect)
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


  // close mobile menu when clicking outside
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [menuOpen])


  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-500
      ${showNavbar ? "top-0" : "-top-28"}
      ${drop ? "animate-navbarDrop bg-[#020617]/80 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.6)]" : "bg-transparent"}
      `}
    >

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">

        {/* Logo */}
        <div className="hidden md:flex items-center gap-3">
          <Logo />
          <h1 className="text-2xl font-semibold">
            Mark Joshua<span className="text-cyan-400">.</span>
          </h1>
        </div>

        <div className="ml-auto flex items-center gap-10">

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] text-gray-300">

            <li>
              <a href="#home"
                className="relative font-bold text-gray-300 transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-linear-to-r after:from-cyan-400 after:to-white
                after:origin-right after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:origin-left hover:after:scale-x-100">
                Home
              </a>
            </li>

            <li>
              <a href="#about"
                className="relative font-bold text-gray-300 transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-linear-to-r after:from-cyan-400 after:to-white
                after:origin-right after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:origin-left hover:after:scale-x-100">
                About
              </a>
            </li>

            <li>
              <a href="#skills"
                className="relative font-bold text-gray-300 transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-linear-to-r after:from-cyan-400 after:to-white
                after:origin-right after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:origin-left hover:after:scale-x-100">
                Skills
              </a>
            </li>

            <li>
              <a href="#experience"
                className="relative font-bold text-gray-300 transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-linear-to-r after:from-cyan-400 after:to-white
                after:origin-right after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:origin-left hover:after:scale-x-100">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects"
                className="relative font-bold text-gray-300 transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-linear-to-r after:from-cyan-400 after:to-white
                after:origin-right after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:origin-left hover:after:scale-x-100">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact"
                className="relative font-bold text-gray-300 transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-linear-to-r after:from-cyan-400 after:to-white
                after:origin-right after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:origin-left hover:after:scale-x-100">
                Contact
              </a>
            </li>

          </ul>

          {/* Hire Me */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-3 rounded-full text-white text-md font-semibold
            bg-gradient-to-r from-cyan-500 to-cyan-400
            border border-transparent
            hover:bg-none hover:border-cyan-400 hover:text-cyan-400
            hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]
            transition-all duration-300"
          >
            Hire Me!
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-[#020617] shadow-lg transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="p-6 flex flex-col gap-6">

          <div className="flex items-center gap-3 mb-6">
            <Logo />
            <h1 className="text-xl font-semibold">
              Jazzie<span className="text-cyan-400">.</span>
            </h1>
          </div>

          <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
          <a onClick={() => setMenuOpen(false)} href="#about">About</a>
          <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#experience">Experience</a>
          <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar