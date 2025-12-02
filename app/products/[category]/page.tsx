import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductCategoryHeader from '@/components/products/ProductCategoryHeader'
import ProductGrid from '@/components/products/ProductGrid'
import { getCategories, getCategoryBySlug, getProductsByCategory } from '@/lib/data'

type Props = {
  params: Promise<{ category: string }>
}

// This is required for static site generation
export const dynamicParams = false

// Generate all category pages at build time
export async function generateStaticParams() {
  const categories = getCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}

// Generate metadata for each category page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: 'Category Not Found - Yungsun Plastic Industry',
      description: 'The requested category could not be found.',
    }
  }

  return {
    title: `${category.name} - Industrial Packaging Solutions | Yungsun`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Yungsun Plastic Industry`,
      description: category.description,
      images: [category.image],
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  // Get products for this category (statically at build time)
  const products = getProductsByCategory(slug)

  return (
    <div className="min-h-screen bg-white">
      <ProductCategoryHeader 
        category={category} 
        productCount={products.length} 
      />
      <ProductGrid 
        products={products}
        showCategoryLink={false}
      />
    </div>
  )
}
