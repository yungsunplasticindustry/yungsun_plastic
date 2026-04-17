'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'machines', label: 'Machinery' },
  { id: 'materials', label: 'Materials' },
  { id: 'baskets', label: 'Baskets & Pallets' },
]

const galleryItems = [
  // Machinery
  { id: 1, title: 'Mini Automatic Carton Sealer', category: 'machines', image: '/images/uploads/2023/11/RP-MA-Mini-Automatic-Carton-Sealer-400x400-1.webp' },
  { id: 2, title: 'Automatic Carton Sealer RP-1A', category: 'machines', image: '/images/uploads/2023/11/RP-1A-With-Guide-Automatic-Carton-Sealer-400x400-1.webp' },
  { id: 3, title: 'Automatic Carton Sealer RP-1D', category: 'machines', image: '/images/uploads/2023/11/RP-1D-Automatic-Carton-Sealer-400x400-1.webp' },
  { id: 4, title: 'Automatic Carton Sealer RP-3A', category: 'machines', image: '/images/uploads/2023/11/RP-3A-Automatic-Carton-Sealer-400x400-1.webp' },
  { id: 5, title: 'Strapping Machine SP-1', category: 'machines', image: '/images/uploads/2023/11/SP-1-400x400-1.webp' },
  { id: 6, title: 'Strapping Machine SP-4', category: 'machines', image: '/images/uploads/2023/11/SP-4-400x400-1.webp' },
  { id: 7, title: 'Roller Conveyor System', category: 'machines', image: '/images/uploads/2023/11/Roller-Conveyors-400x400-1.webp' },
  { id: 8, title: 'Automatic Liquid Packaging Machine', category: 'machines', image: '/images/uploads/2023/11/RP-1000-Automatic-Liquid-Packaging-Machine-400x400-1.webp' },
  { id: 9, title: 'L-Bar Shrink Wrapping Machine', category: 'machines', image: '/images/uploads/2023/11/L-Bar-Shrink-Wrapping-Machine-400x400-1.webp' },
  { id: 10, title: 'Shrink Wrapper Machine 5040B', category: 'machines', image: '/images/uploads/2023/11/5040B-Shrink-wrapper-machine-400x400-1.webp' },
  { id: 11, title: 'Strapping Machine RPZ28', category: 'machines', image: '/images/uploads/2023/11/Model-RPZ28-400x400-1.webp' },
  { id: 12, title: 'Pallet Wrapping Machine 11504S', category: 'machines', image: '/images/uploads/2023/11/11504S-400x400-1.webp' },
  // Materials
  { id: 13, title: 'Stretch Film Handy Rolls', category: 'materials', image: '/images/uploads/2023/11/Stretch-Film-Handy-Rolls-400x400-1.webp' },
  { id: 14, title: 'Stretch Film Machine Rolls', category: 'materials', image: '/images/uploads/2023/11/Stretch-Film-Machine-Rolls-400x400-1.webp' },
  { id: 15, title: 'PP Strap Roll', category: 'materials', image: '/images/uploads/2023/11/PP-Strap-Roll-400x400-1.webp' },
  { id: 16, title: 'PP Strap Roll (Premium)', category: 'materials', image: '/images/uploads/2023/11/PP-Strap-Roll-1-400x400-1.webp' },
  { id: 17, title: 'PET Strap', category: 'materials', image: '/images/uploads/2023/11/PET-Strap-400x400-1.webp' },
  { id: 18, title: 'Royal Pack Tape', category: 'materials', image: '/images/uploads/2023/11/Royal-Pack-Tape-400x400-1.webp' },
  { id: 19, title: 'Masking Tape', category: 'materials', image: '/images/uploads/2023/11/Masking-Tape-400x400-1.webp' },
  { id: 20, title: 'Air Bag Packaging', category: 'materials', image: '/images/uploads/2023/11/Air-Bag-600x600-1.webp' },
  { id: 21, title: 'Air Bag (Khajoo Bahi)', category: 'materials', image: '/images/uploads/2023/11/Air-Bag-khajoo-bahi-600x600-1.webp' },
  { id: 22, title: 'Air Bag Protection', category: 'materials', image: '/images/uploads/2023/11/Air-Bag3-600x600-3.webp' },
  // Baskets & Specs
  { id: 23, title: 'Plastic Baskets Specification K1', category: 'baskets', image: '/images/uploads/2023/11/1-SPECIFICATION-SHEET-OF-PLASTIC-BASKETSK1-400x400-1.webp' },
  { id: 24, title: 'Plastic Baskets Specification K2', category: 'baskets', image: '/images/uploads/2023/11/2-SPECIFICATION-SHEET-OF-PLASTIC-BASKETSK2-600x600-1.webp' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ]

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  )

  const selectedImage = selectedIndex !== null ? filteredItems[selectedIndex] : null

  const goNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    } else if (selectedIndex !== null) {
      setSelectedIndex(0)
    }
  }

  const goPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    } else if (selectedIndex !== null) {
      setSelectedIndex(filteredItems.length - 1)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="text-center max-w-3xl mx-auto mt-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-zinc-600">
              Explore our full range of industrial packaging machinery, materials, and products
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-zinc-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setSelectedIndex(null); }}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  selectedCategory === cat.id
                    ? 'bg-yellow-500 text-zinc-900'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                )}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat.id === 'all' ? galleryItems.length : galleryItems.filter(i => i.category === cat.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white hover:shadow-md transition-shadow"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="aspect-square overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-3 border-t border-zinc-100">
                  <h3 className="text-sm font-medium text-zinc-900 truncate">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-zinc-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1200}
              height={1200}
              className="max-h-[80vh] w-auto object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">{selectedImage.title}</h3>
              <p className="text-zinc-400 text-sm">
                {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
