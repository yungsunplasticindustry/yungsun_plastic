import { Target, Eye, Award, Users } from 'lucide-react'

export default function MissionVision() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide innovative and reliable packaging solutions that help our clients optimize their operations, reduce costs, and achieve sustainable growth."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading packaging solutions provider in South Asia, recognized for our quality, innovation, and commitment to customer satisfaction."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We maintain the highest standards of quality in every product we offer, ensuring durability, efficiency, and value for our customers."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our success is measured by the success of our customers. We go above and beyond to understand and exceed their expectations."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-zinc-50 to-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Driven by excellence, guided by integrity, and committed to innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                {value.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
