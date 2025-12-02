import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

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
    { name: 'Company Info', href: '/company-info' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-100">
      <div className="container mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="bg-white rounded-lg p-3 inline-block">
                <Image
                  src="/images/uploads/2023/11/yungsunplasticindustry-logo-2.png"
                  alt="Yungsun Plastic Industry"
                  width={150}
                  height={50}
                  className="h-auto w-auto"
                />
              </div>
            </div>
            <p className="mb-4 text-sm text-zinc-400">
              ONE SOURCE OF COMPLETE PACKAGING SOLUTION
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@Yungsunplastic.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@Yungsunplastic.com</span>
              </a>
              <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <Link href="#" className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-100">
              Product Categories
            </h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-100">
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
            <p>&copy; {currentYear} Yungsun Plastic Industry. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
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
