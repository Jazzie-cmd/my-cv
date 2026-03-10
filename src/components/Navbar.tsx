import { useEffect, useState } from "react"
import Logo from "./Logo"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#020617]/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <Logo />

          <h1 className="text-xl font-semibold">
            Jazzie<span className="text-cyan-400">.</span>
          </h1>

        </div>

        {/* RIGHT SIDE MENU */}
        <div className="ml-auto flex items-center gap-10">

          <ul className="hidden md:flex items-center gap-8 text-[15px] text-gray-300">

            <li><a href="#home" className="relative font-bold text-gray-300 transition
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
    after:bg-gradient-to-r after:from-cyan-400 after:to-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:origin-left hover:after:scale-x-100
    focus:after:origin-right focus:after:scale-x-0">Home</a></li>
            <li><a href="#about" className="relative font-bold text-gray-300 transition
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
    after:bg-gradient-to-r after:from-cyan-400 after:to-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:origin-left hover:after:scale-x-100
    focus:after:origin-right focus:after:scale-x-0">About</a></li>
            <li><a href="#services" className="relative font-bold text-gray-300 transition
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
    after:bg-gradient-to-r after:from-cyan-400 after:to-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:origin-left hover:after:scale-x-100
    focus:after:origin-right focus:after:scale-x-0">Services</a></li>
            <li><a href="#experience" className="relative font-bold text-gray-300 transition
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
    after:bg-gradient-to-r after:from-cyan-400 after:to-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:origin-left hover:after:scale-x-100
    focus:after:origin-right focus:after:scale-x-0">Experience</a></li>
            <li><a href="#projects" className="relative font-bold text-gray-300 transition
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
    after:bg-gradient-to-r after:from-cyan-400 after:to-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:origin-left hover:after:scale-x-100
    focus:after:origin-right focus:after:scale-x-0">Projects</a></li>
            <li><a href="#contact" className="relative font-bold text-gray-300 transition
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
    after:bg-gradient-to-r after:from-cyan-400 after:to-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:origin-left hover:after:scale-x-100
    focus:after:origin-right focus:after:scale-x-0">Contact</a></li>

          </ul>

          {/* HIRE BUTTON */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-sm font-semibold hover:opacity-90 transition"
          >
            Hire Me!
          </a>

        </div>

      </div>
    </nav>
  )
}

export default Navbar