'use client'

import { useMemo, memo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Company Logo Components
const NexusTechLogo = () => (
  <svg viewBox="0 0 140 40" className="h-10 w-auto">
    <defs>
      <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="2" y="8" width="24" height="24" rx="4" fill="url(#nexusGrad)" />
    <path d="M8 20 L14 14 L20 20 L14 26 Z" fill="white" />
    <text x="32" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1e3a5f">NEXUS</text>
    <text x="87" y="26" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="16" fill="#64748b">Tech</text>
  </svg>
)

const GlobalPackLogo = () => (
  <svg viewBox="0 0 150 40" className="h-10 w-auto">
    <circle cx="18" cy="20" r="14" fill="none" stroke="#059669" strokeWidth="2.5" />
    <ellipse cx="18" cy="20" rx="6" ry="14" fill="none" stroke="#059669" strokeWidth="1.5" />
    <line x1="4" y1="20" x2="32" y2="20" stroke="#059669" strokeWidth="1.5" />
    <text x="38" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#065f46">Global</text>
    <text x="88" y="25" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="15" fill="#10b981">Pack</text>
  </svg>
)

const PrimeIndustriesLogo = () => (
  <svg viewBox="0 0 160 40" className="h-10 w-auto">
    <polygon points="16,6 28,34 4,34" fill="#dc2626" />
    <polygon points="16,12 24,30 8,30" fill="white" />
    <text x="36" y="26" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" fill="#1f2937">PRIME</text>
    <text x="85" y="26" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="12" fill="#6b7280">INDUSTRIES</text>
  </svg>
)

const OmegaCorpLogo = () => (
  <svg viewBox="0 0 140 40" className="h-10 w-auto">
    <circle cx="18" cy="20" r="12" fill="none" stroke="#7c3aed" strokeWidth="3" />
    <path d="M10 28 L18 20 L26 28" stroke="#7c3aed" strokeWidth="3" fill="none" />
    <text x="36" y="26" fontFamily="Georgia, serif" fontWeight="600" fontSize="16" fill="#5b21b6">Omega</text>
    <text x="94" y="26" fontFamily="Georgia, serif" fontWeight="400" fontSize="14" fill="#8b5cf6">Corp</text>
  </svg>
)

const SteelworksLogo = () => (
  <svg viewBox="0 0 150 40" className="h-10 w-auto">
    <rect x="4" y="10" width="6" height="20" fill="#374151" />
    <rect x="12" y="14" width="6" height="16" fill="#4b5563" />
    <rect x="20" y="8" width="6" height="22" fill="#374151" />
    <text x="32" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#1f2937">STEEL</text>
    <text x="80" y="26" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="15" fill="#f59e0b">WORKS</text>
  </svg>
)

const AquaFlowLogo = () => (
  <svg viewBox="0 0 140 40" className="h-10 w-auto">
    <path d="M6 25 Q14 10 22 25 Q30 40 22 25" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 22 Q18 12 24 22" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
    <text x="32" y="26" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="16" fill="#0e7490">Aqua</text>
    <text x="78" y="26" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="16" fill="#22d3ee">Flow</text>
  </svg>
)

const VelocityLogo = () => (
  <svg viewBox="0 0 140 40" className="h-10 w-auto">
    <path d="M4 30 L16 10 L20 10 L12 26 L28 26" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="34" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#c2410c">VELOCITY</text>
  </svg>
)

const ApexGroupLogo = () => (
  <svg viewBox="0 0 140 40" className="h-10 w-auto">
    <polygon points="18,6 32,32 4,32" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
    <circle cx="18" cy="22" r="4" fill="#1d4ed8" />
    <text x="38" y="24" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="#1e3a8a">APEX</text>
    <text x="78" y="24" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="13" fill="#3b82f6">GROUP</text>
  </svg>
)

const partners = [
  { id: 1, name: "Nexus Tech", Logo: NexusTechLogo },
  { id: 2, name: "Global Pack", Logo: GlobalPackLogo },
  { id: 3, name: "Prime Industries", Logo: PrimeIndustriesLogo },
  { id: 4, name: "Omega Corp", Logo: OmegaCorpLogo },
  { id: 5, name: "Steelworks", Logo: SteelworksLogo },
  { id: 6, name: "AquaFlow", Logo: AquaFlowLogo },
  { id: 7, name: "Velocity", Logo: VelocityLogo },
  { id: 8, name: "Apex Group", Logo: ApexGroupLogo }
]

function PartnersSection() {
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  )
  
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, containScroll: 'keepSnaps' },
    [autoplayPlugin]
  )

  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-100">
      <div className="container-width">
        <h2 className="text-center text-2xl font-bold text-zinc-900 mb-10">
          Trusted by Leading Companies
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_16.666%] px-6">
                <div className="flex items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title={partner.name}>
                  <partner.Logo />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(PartnersSection)
