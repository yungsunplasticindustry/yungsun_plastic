import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function SolutionsBanner() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/uploads/2023/11/H-banner-3-min.jpg')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Machinery Equipment Solutions Provider
          </h2>
          <p className="text-xl mb-8 text-zinc-100">
            We are Pakistan's trusted packing machines and materials company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 min-w-[200px]">
                Explore Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zinc-900 min-w-[200px]">
                Contact Us Today
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Fast</div>
              <div className="text-sm uppercase tracking-wider">Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Expert</div>
              <div className="text-sm uppercase tracking-wider">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Best</div>
              <div className="text-sm uppercase tracking-wider">Price Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
