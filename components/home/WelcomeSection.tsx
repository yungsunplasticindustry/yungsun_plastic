import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Welcome Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Welcome to <span className="text-yellow-500">Yungsun Plastic Industry</span>
          </h2>
          
          {/* Company Description */}
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            ONE SOURCE OF COMPLETE PACKAGING, FILLING & LABELING SOLUTION
          </p>
          
          <div className="prose prose-lg mx-auto text-zinc-600 mb-10">
            <p>
              At Yungsun Plastic Industry, we are your trusted partner for comprehensive 
              industrial packaging solutions. We provide cutting-edge machinery and 
              equipment for businesses across Pakistan and beyond. 
              Our commitment to quality and innovation makes us the preferred choice for 
              companies seeking reliable packaging, filling, and labeling solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="min-w-[200px]">
                View Product Catalogue
              </Button>
            </Link>
            <Link href="/contact?quote=true">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-zinc-200">
            <div>
              <div className="text-3xl font-bold text-yellow-600">100%</div>
              <div className="text-sm text-zinc-600 mt-1">Quality Assured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">500+</div>
              <div className="text-sm text-zinc-600 mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">13</div>
              <div className="text-sm text-zinc-600 mt-1">Product Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">24/7</div>
              <div className="text-sm text-zinc-600 mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}