import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-8 flex items-center space-x-2 text-sm text-zinc-600">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-zinc-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
