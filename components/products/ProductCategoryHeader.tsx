import type { Category } from '@/types'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

interface ProductCategoryHeaderProps {
  category: Category
  productCount: number
}

export default function ProductCategoryHeader({
  category,
  productCount
}: ProductCategoryHeaderProps) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: category.name },
  ]

  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-16">
      <div className="container-width flex flex-col items-center">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mx-auto max-w-4xl text-center mt-4">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">
            {category.name}
          </h1>
          <p className="text-lg text-zinc-600">{category.description}</p>
          <p className="mt-4 text-sm font-medium text-yellow-600">
            {productCount} {productCount === 1 ? 'product' : 'products'} available
          </p>
        </div>
      </div>
    </section>
  )
}
