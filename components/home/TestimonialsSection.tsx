'use client'

import { useCallback, useMemo, memo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    company: "Khan Industries",
    role: "Production Manager",
    content: "Yungsun's carton sealing machines have revolutionized our packaging line. The efficiency and reliability are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Ali",
    company: "Ali Textiles",
    role: "Operations Director",
    content: "We've been using Yungsun's strapping machines for 3 years. Excellent quality and their support team is always responsive.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammad Rashid",
    company: "Rashid Pharmaceuticals",
    role: "Plant Manager",
    content: "The conveyor systems from Yungsun have significantly improved our workflow. Highly recommend their products.",
    rating: 5
  },
  {
    id: 4,
    name: "Fatima Sheikh",
    company: "Sheikh Foods",
    role: "Quality Control Head",
    content: "Outstanding liquid packaging machines. They've helped us maintain product quality while increasing production speed.",
    rating: 5
  }
]

function TestimonialsSection() {
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  )
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplayPlugin]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Trusted by hundreds of businesses across Pakistan for their packaging needs
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <div className="bg-white border border-zinc-200 rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-yellow-400" />
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-zinc-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                      <p className="text-sm text-zinc-600">{testimonial.role}</p>
                      <p className="text-sm text-zinc-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default memo(TestimonialsSection)
