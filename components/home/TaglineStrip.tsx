'use client'

export default function TaglineStrip() {
  const taglines = [
    "✓ Quality Machinery",
    "✓ Best Prices",
    "✓ Fast Delivery",
    "✓ Expert Support",
    "✓ Nationwide Service",
    "✓ ISO Certified",
    "✓ Trusted Partner",
    "✓ 500+ Happy Clients"
  ]

  // Duplicate for seamless loop
  const duplicatedTaglines = [...taglines, ...taglines]

  return (
    <div className="bg-yellow-400 py-3 overflow-hidden">
      <div className="flex animate-marquee">
        {duplicatedTaglines.map((tagline, index) => (
          <span
            key={index}
            className="mx-8 text-zinc-900 font-semibold whitespace-nowrap"
          >
            {tagline}
          </span>
        ))}
      </div>
    </div>
  )
}
