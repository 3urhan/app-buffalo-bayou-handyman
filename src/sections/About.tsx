export default function About() {
  return (
    <section id="about" className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-800/50 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-orange-500/50 transform -translate-x-4 translate-y-4 rounded-none"></div>
            <img 
              src="/about.jpg" 
              alt="Handyman repairing home" 
              className="relative w-full h-[600px] object-cover grayscale-[30%] shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-orange-500 p-8 text-white shadow-xl max-w-xs hidden md:block">
              <span className="font-sans font-black text-5xl block mb-2">10+</span>
              <span className="font-sans font-bold tracking-widest uppercase text-xs">Years of Excellence</span>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <span className="text-orange-500 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-8 leading-tight">
              Quality Craftsmanship.<br/>
              <span className="text-orange-500">Unmatched Reliability.</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            
            <div className="space-y-6 text-steel-200 font-sans font-normal text-lg leading-relaxed mb-10">
              <p>
                Buffalo Bayou Handyman has been proudly serving the Montrose and greater Houston area for over a decade. We understand that finding a dependable professional for home repairs can be stressful, which is why we built our business on a foundation of trust and transparency.
              </p>
              <p>
                We are fully licensed, insured, and recognized by the Better Business Bureau. Our team approaches every job, big or small, with the exact same level of dedication and attention to detail.
              </p>
              <p>
                From minor fixes to major restorations, we treat your home as if it were our own, ensuring that every project is completed to the highest standard of quality.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-steel-300/20 pt-10">
              <div>
                <span className="block text-4xl font-sans font-black text-orange-500 mb-2">BBB</span>
                <span className="text-sm font-sans tracking-widest uppercase text-steel-300 font-bold">Accredited</span>
              </div>
              <div>
                <span className="block text-4xl font-sans font-black text-orange-500 mb-2">4.9</span>
                <span className="text-sm font-sans tracking-widest uppercase text-steel-300 font-bold">Google Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
