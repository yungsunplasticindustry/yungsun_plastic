import type { Metadata } from 'next'
import JsonLd, { generateFAQSchema, galleryFAQs } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Gallery - Yungsun Plastic Industry',
  description: 'Explore our gallery of industrial packaging machinery, installations, and product images. See our carton sealers, strapping machines, conveyors, and more in action.',
  alternates: {
    canonical: 'https://yungsunplastic.com/gallery/',
  },
  openGraph: {
    title: 'Gallery - Yungsun Plastic Industry',
    description: 'Industrial packaging machinery and installations gallery',
    url: 'https://yungsunplastic.com/gallery/',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={generateFAQSchema(galleryFAQs)} />
      {children}
    </>
  )
}
