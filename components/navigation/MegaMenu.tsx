'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Package, Shield, Factory } from 'lucide-react'
import { productCategories } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const getIcon = (category: string) => {
    if (category.includes('Storage')) return <Package className="h-5 w-5" />
    if (category.includes('Industrial')) return <Factory className="h-5 w-5" />
    return <Shield className="h-5 w-5" />
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
          "hover:text-yellow-600",
          isOpen && "text-yellow-600"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Products
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={cn(
          "absolute left-0 z-50 mt-0 w-screen max-w-7xl opacity-0 transition-all duration-300",
          "pointer-events-none invisible",
          isOpen && "opacity-100 pointer-events-auto visible translate-y-0",
          !isOpen && "translate-y-2"
        )}
      >
        <div className="mt-2 rounded-lg bg-white shadow-xl ring-1 ring-zinc-900/5">
          <div className="p-6">
            <div className="grid grid-cols-5 gap-6">
              {productCategories.map((category) => (
                <div key={category.label} className="space-y-3">
                  <div className="flex items-center gap-2">
                    {getIcon(category.label)}
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {category.label}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.children?.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-md px-2 py-1.5 text-sm transition-colors",
                            "hover:bg-yellow-50 hover:text-yellow-600",
                            item.featured && "font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <div>{item.label}</div>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-zinc-500">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 border-t border-zinc-100 pt-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/products"
                  className="text-sm font-medium text-yellow-600 hover:text-yellow-700"
                  onClick={() => setIsOpen(false)}
                >
                  View All Products →
                </Link>
                <Link
                  href="/certificates"
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                  onClick={() => setIsOpen(false)}
                >
                  Product Certificates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
