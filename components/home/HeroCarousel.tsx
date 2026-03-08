'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { memo, useMemo } from 'react'

const CAROUSEL_IMAGES = [
  {
    desktop: '/banners/auto-matic-staping-machine-banner-desktop.webp',
    mobile: '/banners/automatic-mobile.webp',
    alt: 'Automatic Strapping Machine - Yungsun Plastic Industry',
  },
  {
    desktop: '/banners/dunnage-air-bags-desktop.webp',
    mobile: '/banners/dunnage-air-bags-mobile.webp',
    alt: 'Dunnage Air Bags - Yungsun Plastic Industry',
  },
  {
    desktop: '/banners/high-quality-plastic-baskets-desktop.webp',
    mobile: '/banners/high-quality-plastic-baskets-mobile.webp',
    alt: 'High Quality Plastic Baskets - Yungsun Plastic Industry',
  },
  {
    desktop: '/banners/pallete-wrapping-machine-desktop.webp',
    mobile: '/banners/pallete-wrapping-machines-mobile.webp',
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
              <div className="relative w-full overflow-hidden">
                {/* Desktop Image */}
                <Image
                  src={image.desktop}
                  alt={image.alt}
                  width={1920}
                  height={600}
                  className="hidden md:block w-full h-auto object-contain"
                  priority={index === 0}
                  sizes="100vw"
                  quality={90}
                />

                {/* Mobile Image */}
                <Image
                  src={image.mobile}
                  alt={image.alt}
                  width={768}
                  height={1024}
                  className="block md:hidden w-full h-auto object-contain"
                  priority={index === 0}
                  sizes="100vw"
                  quality={90}
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
