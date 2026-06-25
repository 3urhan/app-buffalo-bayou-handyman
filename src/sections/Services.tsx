import { Wrench, Droplet, Paintbrush } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Plumbing Repairs",
      description: "From leaky faucets to full pipe replacements. We provide fast, reliable plumbing solutions to keep your home running smoothly.",
      icon: <Droplet className="w-8 h-8 text-white" />,
      price: "Request Quote",
      features: ["Leak detection", "Fixture installation", "Drain cleaning"]
    },
    {
      title: "Painting & Drywall",
      description: "Professional interior and exterior painting services. We expertly patch holes, smooth surfaces, and deliver a flawless finish.",
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      price: "Request Quote",
      features: ["Color consultation", "Drywall repair", "Trim & molding"]
    },
    {
      title: "General Maintenance",
      description: "Comprehensive home repair services including furniture assembly, pressure washing, window restoration, and fixture updates.",
      icon: <Wrench className="w-8 h-8 text-white" />,
      price: "Request Quote",
      features: ["Pressure washing", "Furniture assembly", "Wood restoration"]
    }
  ]

  return (
    <section id="services" className="py-32 bg-gray-50 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-600 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-navy-900 mb-6">Expert Handyman Services</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-navy-700 font-sans text-lg font-normal leading-relaxed">
            Professional, reliable, and efficient. We handle the hard work so you don't have to. No job is too small for our experienced team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-2 border-steel-200 p-10 hover:border-orange-500 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="mb-8 p-4 bg-navy-800 inline-block rounded-none group-hover:bg-orange-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-sans font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-navy-700 font-sans font-normal leading-relaxed mb-8 h-24">
                {service.description}
              </p>
              <div className="mb-8">
                <span className="text-navy-900 font-sans font-black text-lg uppercase tracking-wide">{service.price}</span>
              </div>
              <ul className="space-y-3 border-t-2 border-gray-100 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-sans font-medium text-navy-800">
                    <div className="w-2 h-2 rounded-none bg-orange-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
