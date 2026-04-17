import Link from 'next/link'
import { Shield, Truck, Headphones, BadgePercent } from 'lucide-react'

const stats = [
  { icon: Shield, value: '100%', label: 'Quality Assured' },
  { icon: Truck, value: 'Fast', label: 'Delivery & Install' },
  { icon: Headphones, value: '24/7', label: 'Technical Support' },
  { icon: BadgePercent, value: 'Best', label: 'Price Guarantee' },
]

export default function SolutionsBanner() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/uploads/2023/11/H-banner-3-min.webp')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-3xl mx-auto mb-14">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Complete Packaging Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Turnkey Packaging & Machinery Solutions
          </h2>
          <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
            Pakistan&apos;s leading supplier for food, dairy, cosmetics, pharmaceutical,
            and industrial manufacturing plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-yellow-500 text-zinc-900 px-8 py-3.5 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-zinc-900 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="mx-auto w-12 h-12 border-2 border-yellow-500/40 rounded-lg flex items-center justify-center mb-3">
                <stat.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
