import { Shield, Wrench, Clock, CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your complete peace of mind. Every job is backed by proper credentials and protection.",
      icon: <Shield className="w-6 h-6 text-orange-500" />
    },
    {
      title: "10+ Years Experience",
      description: "Over a decade serving Montrose and greater Houston. We've seen every repair challenge and know how to fix it right.",
      icon: <Wrench className="w-6 h-6 text-orange-500" />
    },
    {
      title: "On-Time, Every Time",
      description: "We respect your schedule. Mon–Fri 9AM–5PM with reliable arrival windows so you're never left waiting around.",
      icon: <Clock className="w-6 h-6 text-orange-500" />
    },
    {
      title: "BBB Listed",
      description: "Recognized by the Better Business Bureau. Our reputation is built on transparency, fair pricing, and quality work.",
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <section id="why-us" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-600 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-navy-900 mb-8 leading-tight">
              The Trusted Name in <br/>
              <span className="text-orange-500">Houston Home Repair</span>
            </h2>
            <p className="text-navy-700 font-sans text-lg font-normal leading-relaxed mb-12">
              Choosing a handyman means inviting someone into your home. We've built our reputation on honesty, skill, and treating every job — big or small — with total professionalism.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4 border-l-2 border-orange-500/20 pl-6 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-50 w-12 h-12 rounded-none flex items-center justify-center border border-orange-200">
                    {feature.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xl text-navy-900">{feature.title}</h3>
                  <p className="font-sans font-normal text-navy-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-navy-900 translate-x-4 translate-y-4"></div>
            <img 
              src={`${import.meta.env.BASE_URL}why-us.jpg`} 
              alt="Licensed handyman at work in Houston home" 
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
