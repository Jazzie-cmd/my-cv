const Skills = () => {

  const skills = [
    { name: "Figma", icon: "/figma.svg", percent: "92%" },
    { name: "React", icon: "/react.svg", percent: "89%" },
    { name: "JavaScript", icon: "/javascript.svg", percent: "93%" },
    { name: "TypeScript", icon: "/typescript.svg", percent: "93%" },
    { name: "Tailwind", icon: "/tailwind.svg", percent: "93%" },
    { name: "Python", icon: "/python.svg", percent: "93%" },
  ]

  return (
    <section id="skills" className="py-40 text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 w-fit mx-auto bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent ">
          My Skills
        </h2>
    

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Technologies and tools I use to build modern web applications.
        </p>

        {/* GRID */}
        <div className="flex flex-wrap justify-center gap-12">

          {skills.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center text-center">

              {/* CARD */}
              <div
                className="
                w-36 md:w-40
                h-36 md:h-40
                bg-[#020617]
                rounded-2xl
                flex flex-col
                items-center
                justify-center
                transition-all
                duration-300
                border border-transparent
                md:hover:bg-[#0f172a]
                md:hover:border-cyan-400
                md:hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                "
              >

                {/* ICON */}
                <img
                  src={skill.icon}
                  className="
                  w-12 mb-3
                  transition-all duration-300
                  md:group-hover:scale-110
                  "
                />

                {/* PERCENT */}
                <span className="text-lg font-semibold text-gray-300">
                  {skill.percent}
                </span>

              </div>

              {/* NAME */}
              <p className="mt-4 text-cyan-400 text-lg font-semibold">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills