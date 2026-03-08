import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Facebook, Youtube } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productCategories = [
    { name: 'Air Bag', href: '/products/air-bag' },
    { name: 'Carton Sealer Machine', href: '/products/carton-sealer-machine' },
    { name: 'Stretch Film', href: '/products/stretch-film' },
    { name: 'Strapping Machine', href: '/products/strapping-machine' },
    { name: 'Conveyor Systems', href: '/products/conveyor' },
    { name: 'View All Products', href: '/products' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Company Info', href: '/company-info' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Top yellow accent line */}
      <div className="h-1 bg-yellow-500" />

      {/* CTA Bar */}
      <div className="bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-zinc-900">Ready to upgrade your packaging line?</h3>
              <p className="text-sm text-zinc-800">Get a free consultation and quote today</p>
            </div>
            <Link
              href="/contact?quote=true"
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-zinc-800 transition-colors whitespace-nowrap text-sm"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <div className="bg-white rounded-lg p-2.5 inline-block">
                <Image
                  src="/images/uploads/2023/11/yungsunplasticindustry-logo-2.png"
                  alt="Yungsun Plastic Industry"
                  width={140}
                  height={48}
                  className="h-auto w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Pakistan&apos;s leading provider of industrial packaging machinery, materials, and turnkey plant solutions.
            </p>

            <div className="space-y-3 text-sm">
              <a href={`mailto:${COMPANY_INFO.mainContact.email}`} className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                <Mail className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <span>{COMPANY_INFO.mainContact.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.mainContact.phone}`} className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <span>{COMPANY_INFO.mainContact.phone}</span>
              </a>
              <Link href={COMPANY_INFO.social.google} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-yellow-400 transition-colors">
                <MapPin className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.locations[0].address}</span>
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex gap-2 mt-6">
              <Link href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-zinc-900 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-zinc-900 transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </Link>
              <Link href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href={COMPANY_INFO.social.google} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-zinc-900 transition-colors" aria-label="Google Maps">
                <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Product Categories
            </h3>
            <ul className="space-y-2.5">
              {productCategories.map((category) => (
                <li key={category.href}>
                  <Link href={category.href} className="text-sm text-zinc-400 hover:text-yellow-400 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-400">Mon - Fri:</span>
                    <span className="text-zinc-200">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-400">Saturday:</span>
                    <span className="text-zinc-200">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-400">Sunday:</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multan Office */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <h4 className="text-white font-semibold mb-3 text-sm">Multan Office</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 leading-snug">{COMPANY_INFO.locations[1]?.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.locations[1]?.phone}`} className="text-zinc-400 hover:text-yellow-400 transition-colors">
                    {COMPANY_INFO.locations[1]?.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
            <p>&copy; {currentYear} Yungsun Plastic Industry. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
              <Link href="/cookie-policy" className="hover:text-yellow-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
