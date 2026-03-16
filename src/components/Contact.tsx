import { FaEnvelope, FaGithub, FaFacebook, FaDiscord } from "react-icons/fa"
import CV from "../assets/MARK JOSHUA F FERNANDEZ.pdf"

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          Let’s work together!
        </h2>

        <p className="ml-auto mr-auto max-w-2xl text-gray-400 mb-12 text-wrap">
          I'm open to new opportunities and excited to work on meaningful projects. If you have a job opportunity, collaboration, or just want to connect, feel free to reach out through the links below.
        </p>

        {/* Download CV */}
        <div className="flex justify-center mb-12">
          <a
            href={CV}
            download
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-10 flex-wrap">

          {/* Email */}
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=markjoshuafernandez1@gmail.com"
            target="_blank"
            rel="noopener norefferer"
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaEnvelope className="text-3xl mb-2" />
            <span className="text-sm">Email</span>
          </a>

          {/* Github */}
          <a
            href="https://github.com/Jazzie-cmd"
            target="_blank"
            rel="noopener norefferer"
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub className="text-3xl mb-2" />
            <span className="text-sm">GitHub</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener norefferer"
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaFacebook className="text-3xl mb-2" />
            <span className="text-sm">Facebook</span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener norefferer"
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaDiscord className="text-3xl mb-2" />
            <span className="text-sm">Discord</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact