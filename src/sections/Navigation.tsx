import { useState, useEffect } from 'react'
import { Phone, Menu, X, Hammer } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-orange-500/10 border-2 border-orange-500/40 rounded-none flex items-center justify-center transition-colors group-hover:bg-orange-500/20">
              <Hammer className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className={`font-sans font-black text-xl tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>Buffalo Bayou</span>
              <span className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-orange-500' : 'text-orange-400'}`}>Handyman Services</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={`text-sm font-sans tracking-wider uppercase hover:text-orange-400 transition-colors ${scrolled ? 'text-steel-200' : 'text-white'}`}>{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:832-324-9977" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-none text-sm font-bold font-sans uppercase tracking-widest transition-all">
              <Phone className="w-4 h-4" />
              (832) 324-9977
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-orange-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block text-steel-200 hover:text-orange-400 font-sans tracking-widest uppercase text-sm" onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <div className="pt-4">
              <a href="tel:832-324-9977" className="flex items-center justify-center gap-2 bg-orange-500 text-white px-5 py-4 rounded-none font-bold font-sans uppercase tracking-widest">
                <Phone className="w-4 h-4" />
                (832) 324-9977
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
