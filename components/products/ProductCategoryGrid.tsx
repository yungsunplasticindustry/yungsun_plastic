import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/lib/data'

export default function ProductCategoryGrid() {
  const categories = getCategories()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/products/${category.slug}`}
          className="group cursor-pointer rounded-lg border border-zinc-200 bg-white transition-all hover:border-zinc-300 hover:shadow-lg overflow-hidden"
        >
          <div className="relative h-48 bg-zinc-100">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold text-zinc-900 group-hover:text-zinc-700">
              {category.name}
            </h3>
            <p className="text-sm text-zinc-600">
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
