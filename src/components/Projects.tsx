const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React + Tailwind."
    },
    {
      title: "Task Manager",
      desc: "Task management web app."
    },
    {
      title: "E-commerce UI",
      desc: "Modern online store UI design."
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects