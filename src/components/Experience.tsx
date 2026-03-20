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
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] mb-16 w-fit mx-auto bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* EXPERIENCE */}
          <div>
            <h3 className="flex items-center justify-center gap-3 text-3xl font-bold mb-8 text-cyan-400"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-10 w-10 text-cyan-500" > {/* Outer badge */} <path d="M12 2l2.2 1.5 2.7-.3 1.5 2.2 2.2 1.5-.3 2.7L22 12l-1.5 2.2.3 2.7-2.2 1.5-1.5 2.2-2.7-.3L12 22l-2.2-1.5-2.7.3-1.5-2.2-2.2-1.5.3-2.7L2 12l1.5-2.2-.3-2.7 2.2-1.5 1.5-2.2 2.7.3L12 2z" /> {/* Inner circle */} <circle cx="12" cy="12" r="3.5" /> {/* Ribbon */} <path d="M9 17l-1 4 4-2 4 2-1-4" /> </svg> 
            <span>My Experience</span>
            </h3>

            <div className="space-y-8">
              {experience.map((item, i) => (
                <div key={i} className=" relative pl-6 border border-transparent bg-gradient-to-br from-[#020617] to-[#071A2F] p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] " >

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
            <h3 className="flex items-center justify-center gap-3 text-3xl font-bold mb-8 text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 flex-shrink-0" > <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" /> <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" /> <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" /> </svg>
              My Education
            </h3>

            <div className="space-y-8">
              {education.map((item, i) => (
                <div key={i} className=" relative pl-6 border border-transparent bg-gradient-to-br from-[#020617] to-[#071A2F] p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] " >
                  {/* DOT */}

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