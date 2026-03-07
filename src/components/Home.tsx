const Home = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      const offset = 80 // navbar height
      const position = element.offsetTop - offset

      window.scrollTo({
        top: position,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0f172a] text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-indigo-400 font-semibold mb-2">
            HI THERE 👋 I'M JAZZIE
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            WEB <span className="text-indigo-500">DEVELOPER</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl">
            A passionate Web & Web App Developer and fresh graduate specializing
            in React and TypeScript.
          </p>

          <div className="mt-6 flex gap-4">

            <button
              onClick={() => scrollToSection("projects")}
              className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border border-gray-600 px-6 py-3 rounded-lg hover:border-indigo-400 transition"
            >
              Contact Me
            </button>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/Profile.png"
            alt="Jazzie"
            className="w-[300px] md:w-[320px] object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Home