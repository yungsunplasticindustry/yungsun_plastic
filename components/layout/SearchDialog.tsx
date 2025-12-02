'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, X, Loader2 } from 'lucide-react'
import { searchProducts } from '@/lib/data'
import { useDebounce } from '@/hooks/useDebounce'
import type { Product } from '@/types'
import Button from '@/components/ui/Button'

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      setIsSearching(true)
      const searchResults = searchProducts(debouncedQuery)
      setResults(searchResults)
      setIsSearching(false)
    } else {
      setResults([])
    }
  }, [debouncedQuery])

  const handleClose = () => {
    setQuery('')
    setResults([])
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative min-h-full flex items-start justify-center pt-[10vh]">
        <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg shadow-xl">
          {/* Search Input */}
          <div className="flex items-center border-b border-zinc-200">
            <Search className="ml-4 h-5 w-5 text-zinc-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none"
            />
            {isSearching && (
              <Loader2 className="mr-4 h-5 w-5 text-zinc-400 animate-spin" />
            )}
            <button
              onClick={handleClose}
              className="mr-4 p-1 rounded-md hover:bg-zinc-100"
              aria-label="Close search"
            >
              <X className="h-5 w-5 text-zinc-500" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.length >= 2 && (
              <>
                {results.length > 0 ? (
                  <div className="py-2">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.category}/${product.slug}`}
                        onClick={handleClose}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-50 transition-colors"
                      >
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-zinc-900 truncate">
                            {product.name}
                          </h3>
                          <p className="text-sm text-zinc-600 line-clamp-1">
                            {product.description}
                          </p>
                          <p className="text-xs text-zinc-400 mt-1">
                            in {product.categoryId}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-zinc-500">
                      No products found for "{query}"
                    </p>
                  </div>
                )}
              </>
            )}

            {query.length === 1 && (
              <div className="py-12 text-center">
                <p className="text-zinc-400">
                  Type at least 2 characters to search
                </p>
              </div>
            )}

            {query.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-zinc-400">
                  Start typing to search products
                </p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          {query.length === 0 && (
            <div className="border-t border-zinc-200 px-4 py-3 bg-zinc-50">
              <p className="text-xs text-zinc-500 mb-2">QUICK LINKS</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/products" onClick={handleClose}>
                  <Button variant="ghost" size="sm">
                    All Products
                  </Button>
                </Link>
                <Link href="/products/air-bag" onClick={handleClose}>
                  <Button variant="ghost" size="sm">
                    Air Bags
                  </Button>
                </Link>
                <Link href="/products/stretch-film" onClick={handleClose}>
                  <Button variant="ghost" size="sm">
                    Stretch Film
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
