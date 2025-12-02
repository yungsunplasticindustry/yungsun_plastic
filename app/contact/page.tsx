import type { Metadata } from 'next'
import ContactHeader from '@/components/contact/ContactHeader'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactFormWrapper from '@/components/contact/ContactFormWrapper'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'Contact Us - Yungsun Plastic Industry',
  description: 'Get in touch with Yungsun Plastic Industry for quotes, inquiries, or support. We are here to help with your packaging needs.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
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
