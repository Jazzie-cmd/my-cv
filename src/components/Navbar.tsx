const Navbar = () => {

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">
          MyPortfolio
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 text-base font-medium">

          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-indigo-400 transition"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-indigo-400 transition"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-indigo-400 transition"
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-indigo-400 transition"
            >
              Contact
            </button>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar