import type { Metadata } from 'next'
import HeroCarousel from '@/components/home/HeroCarousel'
import WelcomeSection from '@/components/home/WelcomeSection'
import CompanyInfoSection from '@/components/home/CompanyInfoSection'
import ProductRangeSection from '@/components/home/ProductRangeSection'
import LatestProductsSection from '@/components/home/LatestProductsSection'
import SolutionsBanner from '@/components/home/SolutionsBanner'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import PartnersSection from '@/components/home/PartnersSection'
import TaglineStrip from '@/components/home/TaglineStrip'
import VideoSection from '@/components/home/VideoSection'
import FeaturesSection from '@/components/home/FeaturesSection'

export const metadata: Metadata = {
  title: 'Yungsun Plastic Industry - Industrial Packaging Solutions',
  description: 'Leading provider of industrial packaging solutions including stretch films, strapping machines, carton sealers, and conveyor systems for businesses worldwide.',
  keywords: 'industrial packaging, stretch film, strapping machine, carton sealer, conveyor, plastic pallets, air bags',
  openGraph: {
    title: 'Yungsun Plastic Industry - Industrial Packaging Solutions',
    description: 'Complete packaging solutions for modern industries',
    images: ['/images/uploads/2023/11/H-banner-1-min.jpg'],
    type: 'website',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <WelcomeSection />
      <CompanyInfoSection />
      <ProductRangeSection />
      <LatestProductsSection />
      <TaglineStrip />
      <SolutionsBanner />
      <TestimonialsSection />
      <FeaturesSection />
      <PartnersSection />
      <VideoSection />
    </main>
  )
}
