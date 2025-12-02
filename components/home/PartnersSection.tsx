'use client'

import { useMemo, memo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Sample partner logos - in production these would be actual logo images
const partners = [
  { id: 1, name: "Partner 1", logo: "🏭" },
  { id: 2, name: "Partner 2", logo: "🏢" },
  { id: 3, name: "Partner 3", logo: "🏗️" },
  { id: 4, name: "Partner 4", logo: "🏛️" },
  { id: 5, name: "Partner 5", logo: "🏬" },
  { id: 6, name: "Partner 6", logo: "🏪" },
  { id: 7, name: "Partner 7", logo: "🏨" },
  { id: 8, name: "Partner 8", logo: "🏥" }
]

function PartnersSection() {
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  )
  
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, containScroll: 'keepSnaps' },
    [autoplayPlugin]
  )

  return (
    <section className="py-12 bg-zinc-50 border-y border-zinc-200">
      <div className="container-width">
        <h2 className="text-center text-2xl font-bold text-zinc-900 mb-8">
          Trusted by Leading Companies
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {partners.map((partner) => (
              <div key={partner.id} className="flex-[0_0_25%] min-w-0 md:flex-[0_0_16.666%] lg:flex-[0_0_12.5%] px-4">
                <div className="flex items-center justify-center h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="text-4xl" title={partner.name}>
                    {partner.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(PartnersSection)
