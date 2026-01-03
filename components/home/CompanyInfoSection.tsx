import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Users, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CompanyInfoSection() {
  const features = [
    { icon: Award, text: "Commitment to Excellence" },
    { icon: Users, text: "500+ Satisfied Clients" },
    { icon: Globe, text: "Nationwide Service Network" },
    { icon: CheckCircle, text: "ISO Certified Quality" }
  ]

  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-width">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Pakistan&apos;s Leading Industrial Packaging Solutions Provider
            </h2>

            <div className="prose prose-lg text-zinc-600 mb-8">
              <p>
                Yungsun Plastic Industry is at the forefront of providing cutting-edge
                packaging machinery and equipment to businesses across Pakistan.
                Our commitment to quality, innovation, and customer satisfaction has made us
                the preferred partner for companies seeking reliable packaging solutions.
              </p>
              <p className="mt-4">
                We specialize in a comprehensive range of industrial packaging equipment,
                from carton sealers and strapping machines to conveyor systems and liquid
                packaging solutions. Every product in our catalog is carefully selected to
                meet the highest standards of performance and durability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link href="/company-info">
              <Button variant="primary" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/uploads/2023/11/H-banner-4-min.jpg"
                alt="Yungsun Factory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-zinc-900 p-6 rounded-lg max-w-xs shadow-lg">
              <p className="font-bold text-2xl mb-2">100%</p>
              <p className="font-semibold">Customer Satisfaction</p>
              <p className="text-sm mt-1">Guaranteed quality and service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
