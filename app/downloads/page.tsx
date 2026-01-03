import type { Metadata } from 'next'
import { Download, FileText, Book, Video, File } from 'lucide-react'
import JsonLd, { generateFAQSchema, downloadsFAQs } from '@/components/seo/JsonLd'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'Downloads & Resources | Yungsun Plastic Industry',
  description: 'Download product catalogs, specification sheets, installation guides, and technical resources for our packaging machinery and equipment.',
  keywords: 'downloads, product catalogs, spec sheets, installation guides, technical resources, manuals',
  alternates: {
    canonical: 'https://yungsunplastic.com/downloads/',
  },
}



const downloadCategories = [
  {
    title: 'Product Catalogs',
    icon: <Book className="h-6 w-6" />,
    description: 'Complete product range catalogs with specifications and pricing',
    items: [
      {
        id: 'catalog-2024',
        title: '2024 Complete Product Catalog',
        description: 'Full range of packaging machinery and materials',
        fileType: 'pdf' as const,
        fileSize: '12.5 MB',
        downloadUrl: '#',
        category: 'catalog',
        featured: true,
      },
      {
        id: 'plastic-baskets-catalog',
        title: 'Plastic Baskets K-Series Catalog',
        description: 'Complete specifications for K1-K8 industrial baskets',
        fileType: 'pdf' as const,
        fileSize: '4.8 MB',
        downloadUrl: '#',
        category: 'catalog',
      },
      {
        id: 'sealing-machines-catalog',
        title: 'Carton Sealing Machines Catalog',
        description: 'RP series automatic and semi-automatic sealers',
        fileType: 'pdf' as const,
        fileSize: '6.2 MB',
        downloadUrl: '#',
        category: 'catalog',
      },
    ],
  },
  {
    title: 'Specification Sheets',
    icon: <FileText className="h-6 w-6" />,
    description: 'Detailed technical specifications for individual products',
    items: [
      {
        id: 'spec-k1',
        title: 'Plastic Basket K1 Specifications',
        description: '400x400mm HDPE basket technical data',
        fileType: 'pdf' as const,
        fileSize: '856 KB',
        downloadUrl: '#',
        category: 'specs',
      },
      {
        id: 'spec-rp-ma',
        title: 'RP-MA Carton Sealer Specs',
        description: 'Mini automatic carton sealing machine specifications',
        fileType: 'pdf' as const,
        fileSize: '1.2 MB',
        downloadUrl: '#',
        category: 'specs',
      },
      {
        id: 'spec-stretch-film',
        title: 'Stretch Film Technical Data',
        description: 'Machine and hand roll specifications',
        fileType: 'pdf' as const,
        fileSize: '645 KB',
        downloadUrl: '#',
        category: 'specs',
      },
    ],
  },
  {
    title: 'Installation Guides',
    icon: <Video className="h-6 w-6" />,
    description: 'Step-by-step installation and operation manuals',
    items: [
      {
        id: 'guide-strapping',
        title: 'Strapping Machine Installation Guide',
        description: 'Complete setup instructions for RP-101A series',
        fileType: 'pdf' as const,
        fileSize: '3.4 MB',
        downloadUrl: '#',
        category: 'guides',
      },
      {
        id: 'guide-conveyor',
        title: 'Conveyor System Setup Manual',
        description: 'Roller conveyor installation and maintenance',
        fileType: 'pdf' as const,
        fileSize: '2.8 MB',
        downloadUrl: '#',
        category: 'guides',
      },
      {
        id: 'guide-liquid-filler',
        title: 'Liquid Filling Machine Manual',
        description: 'RP-1000 series operation and maintenance guide',
        fileType: 'pdf' as const,
        fileSize: '4.1 MB',
        downloadUrl: '#',
        category: 'guides',
      },
    ],
  },
  {
    title: 'Certificates & Compliance',
    icon: <File className="h-6 w-6" />,
    description: 'Quality certificates and compliance documentation',
    items: [
      {
        id: 'cert-iso9001',
        title: 'ISO 9001:2015 Certificate',
        description: 'Quality management system certification',
        fileType: 'pdf' as const,
        fileSize: '425 KB',
        downloadUrl: '#',
        category: 'certificates',
      },
      {
        id: 'cert-ce',
        title: 'CE Compliance Declaration',
        description: 'European conformity certification for machinery',
        fileType: 'pdf' as const,
        fileSize: '312 KB',
        downloadUrl: '#',
        category: 'certificates',
      },
    ],
  },
]

const getFileIcon = (fileType: string) => {
  const iconClass = 'h-5 w-5'
  switch (fileType) {
    case 'pdf':
      return <FileText className={`${iconClass} text-red-600`} />
    case 'doc':
      return <FileText className={`${iconClass} text-blue-600`} />
    case 'xls':
      return <FileText className={`${iconClass} text-green-600`} />
    case 'zip':
      return <File className={`${iconClass} text-zinc-600`} />
    default:
      return <File className={iconClass} />
  }
}

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={generateFAQSchema(downloadsFAQs)} />
      {/* Header Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 p-3">
              <Download className="h-8 w-8 text-yellow-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">
              Downloads & Resources
            </h1>
            <p className="text-lg text-zinc-600">
              Access our complete library of product documentation, guides, and technical resources
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-zinc-200 py-8">
        <div className="container-width">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">50+</div>
              <div className="text-sm text-zinc-600">Documents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">13</div>
              <div className="text-sm text-zinc-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">PDF</div>
              <div className="text-sm text-zinc-600">Format</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">Free</div>
              <div className="text-sm text-zinc-600">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="section-padding">
        <div className="container-width">
          {downloadCategories.map((category, index) => (
            <div key={category.title} className={index > 0 ? 'mt-16' : ''}>
              {/* Category Header */}
              <div className="mb-8 flex items-start gap-3">
                <div className="text-yellow-600">{category.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">{category.title}</h2>
                  <p className="mt-1 text-zinc-600">{category.description}</p>
                </div>
              </div>

              {/* Download Items */}
              <div className="grid gap-4 lg:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-lg border border-zinc-200 bg-white p-4 transition-all hover:border-yellow-500 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      {/* File Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-50 group-hover:bg-yellow-50">
                        {getFileIcon(item.fileType)}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-zinc-900">
                          {item.title}
                          {item.featured && (
                            <span className="ml-2 inline-block rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
                              Featured
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <span className="text-zinc-500">{item.fileType.toUpperCase()}</span>
                          <span className="text-zinc-500">{item.fileSize}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <button className="flex items-center gap-1 rounded-md bg-yellow-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-700">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-xl font-semibold text-zinc-900">
              Need Custom Documentation?
            </h3>
            <p className="mb-6 text-zinc-600">
              Contact our technical team for personalized product information or custom quotations
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-yellow-600 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-700"
              >
                Contact Support
              </a>
              <a
                href="/contact?quote=true"
                className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
