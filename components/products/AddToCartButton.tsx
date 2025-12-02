'use client'

import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types'

interface AddToCartButtonProps {
  product: Product
  showQuantitySelector?: boolean
}

export default function AddToCartButton({ 
  product, 
  showQuantitySelector = true 
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, quantity)
    setIsAdded(true)
    
    // Reset feedback after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
      setQuantity(1)
    }, 2000)
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  return (
    <div className="space-y-4">
      {showQuantitySelector && (
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-zinc-700">Quantity:</span>
          <div className="flex items-center rounded-md border border-zinc-300">
            <button
              onClick={decrementQuantity}
              className="p-2 hover:bg-zinc-100 disabled:opacity-50"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[3rem] text-center font-medium">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="p-2 hover:bg-zinc-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <Button
        onClick={handleAddToCart}
        className={`w-full ${isAdded ? 'bg-green-600 hover:bg-green-700' : ''}`}
        disabled={isAdded}
      >
        {isAdded ? (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </>
        )}
      </Button>
    </div>
  )
}
