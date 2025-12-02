'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { getCategories } from '@/lib/data'
import { useQuote } from '@/providers/QuoteProvider'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { scrollDirection, isAtTop } = useScrollDirection()
  const { openQuoteModal } = useQuote()
  const categories = getCategories()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/company-info', label: 'Company Info' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setProductsDropdownOpen(true)
  }

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header 
      className={`fixed top-0 z-50 w-full bg-white shadow-md transition-transform duration-300 ${
        scrollDirection === 'down' && !isAtTop ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Products Dropdown */}
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
              <ChevronDown className={`h-4 w-4 transition-transform ${
                productsDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>
            
            {productsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products/${category.slug}`}
                      className="block px-4 py-2 text-sm text-zinc-700 hover:bg-yellow-50 hover:text-zinc-900"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
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
