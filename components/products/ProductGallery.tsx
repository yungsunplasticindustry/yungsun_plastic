'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
  productName: string
  featured?: boolean
}

export default function ProductGallery({
  images,
  productName,
  featured = false
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {featured && (
          <span className="absolute right-4 top-4 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-md border bg-white transition-all ${selectedImage === index
                  ? 'border-yellow-600 ring-2 ring-yellow-600'
                  : 'border-zinc-200 hover:border-zinc-400'
                }`}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
