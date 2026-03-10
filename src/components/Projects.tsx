type Project = {
  title: string
  desc: string
  image: string
  tech: string[]
  github?: string
  demo?: string
}

const Projects = () => {

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React + TypeScript + TailwindCSS v4.",
      image: "/public/portfolio.png",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/Jazzie-cmd/my-cv",
      demo: "https://jazzie-nu.vercel.app/"
    },
    {
      title: "SWORD",
      desc: "LLM-Based Spearphishing and Whaling attack in Emails.",
      image: "/projects/taskmanager.png",
      tech: ["React", "Firebase","Python","Tailwind"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "E-commerce UI",
      desc: "Modern responsive e-commerce interface.",
      image: "/projects/ecommerce.png",
      tech: ["React", "Tailwind"]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400 transition"
            >

              {/* Project Image */}
              <img
                src={project.image}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm">

                  {project.github && (
                    <a
                      href={project.github}
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-cyan-400 hover:underline"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects