import Link from 'next/link'
import { PackageSearch, MessageSquare, FileText, Phone } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    {
      icon: PackageSearch,
      title: 'Browse Products',
      description: 'Explore our complete catalog',
      href: '/products',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      icon: MessageSquare,
      title: 'Request Quote',
      description: 'Get custom pricing',
      href: '/contact',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      icon: FileText,
      title: 'About Us',
      description: 'Learn our story',
      href: '/about',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
    },
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Get in touch',
      href: '/contact',
      bgColor: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700',
    },
  ]

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.title}
                href={action.href}
                className={`group flex flex-col items-center rounded-lg ${action.bgColor} p-6 text-center text-white transition-all ${action.hoverColor}`}
              >
                <div className="mb-4 rounded-full bg-white/20 p-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{action.title}</h3>
                <p className="text-sm text-white/90">{action.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
