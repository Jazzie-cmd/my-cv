const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <a
          href="mailto:markjoshuaf7@gmail.com"
          className="bg-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition"
        >
          Send Email
        </a>

      </div>

    </section>
  )
}

export default Contact