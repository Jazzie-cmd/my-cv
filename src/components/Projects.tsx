import { useState } from "react"

type Project = {
  title: string
  desc: string
  image: string
  tech: string[]
  github?: string
  demo?: string
}

const Projects = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio website built with TypeScript, React, and TailwindCSS v4, showcasing my projects, technical skills, and experience through a responsive and visually engaging user interface.",
      image: "/Portfolio.PNG",
      tech: ["TypeScript React", "Tailwind"],
      github: "https://github.com/Jazzie-cmd/my-cv",
      demo: "https://jazzie-nu.vercel.app/"
    },
    {
      title: "LLM-Based Spearphishing and Whaling attack in Emails",
      desc: "Our Thesis project from College. This Application is powered by Large Language Model (LLM) for detecting spearphishing and whaling attacks in email communications. It utilizes advanced NLP techniques to analyze message patterns, identify suspicious content, and provide intelligent threat classification for improved cybersecurity.",
      image: "/SWORD.jpg",
      tech: ["TypeScript React", "Firebase", "Python", "Tailwind"],
      github: "https://github.com/Jazzie-cmd/LLM"
    },
    {
      title: "E-commerce UI",
      desc: "Modern responsive e-commerce interface.",
      image: "/projects/ecommerce.png",
      tech: ["React", "Tailwind"]
    }
  ]

  return (
    <section id="projects" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, i) => {

            const isActive = activeIndex === i

            return (
              <div
                key={i}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActiveIndex(isActive ? null : i)
                  }
                }}
                className={`group cursor-pointer border border-gray-800 rounded-xl overflow-hidden transition-all duration-500
                  hover:border-cyan-400
                  ${isActive ? "border-cyan-400" : ""}
                `}
              >

                {/* Image */}
                <img
                  src={project.image}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  {/* 🔥 EXPANDABLE DESCRIPTION */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isActive
                        ? "max-h-[300px] opacity-100 mt-2"
                        : "max-h-0 opacity-0 md:group-hover:max-h-[300px] md:group-hover:opacity-100 md:mt-2"}
                    `}
                  >
                    <p className="text-gray-400 mb-4">
                      {project.desc}
                    </p>
                  </div>

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
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-cyan-400 hover:underline"
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Projects