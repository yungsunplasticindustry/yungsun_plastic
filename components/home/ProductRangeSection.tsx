import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/lib/data'

export default function ProductRangeSection() {
  const categories = getCategories()
  // Select first 8 categories for the homepage
  const featuredCategories = categories.slice(0, 8)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Comprehensive packaging solutions for every industry need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group text-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-zinc-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative h-32 w-32 mx-auto mb-4 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-zinc-600 mt-1 line-clamp-2">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
