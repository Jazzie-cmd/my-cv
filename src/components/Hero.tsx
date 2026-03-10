import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white text-xl md:text-2xl font-semibold mb-4">
            I am Jazzie
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-[82px] font-bold leading-[1.05] bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            Frontend <br /> Developer
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
            I am a fresh graduate passionate about building modern web
            applications using React, TypeScript and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 max-w-lg mt-10">

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 border border-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end relative">

          {/* glow background */}
          <div className="absolute w-[420px] h-[420px] bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

          {/* IMAGE WRAPPER */}
          <div className="relative group">

            {/* cyan border effect */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 to-cyan-200 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

            <img
              src="/Jazzie.png"
              className="relative w-[340px] md:w-[380px] lg:w-[420px] rounded-3xl border border-gray-700 rotate-3 group-hover:rotate-0 transition duration-500"
            />

          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero