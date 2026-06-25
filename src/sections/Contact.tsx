import { MapPin, Phone, Clock, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-orange-600 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">Get an Estimate</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-navy-900 mb-8 leading-tight">
              Ready to fix your <br/>
              <span className="text-orange-500">Home Problems?</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <p className="text-navy-700 font-sans text-lg font-normal leading-relaxed mb-12">
              Every repair is different. Reach out to us with the details of your project and we'll provide a straightforward, honest quote.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border-2 border-steel-200 rounded-none flex items-center justify-center shrink-0 group-hover:border-orange-500 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xl text-navy-900 mb-1">Our Location</h4>
                  <p className="font-sans font-medium text-navy-700">
                    1016 W Alabama St<br />
                    Houston, TX 77006<br />
                    (Montrose area)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border-2 border-steel-200 rounded-none flex items-center justify-center shrink-0 group-hover:border-orange-500 transition-colors">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xl text-navy-900 mb-1">Direct Line</h4>
                  <p className="font-sans font-medium text-navy-700">
                    (832) 324-9977
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border-2 border-steel-200 rounded-none flex items-center justify-center shrink-0 group-hover:border-orange-500 transition-colors">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xl text-navy-900 mb-1">Operating Hours</h4>
                  <p className="font-sans font-medium text-navy-700">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 border-2 border-steel-200 shadow-sm relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-orange-500 m-[-2px]"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-orange-500 m-[-2px]"></div>
            
            <h3 className="font-sans font-black text-2xl text-navy-900 mb-8">Request Service</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-sans font-bold tracking-widest uppercase text-navy-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-gray-50 border-2 border-steel-200 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors font-sans" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-sans font-bold tracking-widest uppercase text-navy-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-gray-50 border-2 border-steel-200 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors font-sans" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs font-sans font-bold tracking-widest uppercase text-navy-700 mb-2">Service Needed</label>
                <select id="service" className="w-full bg-gray-50 border-2 border-steel-200 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors font-sans text-navy-700">
                  <option>Plumbing Repair</option>
                  <option>Painting & Drywall</option>
                  <option>General Maintenance</option>
                  <option>Other / Custom Quote</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-sans font-bold tracking-widest uppercase text-navy-700 mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full bg-gray-50 border-2 border-steel-200 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors font-sans resize-none" placeholder="Describe what needs fixing..."></textarea>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-orange-500 text-white py-4 font-bold font-sans uppercase tracking-widest text-sm transition-all group rounded-none">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
