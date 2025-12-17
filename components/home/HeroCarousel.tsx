'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { memo, useMemo } from 'react'

const CAROUSEL_IMAGES = [
  {
    src: '/banners/auto-matic-staping-machine-banner-desktop.webp',
    alt: 'Automatic Strapping Machine - Yungsun Plastic Industry',
  },
  {
    src: '/banners/dunnage-air-bags-desktop.webp',
    alt: 'Dunnage Air Bags - Yungsun Plastic Industry',
  },
  {
    src: '/banners/high-quality-plastic-baskets-desktop.webp',
    alt: 'High Quality Plastic Baskets - Yungsun Plastic Industry',
  },
  {
    src: '/banners/pallete-wrapping-machine-desktop.webp',
    alt: 'Pallet Wrapping Machine - Yungsun Plastic Industry',
  },
]

function HeroCarousel() {
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  )
  
  const [emblaRef] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [autoplayPlugin]
  )

  return (
    <section className="w-full bg-[#f5f0e6]">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] min-w-0"
            >
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={600}
                  className="w-full h-auto"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(HeroCarousel)
