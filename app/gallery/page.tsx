'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Camera, Package, Factory, Shield, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

// Gallery categories for filtering
const categories = [
  { id: 'all', label: 'All' },
  { id: 'baskets', label: 'Plastic Baskets' },
  { id: 'machines', label: 'Machinery' },
  { id: 'materials', label: 'Materials' },
  { id: 'facilities', label: 'Facilities' },
]

const galleryItems = [
  {
    id: 1,
    title: "Carton Sealer in Action",
    category: "Machinery",
    image: "/images/uploads/2023/11/RP-MA-Mini-Automatic-Carton-Sealer-400x400-1.jpg"
  },
  {
    id: 2,
    title: "Strapping Machine Setup",
    category: "Machinery",
    image: "/images/uploads/2023/11/SP-1-400x400-1.jpg"
  },
  {
    id: 3,
    title: "Conveyor System",
    category: "Machinery",
    image: "/images/uploads/2023/11/Roller-Conveyors-400x400-1.jpg"
  },
  {
    id: 4,
    title: "Liquid Packaging Line",
    category: "Machinery",
    image: "/images/uploads/2023/11/RP-1000-Automatic-Liquid-Packaging-Machine-400x400-1.jpg"
  },
  {
    id: 5,
    title: "Stretch Film Application",
    category: "Materials",
    image: "/images/uploads/2023/11/Stretch-Film-Handy-Rolls-400x400-1.jpg"
  },
  {
    id: 6,
    title: "Air Bag Protection",
    category: "Materials",
    image: "/images/uploads/2023/11/Air-Bag-600x600-1.jpg"
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ]

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container-width">
          <Breadcrumbs items={breadcrumbs} />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-zinc-600">
              Explore our industrial packaging machinery and installations
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-zinc-200 py-8">
        <div className="container-width">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selectedCategory === cat.id
                    ? "bg-yellow-600 text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                )}
              >
                {cat.id === 'all' && <Camera className="h-4 w-4" />}
                {cat.id === 'baskets' && <Package className="h-4 w-4" />}
                {cat.id === 'machines' && <Factory className="h-4 w-4" />}
                {cat.id === 'materials' && <Shield className="h-4 w-4" />}
                {cat.id === 'facilities' && <Filter className="h-4 w-4" />}
                {cat.label}
                <span className="ml-1 text-xs">
                  ({cat.id === 'all' ? galleryItems.length : galleryItems.filter(i => i.category === cat.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square overflow-hidden bg-zinc-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-zinc-200">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-zinc-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              <p className="text-sm text-zinc-300">{selectedImage.category}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
