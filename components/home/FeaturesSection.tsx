import { Package, Truck, Shield, Award, Wrench, Globe } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: 'Wide Product Range',
      description: 'Complete range of packaging machinery and materials for all industrial needs — from stretch films to conveyor systems.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'ISO-certified products meeting international standards. Every machine tested and quality-assured before delivery.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery & Installation',
      description: 'Nationwide delivery with professional on-site installation and commissioning by our expert technicians.',
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Dedicated after-sales support team providing maintenance, spare parts, and technical assistance.',
    },
    {
      icon: Wrench,
      title: 'Turnkey Solutions',
      description: 'Complete plant setup from planning to installation — PLC automation, conveyors, and full packaging lines.',
    },
    {
      icon: Globe,
      title: 'Nationwide Service',
      description: 'Serving businesses across Pakistan from our offices in Lahore and Multan with prompt local support.',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Why Choose Yungsun Plastic
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Pakistan&apos;s most trusted name in industrial packaging — providing comprehensive solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 w-11 h-11 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
