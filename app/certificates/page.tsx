import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Download, FileText, Award, CheckCircle } from 'lucide-react'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'Certificates & Specifications | Yungsun Plastic Industry',
  description: 'View our product certificates, specification sheets, and quality standards for plastic baskets, sealing machines, and packaging equipment.',
  keywords: 'certificates, specifications, quality standards, ISO certification, product specs, plastic basket specifications',
}

// Certificate data structure based on asset analysis
const certificateCategories = [
  {
    title: 'Plastic Basket Specifications',
    icon: <FileText className="h-6 w-6" />,
    description: 'Detailed specification sheets for our K-series plastic baskets',
    certificates: [
      {
        id: 'k1',
        title: 'Plastic Basket K1',
        image: '/images/uploads/2023/11/1-SPECIFICATION-SHEET-OF-PLASTIC-BASKETSK1-400x400-1.jpg',
        specs: {
          model: 'K1',
          dimensions: '400x400mm',
          capacity: '20L',
          material: 'HDPE',
        },
        downloadUrl: '#',
      },
      {
        id: 'k2',
        title: 'Plastic Basket K2',
        image: '/images/uploads/2023/11/2-SPECIFICATION-SHEET-OF-PLASTIC-BASKETSK2-600x600-1.jpg',
        specs: {
          model: 'K2',
          dimensions: '450x450mm',
          capacity: '25L',
          material: 'HDPE',
        },
        downloadUrl: '#',
      },
    ],
  },
  {
    title: 'Quality Certifications',
    icon: <Award className="h-6 w-6" />,
    description: 'Our industry certifications and compliance standards',
    certificates: [
      {
        id: 'iso-9001',
        title: 'ISO 9001:2015',
        image: '',
        specs: {
          standard: 'ISO 9001:2015',
          scope: 'Quality Management',
          validity: '2024-2027',
          certifiedBy: 'SGS',
        },
        downloadUrl: '#',
      },
    ],
  },
  {
    title: 'Machine Specifications',
    icon: <Shield className="h-6 w-6" />,
    description: 'Technical specifications for our machinery range',
    certificates: [
      {
        id: 'rp-ma',
        title: 'Carton Sealer RP-MA',
        image: '/images/uploads/2023/11/RP-MA-Mini-Automatic-Carton-Sealer-400x400-1.jpg',
        specs: {
          model: 'RP-MA',
          type: 'Mini Automatic',
          speed: '20 cartons/min',
          power: '220V/50Hz',
        },
        downloadUrl: '#',
      },
      {
        id: 'strapping-sp1',
        title: 'Strapping Machine SP-1',
        image: '/images/uploads/2023/11/SP-1-400x400-1.jpg',
        specs: {
          model: 'SP-1',
          type: 'Semi-Automatic',
          strapping: 'PP/PET',
          tension: '60kg',
        },
        downloadUrl: '#',
      },
    ],
  },
]

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 p-3">
              <Shield className="h-8 w-8 text-yellow-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">
              Certificates & Specifications
            </h1>
            <p className="text-lg text-zinc-600">
              Quality assured products with complete documentation and certifications
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-padding">
        <div className="container-width">
          {certificateCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={categoryIndex > 0 ? 'mt-16' : ''}
            >
              {/* Category Header */}
              <div className="mb-8 border-b border-zinc-200 pb-4">
                <div className="flex items-start gap-3">
                  <div className="text-yellow-600">{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-zinc-600">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Certificates Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-lg"
                  >
                    {/* Certificate Image */}
                    <div className="relative aspect-square overflow-hidden bg-zinc-50">
                      {!cert.image ? (
                        <div className="flex h-full items-center justify-center">
                          <Award className="h-16 w-16 text-zinc-300" />
                        </div>
                      ) : (
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={400}
                          height={400}
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    {/* Certificate Info */}
                    <div className="p-4">
                      <h3 className="mb-2 font-semibold text-zinc-900">
                        {cert.title}
                      </h3>
                      
                      {/* Specifications */}
                      <div className="mb-3 space-y-1">
                        {Object.entries(cert.specs).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="capitalize text-zinc-500">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="font-medium text-zinc-700">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="flex flex-1 items-center justify-center gap-1 rounded-md bg-yellow-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-700">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <Link
                          href={`/products/${cert.id.includes('k') ? 'plastic-baskets' : 'all'}`}
                          className="flex items-center justify-center rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="container-width">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'ISO Certified', icon: <Award className="h-6 w-6" /> },
              { label: 'Quality Assured', icon: <CheckCircle className="h-6 w-6" /> },
              { label: 'Lab Tested', icon: <Shield className="h-6 w-6" /> },
              { label: 'Industry Standards', icon: <FileText className="h-6 w-6" /> },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-3">
                <div className="text-yellow-600">{badge.icon}</div>
                <span className="font-medium text-zinc-700">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
