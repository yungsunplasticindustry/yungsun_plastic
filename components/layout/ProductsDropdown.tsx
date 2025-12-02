'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const PRODUCT_CATEGORIES = [
  { name: 'Air Bag', slug: 'air-bag' },
  { name: 'Carton Sealer Machine', slug: 'carton-sealer-machine' },
  { name: 'Conveyor', slug: 'conveyor' },
  { name: 'Liquid Machine', slug: 'liquid-machine' },
  { name: 'Packing Tape', slug: 'packing-tape' },
  { name: 'Pallete Wrapping Machine', slug: 'pallete-wrapping-machine' },
  { name: 'Plastic Baskets', slug: 'plastic-baskets' },
  { name: 'Plastic Palletes', slug: 'plastic-palletes' },
  { name: 'POF Shrink', slug: 'pof-shrink' },
  { name: 'PP Strap Roll', slug: 'pp-strap-roll' },
  { name: 'Shrink Turner Sealer Machine', slug: 'shrink-turner-sealer-machine' },
  { name: 'Strapping Machine', slug: 'strapping-machine' },
  { name: 'Stretch Film', slug: 'stretch-film' },
]

export default function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        Products
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg">
          <Link
            href="/products"
            className="block px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
            onClick={() => setIsOpen(false)}
          >
            View All Products
          </Link>
          <div className="my-2 border-t border-zinc-200" />
          <div className="max-h-96 overflow-y-auto">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="block px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
