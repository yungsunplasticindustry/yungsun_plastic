import { Package, Truck, Shield, Award } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: 'Wide Product Range',
      description: 'Comprehensive selection of packaging materials and machinery for all industrial needs.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Premium products that meet international standards and industry requirements.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Efficient logistics and timely delivery to keep your operations running smoothly.',
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Professional consultation and after-sales service from our experienced team.',
    },
  ]

  return (
    <section className="border-t border-zinc-200 bg-white section-padding">
      <div className="container-width">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900">
            Why Choose Yungsun Plastic
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-600">
            We provide comprehensive packaging solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-zinc-900 p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="text-zinc-600">
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
