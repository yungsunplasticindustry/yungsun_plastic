// Data utility functions for accessing static JSON data
import categoriesData from '@/data/categories.json'
import productsData from '@/data/products.json'
import type { Product, Category } from '@/types'

/**
 * Get all categories
 */
export function getCategories(): Category[] {
  return categoriesData as Category[]
}

/**
 * Get a single category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categoriesData.find((cat) => cat.slug === slug) as Category | undefined
}

/**
 * Get all products
 */
export function getProducts(): Product[] {
  return productsData as Product[]
}

/**
 * Get a single product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug) as Product | undefined
}

/**
 * Get a single product by ID
 */
export function getProductById(id: string): Product | undefined {
  return productsData.find((product) => product.id === id) as Product | undefined
}

/**
 * Get products by category slug
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return productsData.filter((product) => product.category === categorySlug) as Product[]
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return productsData.filter((product) => product.featured) as Product[]
}

/**
 * Search products by name or description
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  ) as Product[]
}
