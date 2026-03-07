const Contact = () => {
  return (
    <section id="contact"
      className="py-24 px-6 bg-[#0f172a] text-white scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out if you want to collaborate, discuss a project,
          or just connect.
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <a
            href="mailto:your@email.com"
            className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-indigo-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-indigo-400 transition"
          >
            LinkedIn
          </a>

        </div>

        {/* CONTACT FORM */}
        <form className="max-w-xl mx-auto space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact