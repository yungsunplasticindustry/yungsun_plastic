export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categoryId: string
  description: string
  images: string[]
  featured: boolean
  specifications: Record<string, string | undefined>
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount?: number
}

export interface CartItem {
  productId: string
  productName: string
  productImage: string
  quantity: number
}

export interface QuoteRequest {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  cartItems: CartItem[]
}
