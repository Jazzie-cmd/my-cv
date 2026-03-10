const Experience = () => {
  const experience = [
    {
      year: "2025",
      title: "Frontend Development Projects",
      company: "Personal Projects",
      desc: "Developed responsive web applications using React, TypeScript, and Tailwind CSS. Built modern UI components and interactive interfaces."
    },
    {
      year: "2024",
      title: "Web Development Training",
      company: "Self Learning",
      desc: "Learned modern web development including HTML, CSS, JavaScript, React, and responsive design."
    }
  ]

  const education = [
    {
      year: "2021 - 2025",
      title: "Bachelor's Degree",
      school: "Your University / College",
      desc: "Graduated with a degree in Information Technology with focus on software and web development."
    },
    {
      year: "2019 - 2021",
      title: "Senior High School",
      school: "Your School",
      desc: "Studied ICT strand focusing on programming and computer systems."
    }
  ]

  return (
    <section id="experience" className="py-24 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              My Experience
            </h3>

            <div className="space-y-8">

              {experience.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-cyan-500 pl-6 relative"
                >
                  <span className="text-sm text-gray-400">
                    {item.year}
                  </span>

                  <h4 className="text-lg font-semibold mt-1">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.company}
                  </p>

                  <p className="text-gray-400 mt-2 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              My Education
            </h3>

            <div className="space-y-8">

              {education.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-cyan-500 pl-6 relative"
                >
                  <span className="text-sm text-gray-400">
                    {item.year}
                  </span>

                  <h4 className="text-lg font-semibold mt-1">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.school}
                  </p>

                  <p className="text-gray-400 mt-2 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience