'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { getCategories } from '@/lib/data'
import { useQuote } from '@/providers/QuoteProvider'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { openQuoteModal } = useQuote()

  // Memoize categories to prevent recalculation on every render
  const categories = useMemo(() => getCategories(), [])

  const handleMouseEnterDropdown = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setProductsDropdownOpen(true)
  }, [])

  const handleMouseLeaveDropdown = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
    }, 300)
  }, [])

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/uploads/2023/11/yungsunplasticindustry-logo-2.png"
            alt="Yungsun Plastic Industry"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
          >
            Home
          </Link>
          <Link
            href="/company-info"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
          >
            Company Info
          </Link>

          {/* Products Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''
                }`} />
            </button>

            {productsDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-lg bg-white shadow-xl ring-1 ring-black/5 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products/${category.slug}`}
                      className="block px-4 py-3 text-sm text-zinc-700 hover:bg-yellow-50 hover:text-zinc-900 rounded-md transition-colors"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-zinc-100 mt-3 pt-3">
                  <Link
                    href="/products"
                    className="block text-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    onClick={() => setProductsDropdownOpen(false)}
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
          >
            Contact Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Request Quote Button - Desktop */}
          <Button
            variant="primary"
            size="default"
            className="hidden lg:flex"
            onClick={() => openQuoteModal()}
          >
            Request Quote
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/company-info"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company Info
            </Link>
            <Link
              href="/products"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/gallery"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              variant="primary"
              size="default"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                openQuoteModal()
              }}
            >
              Request Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Header)
