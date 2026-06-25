import Hero from '../sections/Hero'
import Services from '../sections/Services'
import About from '../sections/About'
import WhyChooseUs from '../sections/WhyChooseUs'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Navigation from '../sections/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
