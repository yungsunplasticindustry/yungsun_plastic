/**
 * Navigation structure for Yungsun Plastic Industry
 * Based on complete asset analysis and product taxonomy
 */

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  description?: string
  featured?: boolean
  icon?: string
}

export const productCategories: NavItem[] = [
  {
    label: 'Plastic Storage',
    href: '/products',
    children: [
      { label: 'Plastic Baskets (K1-K8)', href: '/products/plastic-baskets', description: 'Industrial grade storage baskets with specifications', featured: true },
      { label: 'Plastic Pallets', href: '/products/plastic-palletes', description: 'Heavy duty pallets for warehouse use' }
    ]
  },
  {
    label: 'Sealing Machines',
    href: '/products',
    children: [
      { label: 'Carton Sealer Machines', href: '/products/carton-sealer-machine', description: 'Automatic and semi-automatic models', featured: true },
      { label: 'L-Bar Sealers', href: '/products/shrink-turner-sealer-machine', description: 'Professional shrink wrapping solutions' }
    ]
  },
  {
    label: 'Strapping Solutions',
    href: '/products',
    children: [
      { label: 'Strapping Machines', href: '/products/strapping-machine', description: 'RP Series automatic strapping' },
      { label: 'PP Strap Roll', href: '/products/pp-strap-roll', description: 'High strength polypropylene straps' },
      { label: 'PET Strap', href: '/products/pet-strap', description: 'Polyester strapping for heavy loads' }
    ]
  },
  {
    label: 'Packaging Materials',
    href: '/products',
    children: [
      { label: 'Stretch Films', href: '/products/stretch-film', description: 'Machine and hand rolls available' },
      { label: 'POF Shrink Film', href: '/products/pof-shrink', description: 'Polyolefin shrink wrap' },
      { label: 'Packaging Tapes', href: '/products/packing-tape', description: 'BOPP, masking, and printed tapes' },
      { label: 'Air Bags', href: '/products/air-bag', description: 'Cushioning and void fill solutions' }
    ]
  },
  {
    label: 'Industrial Equipment',
    href: '/products',
    children: [
      { label: 'Conveyors', href: '/products/conveyor', description: 'Roller and belt conveyor systems' },
      { label: 'Liquid Filling Machines', href: '/products/liquid-machine', description: 'Automatic liquid packaging' },
      { label: 'Pallet Wrapping', href: '/products/pallete-wrapping-machine', description: 'Stretch wrapping systems' }
    ]
  }
]

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Company Info', href: '/company-info' },
  { 
    label: 'Products', 
    href: '/products',
    children: productCategories
  },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' }
]

export const footerNavigation = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Plastic Baskets', href: '/products/plastic-baskets' },
    { label: 'Carton Sealers', href: '/products/carton-sealer-machine' },
    { label: 'Strapping Machines', href: '/products/strapping-machine' },
    { label: 'Stretch Films', href: '/products/stretch-film' }
  ],
  company: [
    { label: 'About Us', href: '/company-info' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Downloads', href: '/downloads' }
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Request Quote', href: '/contact?quote=true' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ]
}
