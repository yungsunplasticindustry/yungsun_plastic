import type { Metadata } from 'next'
import ContactHeader from '@/components/contact/ContactHeader'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactFormWrapper from '@/components/contact/ContactFormWrapper'
import JsonLd, { generateFAQSchema, contactFAQs } from '@/components/seo/JsonLd'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'Contact Us - Yungsun Plastic Industry',
  description: 'Get in touch with Yungsun Plastic Industry for quotes, inquiries, or support. Located in Lahore, Pakistan. Call us or email info@yungsunplastic.com.',
  alternates: {
    canonical: 'https://yungsunplastic.com/contact/',
  },
  openGraph: {
    title: 'Contact Yungsun Plastic Industry',
    description: 'Request quotes and get support for packaging machinery in Pakistan',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={generateFAQSchema(contactFAQs)} />
      <div className="container-width py-16">
        <div className="mx-auto max-w-5xl">
          <ContactHeader />
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactInfo />
            <ContactFormWrapper />
          </div>
        </div>
      </div>
    </main>
  )
}
