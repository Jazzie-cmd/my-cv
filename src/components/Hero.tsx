import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-0 bg-[#0f172a] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white text-xl md:text-2xl font-semibold mb-2">
            I am Mark Joshua
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-bold leading-[1.05] bg-linear-to-r from-cyan-400 to-white bg-clip-text text-transparent mt-">
            Web <br /> Developer
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
            I am a passionate Frontend Developer dedicated to building modern, responsive, and user-friendly web applications. With experience in React, TypeScript, and Tailwind CSS, I focus on creating clean interfaces and efficient solutions that enhance user experience.
          </p>

          {/* BUTTON */}
          
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
              className="
              relative
              w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]
              rounded-3xl border border-gray-700
              rotate-0 md:rotate-3
              md:group-hover:rotate-0
              transition duration-500
              "
            />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero