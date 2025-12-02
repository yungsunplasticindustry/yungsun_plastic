import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProducts } from '@/lib/data'
import Button from '@/components/ui/Button'

export default function LatestProductsSection() {
  const products = getFeaturedProducts()
  // Show first 4 featured products
  const latestProducts = products.slice(0, 4)

  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Latest Products
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Discover our newest and most innovative packaging machinery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/products/${product.category}/${product.slug}`}>
                <div className="relative h-48 bg-zinc-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.featured && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      HOT
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-zinc-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products">
            <Button size="lg">
              Browse All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
