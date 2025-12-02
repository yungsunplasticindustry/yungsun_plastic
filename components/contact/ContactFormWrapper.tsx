'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ContactForm from './ContactForm'

function ContactFormContent() {
  const searchParams = useSearchParams()
  const isQuoteRequest = searchParams.get('quote') === 'true'
  
  return <ContactForm includeCartItems={isQuoteRequest} />
}

export default function ContactFormWrapper() {
  return (
    <Suspense fallback={<ContactForm includeCartItems={false} />}>
      <ContactFormContent />
    </Suspense>
  )
}
