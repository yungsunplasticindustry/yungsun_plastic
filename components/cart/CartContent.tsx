'use client'

import { useCartStore } from '@/stores/cart'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import EmptyCart from './EmptyCart'

export default function CartContent() {
  const items = useCartStore((state) => state.getCartItems())

  if (items.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-20">
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
