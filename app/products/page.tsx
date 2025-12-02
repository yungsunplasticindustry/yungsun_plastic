import type { Metadata } from 'next'
import ProductsHeader from '@/components/products/ProductsHeader'
import ProductCategoryGrid from '@/components/products/ProductCategoryGrid'
import { getCategories, getFeaturedProducts } from '@/lib/data'
import ProductGrid from '@/components/products/ProductGrid'

export const metadata: Metadata = {
  title: 'Industrial Packaging Products | Yungsun Plastic Industry',
  description: 'Browse our comprehensive range of industrial packaging solutions including stretch films, strapping machines, carton sealers, and more.',
  openGraph: {
    title: 'Products - Yungsun Plastic Industry',
    description: 'Complete industrial packaging solutions for your business',
    images: ['/images/uploads/2023/11/H-banner-1-min.jpg'],
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function ProductsPage() {
  const featuredProducts = getFeaturedProducts()
  const categories = getCategories()

  return (
    <div className="min-h-screen bg-white">
      <ProductsHeader />
      
      {/* Categories Section */}
      <section className="py-12">
        <div className="container-width">
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">Browse by Category</h2>
          <ProductCategoryGrid />
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="border-t border-zinc-200 bg-zinc-50 py-12">
          <div className="container-width">
            <h2 className="mb-8 text-2xl font-bold text-zinc-900">Featured Products</h2>
            <ProductGrid products={featuredProducts} />
          </div>
        </section>
      )}
    </div>
  )
}
