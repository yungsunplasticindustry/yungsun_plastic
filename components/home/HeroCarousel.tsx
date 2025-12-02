'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState, memo, useMemo } from 'react'

const CAROUSEL_IMAGES = [
  {
    src: '/images/uploads/2023/11/RP-MA-Mini-Automatic-Carton-Sealer-400x400-1.jpg',
    alt: 'RP-MA Mini Automatic Carton Sealer - Yungsun Plastic Industry'
  },
  {
    src: '/images/uploads/2023/11/RP-1D-Automatic-Carton-Sealer-400x400-1.jpg',
    alt: 'RP-1D Automatic Carton Sealer - Yungsun Plastic Industry'
  },
  {
    src: '/images/uploads/2023/11/RP-1A-With-Guide-Automatic-Carton-Sealer-400x400-1.jpg',
    alt: 'RP-1A Automatic Carton Sealer with Guide - Yungsun Plastic Industry'
  },
  {
    src: '/images/uploads/2023/11/RP-3A-Automatic-Carton-Sealer-400x400-1.jpg',
    alt: 'RP-3A Automatic Carton Sealer - Yungsun Plastic Industry'
  },
]

function HeroCarousel() {
  // Memoize autoplay plugin to prevent recreation on every render
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  )
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [autoplayPlugin]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative bg-zinc-900">
      <div className="embla relative overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div
              key={index}
              className="embla__slide relative min-w-0 flex-[0_0_100%]"
            >
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-zinc-100 to-zinc-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-8"
                  priority={index === 0}
                />
                {/* Product Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
                    {image.alt.split(' - ')[0]}
                  </h2>
                  <p className="text-white/80 text-center mt-2">Industrial Packaging Solutions</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'w-8 bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(HeroCarousel)
