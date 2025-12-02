import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
  showCategoryLink?: boolean
}

export default function ProductGrid({ 
  products, 
  showCategoryLink = true 
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="py-12">
        <div className="container-width">
          <div className="py-12 text-center">
            <p className="text-zinc-600">No products found.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="container-width">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.category}/${product.slug}`}
              className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {product.featured && (
                  <span className="absolute right-2 top-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold text-zinc-900">
                  {product.name}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-zinc-600">
                  {product.description}
                </p>
                {showCategoryLink && (
                  <p className="mb-3 text-xs text-zinc-500">
                    Category: {product.categoryId}
                  </p>
                )}
                <div className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors group-hover:bg-zinc-800">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
