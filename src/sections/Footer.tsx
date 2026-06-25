import { Hammer, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500/10 border-2 border-orange-500/40 rounded-none flex items-center justify-center">
                <Hammer className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-xl text-white">Buffalo Bayou</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-orange-400">Handyman Services</span>
              </div>
            </div>
            <p className="text-steel-300/70 font-sans font-normal leading-relaxed max-w-sm mb-8">
              Houston's trusted partner for premium home maintenance and repair. Over 10 years serving Montrose and the greater Houston area. Licensed, insured, and BBB listed.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-steel-300 hover:border-orange-500 hover:text-orange-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-steel-300 hover:border-orange-500 hover:text-orange-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-steel-300 hover:border-orange-500 hover:text-orange-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-orange-500 font-sans tracking-[0.2em] uppercase text-xs font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-steel-300/80 hover:text-orange-400 font-sans text-sm transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-steel-300/80 hover:text-orange-400 font-sans text-sm transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-steel-300/80 hover:text-orange-400 font-sans text-sm transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-steel-300/80 hover:text-orange-400 font-sans text-sm transition-colors">Customer Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-orange-500 font-sans tracking-[0.2em] uppercase text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-steel-300/80 font-sans text-sm">
              <li>1016 W Alabama St</li>
              <li>Houston, TX 77006</li>
              <li><a href="tel:8323249977" className="hover:text-orange-400 transition-colors">(832) 324-9977</a></li>
              <li>Mon–Fri: 9AM – 5PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-300/50 font-sans text-xs">
            &copy; {new Date().getFullYear()} Buffalo Bayou Handyman Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-steel-300/50 font-sans text-xs">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
