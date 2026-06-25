import { ArrowRight, Star, CheckCircle, MapPin, Hammer } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <img src="/hero.jpg" alt="Professional handyman at work" className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full border-l-4 border-orange-500 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 bg-navy-800/80 backdrop-blur-md rounded-none px-5 py-2.5 w-fit mb-8 border border-steel-300/20">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-orange-500 fill-orange-500' : 'text-orange-500 fill-orange-500'}`} />
              ))}
            </div>
            <span className="text-steel-100 text-sm font-sans tracking-wider uppercase border-l border-steel-300/30 pl-3">4.9 Star Rated (17 Reviews)</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black text-white leading-tight mb-8 tracking-tight">
            Reliable Repairs.<br/>
            <span className="text-orange-500">Built to Last.</span>
          </h1>
          <p className="text-xl text-steel-200 font-sans font-normal leading-relaxed mb-12 max-w-2xl">
            Houston's trusted partner for premium home maintenance and repair. Over 10 years of experience delivering quality craftsmanship to the Montrose area.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-none font-bold font-sans uppercase tracking-widest text-sm transition-all hover:-translate-y-1">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-3 border-2 border-steel-300/50 hover:border-orange-500 text-white px-10 py-5 rounded-none font-bold font-sans uppercase tracking-widest text-sm transition-all bg-navy-800/50">
              Our Services
              <Hammer className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 border-t border-steel-300/20 pt-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-steel-200 text-sm font-sans tracking-wide">Serving Montrose, Houston</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span className="text-steel-200 text-sm font-sans tracking-wide">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span className="text-steel-200 text-sm font-sans tracking-wide">BBB Listed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
