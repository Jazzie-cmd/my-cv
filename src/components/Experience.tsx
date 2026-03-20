const Experience = () => {
  const experience = [
    {
      year: "2024",
      title: "Wireless Access for Health – On the Job Training",
      company: "Wireless Access for Health Initiative, Inc",
      desc: "Project Development and Programming Unit. I contributed to the development and optimization of programming projects. Responsibilities included coding, debugging, and testing applications, addressing technical requirements promptly, and working collaboratively with team members to ensure reliable and high-quality project outcomes"
    },
    {
      year: "2021 - Present",
      title: "Digital Planet",
      company: "Digital Planet IT Solution",
      desc: "Telecom Technician and Internet Service Provider. We deliver high-speed and reliable internet connections, offering a range of plans tailored to meet the diverse needs of our customers, while ensuring optimal network performance and customer satisfaction."
    }
  ];

  const education = [
    {
      year: "2021 - 2026",
      title: "Bachelor of Science in Computer Science",
      school: "Tarlac State University",
      desc: "Earned a Bachelor of Science in Computer Science with emphasis on software development and web technologies, including experience in front-end and back-end development, databases, and system design."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#020617] text-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
          bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 
          bg-clip-text text-transparent">
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
                  className="relative pl-8 border-l border-cyan-900/40 
                  bg-gradient-to-br from-[#020617] to-[#071A2F] 
                  p-5 rounded-xl hover:scale-[1.02] transition duration-300"
                >
                  {/* DOT */}
                  <span className="absolute -left-[7px] top-3 w-3 h-3 
                    bg-cyan-400 rounded-full 
                    shadow-[0_0_12px_#22d3ee]" />

                  <span className="text-xs text-slate-500">
                    {item.year}
                  </span>

                  <h4 className="text-lg font-semibold mt-1 text-white">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.company}
                  </p>

                  <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-sky-400">
              My Education
            </h3>

            <div className="space-y-8">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-8 border-l border-sky-900/40 
                  bg-gradient-to-br from-[#020617] to-[#071A2F] 
                  p-5 rounded-xl hover:scale-[1.02] transition duration-300"
                >
                  {/* DOT */}
                  <span className="absolute -left-[7px] top-3 w-3 h-3 
                    bg-sky-400 rounded-full 
                    shadow-[0_0_12px_#38bdf8]" />

                  <span className="text-xs text-slate-500">
                    {item.year}
                  </span>

                  <h4 className="text-lg font-semibold mt-1 text-white">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.school}
                  </p>

                  <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;