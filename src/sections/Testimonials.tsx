import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      text: "I've called Buffalo Bayou Handyman three times now and every time they show up on time, do the job right, and clean up after themselves. Fixed my leaky faucet, patched drywall, and replaced a ceiling fan. Couldn't ask for a more dependable crew.",
      author: "Marcus T.",
      location: "Montrose, Houston TX",
      rating: 5
    },
    {
      text: "These guys are the real deal. Fully licensed, insured, and actually know what they're doing. I had a long list of deferred maintenance items — they knocked it all out in one visit and charged a fair price. Will absolutely call again.",
      author: "Jennifer R.",
      location: "West University Place, TX",
      rating: 5
    },
    {
      text: "Best handyman service I've used in Houston. They're on the BBB, show up when they say they will, and treat your home with respect. My bathroom tile repair looks brand new. Highly recommend to anyone in the Montrose area.",
      author: "David K.",
      location: "Houston, TX",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-navy-900 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Client Experiences</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6">
            What Houston <span className="text-orange-500">Homeowners Say</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-orange-500 fill-orange-500" />
            ))}
          </div>
          <p className="text-steel-200 font-sans text-lg font-normal">
            Consistent 4.9 Star Rating — 17 Google Reviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-800 border-2 border-steel-300/20 p-10 relative group hover:border-orange-500 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-500/10 group-hover:text-orange-500/25 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-steel-100 font-sans font-normal italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="border-t border-steel-300/20 pt-6">
                <span className="block font-sans font-bold text-white text-lg">{testimonial.author}</span>
                <span className="block font-sans text-orange-500 text-sm tracking-wide">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
