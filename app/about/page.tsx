import type { Metadata } from 'next'
import CompanyInfo from '@/components/about/CompanyInfo'
import MissionVision from '@/components/about/MissionVision'
import FeaturesSection from '@/components/home/FeaturesSection'
import JsonLd, { generateFAQSchema, companyFAQs } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About Us - Yungsun Plastic Industry',
  description: 'Learn about Yungsun Plastic Industry, a leading provider of industrial packaging solutions in Pakistan. 500+ satisfied clients nationwide.',
  alternates: {
    canonical: 'https://yungsunplastic.com/about/',
  },
  openGraph: {
    title: 'About Us - Yungsun Plastic Industry',
    description: 'Pakistan\'s leading packaging machinery and materials company',
    images: ['/images/uploads/2023/11/H-banner-2-min.jpg'],
    url: 'https://yungsunplastic.com/about/',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={generateFAQSchema(companyFAQs)} />
      {/* Page Header */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              About Yungsun Plastic Industry
            </h1>
            <p className="text-lg text-zinc-600">
              Your trusted partner for comprehensive industrial packaging solutions
            </p>
          </div>
        </div>
      </section>
      
      <CompanyInfo />
      <MissionVision />
      <FeaturesSection />
    </main>
  )
}
