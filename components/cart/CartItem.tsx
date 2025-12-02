'use client'

import Image from 'next/image'
import { Plus, Minus, X } from 'lucide-react'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types'

interface CartItemProps {
  product: Product
  quantity: number
}

export default function CartItem({ product, quantity }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1)
    }
  }

  const handleRemove = () => {
    removeItem(product.id)
  }

  return (
    <div className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-4">
      {/* Product Image */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="font-semibold text-zinc-900">{product.name}</h3>
          <button
            onClick={handleRemove}
            className="text-zinc-400 hover:text-zinc-600"
            aria-label="Remove item"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="mt-1 text-sm text-zinc-600 line-clamp-2">
          {product.description}
        </p>

        {/* Quantity Controls */}
        <div className="mt-3 flex items-center space-x-3">
          <span className="text-sm text-zinc-600">Quantity:</span>
          <div className="flex items-center rounded-md border border-zinc-300">
            <button
              onClick={handleDecrease}
              className="p-1 hover:bg-zinc-100 disabled:opacity-50"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="p-1 hover:bg-zinc-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
