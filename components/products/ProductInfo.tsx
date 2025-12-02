'use client'

import Link from 'next/link'
import { MessageSquare, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import ViewingCounter from '@/components/products/ViewingCounter'
import { useQuote } from '@/providers/QuoteProvider'
import type { Product, Category } from '@/types'

interface ProductInfoProps {
  product: Product
  category: Category
}

export default function ProductInfo({ product, category }: ProductInfoProps) {
  const { openQuoteModal } = useQuote()
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ${product.name}. \n\nProduct: ${product.name}\nCategory: ${category.name}\nURL: ${window.location.href}\n\nPlease provide more information and pricing.`
    )
    const phoneNumber = '923001234567' // Pakistan number without +
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-zinc-900">{product.name}</h1>
        <p className="text-lg text-zinc-600 mb-4">{product.description}</p>
        <ViewingCounter />
      </div>

      {/* Specifications */}
      {Object.keys(product.specifications).length > 0 && (
        <div>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900">Specifications</h2>
          <dl className="space-y-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex border-b border-zinc-100 pb-2">
                <dt className="flex-shrink-0 w-32 font-medium text-zinc-700">{key}:</dt>
                <dd className="text-zinc-600">{value || 'N/A'}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full"
          onClick={() => openQuoteModal(product.name)}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Request Quote
        </Button>
        
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full flex items-center justify-center"
          onClick={handleWhatsApp}
        >
          <Phone className="mr-2 h-5 w-5" />
          Contact on WhatsApp
        </Button>
      </div>

      {/* Category Link */}
      <div className="border-t border-zinc-200 pt-6">
        <p className="text-sm text-zinc-600">
          Category:{' '}
          <Link
            href={`/products/${category.slug}`}
            className="font-medium text-zinc-900 hover:underline"
          >
            {category.name}
          </Link>
        </p>
      </div>
    </div>
  )
}
