import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Target, Eye, Heart, Shield } from 'lucide-react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import JsonLd, { generateFAQSchema, companyFAQs } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Company Info - Yungsun Plastic Industry',
  description: 'Learn about Yungsun Plastic Industry - Pakistan\'s leading provider of industrial packaging machinery and solutions. 500+ satisfied clients nationwide.',
  alternates: {
    canonical: 'https://yungsunplastic.com/company-info/',
  },
  openGraph: {
    title: 'About Yungsun Plastic Industry',
    description: 'Your trusted partner for industrial packaging solutions in Pakistan',
    images: ['/images/uploads/2023/11/H-banner-2-min.jpg'],
    url: 'https://yungsunplastic.com/company-info/',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function CompanyInfoPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Company Info' },
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every product meets international standards."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our priority. We go beyond sales to ensure your satisfaction."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously upgrading our product line with the latest technology."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest pricing in all our business dealings."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={generateFAQSchema(companyFAQs)} />
      {/* Page Header */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container-width">
          <Breadcrumbs items={breadcrumbs} />
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

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Excellence in Industrial Packaging
              </h2>
              <div className="prose prose-lg text-zinc-600 space-y-4">
                <p>
                  Yungsun Plastic Industry is Pakistan's premier provider of industrial 
                  packaging machinery and solutions. Our mission is to revolutionize the 
                  packaging industry in Pakistan by providing world-class machinery and 
                  unmatched service.
                </p>
                <p>
                  We have successfully served over 500 clients across 
                  various industries including pharmaceuticals, textiles, food processing, and 
                  manufacturing. Our comprehensive product range includes everything from carton 
                  sealers and strapping machines to complete conveyor systems and liquid packaging 
                  solutions.
                </p>
                <p>
                  What sets us apart is not just the quality of our products, but our commitment 
                  to understanding each client's unique needs and providing tailored solutions 
                  that drive efficiency and growth. Our team of experts provides complete support 
                  from initial consultation through installation and ongoing maintenance.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/uploads/2023/11/H-banner-2-min.jpg"
                alt="Yungsun Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-zinc-50">
        <div className="container-width">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-zinc-900">Our Mission</h3>
              </div>
              <p className="text-zinc-600">
                To provide innovative and reliable industrial packaging solutions that help 
                our clients optimize their operations, reduce costs, and achieve sustainable 
                growth while maintaining the highest standards of quality and service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-zinc-900">Our Vision</h3>
              </div>
              <p className="text-zinc-600">
                To be the leading packaging solutions provider in South Asia, recognized 
                for our quality, innovation, and commitment to customer satisfaction while 
                contributing to the industrial growth of our region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{value.title}</h3>
                <p className="text-zinc-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-zinc-50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">Why Choose Yungsun?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "✓ Commitment to quality excellence",
              "✓ 500+ satisfied clients nationwide",
              "✓ Complete range of packaging solutions",
              "✓ Expert installation and training",
              "✓ 24/7 technical support",
              "✓ Competitive pricing",
              "✓ ISO certified quality standards",
              "✓ Customized solutions available",
              "✓ Nationwide service network"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-zinc-700 font-medium">{item.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-yellow-400">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Ready to Transform Your Packaging Operations?
          </h2>
          <p className="text-lg text-zinc-800 mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect packaging solutions for your business
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/products">
              <Button variant="secondary" size="lg">
                Browse Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
