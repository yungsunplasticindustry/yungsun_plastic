import type { Metadata } from 'next'
import CartContent from '@/components/cart/CartContent'
import JsonLd, { generateFAQSchema, cartFAQs } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

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
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shopping Cart' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={generateFAQSchema(cartFAQs)} />
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <h1 className="mb-8 text-4xl font-bold text-zinc-900 mt-2">
          Shopping Cart
        </h1>
        <CartContent />
      </div>
    </div>
  )
}
