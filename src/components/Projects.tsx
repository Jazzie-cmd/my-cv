const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React, TypeScript, and TailwindCSS.",
  },
  {
    title: "Quiz App",
    description: "Interactive quiz platform with real-time scoring.",
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage daily tasks.",
  },
]

const Projects = () => {
  return (
    <section id="projects"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-400 text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects