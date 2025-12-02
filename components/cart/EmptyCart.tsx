import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 py-16">
      <div className="mb-4 rounded-full bg-zinc-100 p-6">
        <ShoppingCart className="h-12 w-12 text-zinc-400" />
      </div>
      <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
        Your cart is empty
      </h2>
      <p className="mb-6 text-zinc-600">
        Start adding products to request a quote
      </p>
      <Link href="/products">
        <Button>Browse Products</Button>
      </Link>
    </div>
  )
}
