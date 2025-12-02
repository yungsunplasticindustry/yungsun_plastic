import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductGallery from '@/components/products/ProductGallery'
import ProductInfo from '@/components/products/ProductInfo'
import { getProducts, getCategoryBySlug } from '@/lib/data'

type Props = {
  params: Promise<{ 
    category: string
    slug: string 
  }>
}

// Disable dynamic params for full static generation
export const dynamicParams = false

// Generate all possible product pages at build time
export async function generateStaticParams() {
  const products = getProducts()
  
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const products = getProducts()
  const product = products.find(p => p.slug === slug && p.category === category)
  
  if (!product) {
    return {
      title: 'Product Not Found - Yungsun Plastic Industry',
      description: 'The requested product could not be found.',
    }
  }

  return {
    title: `${product.name} | Industrial Packaging - Yungsun`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params
  const products = getProducts()
  const product = products.find(p => p.slug === slug && p.category === categorySlug)
  const category = getCategoryBySlug(categorySlug)

  if (!product || !category) {
    notFound()
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: category.name, href: `/products/${categorySlug}` },
    { label: product.name },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="container-width py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="grid gap-8 lg:grid-cols-2 mt-6">
          <ProductGallery 
            images={product.images} 
            productName={product.name}
            featured={product.featured}
          />
          
          <ProductInfo 
            product={product}
            category={category}
          />
        </div>
      </div>
    </main>
  )
}
