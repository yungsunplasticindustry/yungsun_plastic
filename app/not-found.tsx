'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Package } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-zinc-200 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-zinc-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved or no longer exists.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Package className="w-5 h-5 mr-2" />
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-zinc-200 pt-8">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">
            Helpful Links
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/products/carton-sealer-machine" 
              className="text-zinc-600 hover:text-yellow-600 transition-colors"
            >
              Carton Sealer Machines
            </Link>
            <Link 
              href="/products/strapping-machine" 
              className="text-zinc-600 hover:text-yellow-600 transition-colors"
            >
              Strapping Machines
            </Link>
            <Link 
              href="/products/stretch-film" 
              className="text-zinc-600 hover:text-yellow-600 transition-colors"
            >
              Stretch Films
            </Link>
            <Link 
              href="/contact" 
              className="text-zinc-600 hover:text-yellow-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <button 
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className="inline-flex items-center text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  )
}
