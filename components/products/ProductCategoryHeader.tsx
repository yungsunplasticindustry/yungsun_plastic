import type { Category } from '@/types'

interface ProductCategoryHeaderProps {
  category: Category
  productCount: number
}

export default function ProductCategoryHeader({ 
  category, 
  productCount 
}: ProductCategoryHeaderProps) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="container-width py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900">
            {category.name}
          </h1>
          <p className="text-lg text-zinc-600">{category.description}</p>
          <p className="mt-4 text-sm text-zinc-500">
            {productCount} {productCount === 1 ? 'product' : 'products'} available
          </p>
        </div>
      </div>
    </section>
  )
}
