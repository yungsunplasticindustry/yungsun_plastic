import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react'

export default function SocialBar() {
  return (
    <div className="bg-zinc-900 text-white hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-xs">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-zinc-300">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+92 300 1234567</span>
            </a>
            <a href="mailto:info@Yungsunplastic.com" className="flex items-center gap-2 hover:text-zinc-300">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@Yungsunplastic.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
