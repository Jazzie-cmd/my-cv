const Services = () => {

  const services = [
    {
      title: "Frontend Development",
      desc: "Building responsive and modern web interfaces."
    },
    {
      title: "UI Design",
      desc: "Designing clean and user-friendly layouts."
    },
    {
      title: "Web Applications",
      desc: "Creating interactive web applications."
    }
  ]

  return (
    <section id="services" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          My Specialization
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 border border-gray-800 rounded-xl hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Services