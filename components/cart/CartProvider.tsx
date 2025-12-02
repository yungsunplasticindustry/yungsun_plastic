'use client'

import { useEffect } from 'react'
import { useCartStore } from '@/stores/cart'

export default function CartProvider({ children }: { children: React.ReactNode }) {
  // Hydrate cart from localStorage on mount
  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return <>{children}</>
}
