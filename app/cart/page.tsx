import type { Metadata } from 'next'
import CartContent from '@/components/cart/CartContent'
import JsonLd, { generateFAQSchema, cartFAQs } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Shopping Cart - Yungsun Plastic Industry',
  description: 'Review your selected items and request a quote for your packaging needs.',
  alternates: {
    canonical: 'https://yungsunplastic.com/cart/',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={generateFAQSchema(cartFAQs)} />
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-zinc-900">
          Shopping Cart
        </h1>
        <CartContent />
      </div>
    </div>
  )
}
