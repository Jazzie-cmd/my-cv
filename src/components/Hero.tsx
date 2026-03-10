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
          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="bg-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-500 transition"
            >
              Contact Me
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