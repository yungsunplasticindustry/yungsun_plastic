'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useCartStore } from '@/stores/cart'

export default function CartSummary() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  const totalUniqueItems = useCartStore((state) => state.getTotalUniqueItems())
  const clearCart = useCartStore((state) => state.clearCart)

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="mb-4 text-xl font-semibold text-zinc-900">Cart Summary</h2>
      
      <div className="space-y-2 border-b border-zinc-200 pb-4 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600">Unique Products:</span>
          <span className="font-medium text-zinc-900">{totalUniqueItems}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600">Total Items:</span>
          <span className="font-medium text-zinc-900">{totalItems}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Link href="/contact?quote=true" className="block">
          <Button className="w-full">
            Request Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        
        <Button
          variant="outline"
          className="w-full"
          onClick={clearCart}
        >
          Clear Cart
        </Button>
        
        <Link href="/products" className="block">
          <Button variant="ghost" className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="mt-4 rounded-md bg-blue-50 p-3">
        <p className="text-xs text-blue-800">
          <strong>Note:</strong> This is a quote-based system. Add products to your cart and request a personalized quote. Our team will contact you with pricing details.
        </p>
      </div>
    </div>
  )
}
