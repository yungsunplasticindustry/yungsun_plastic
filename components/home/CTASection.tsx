import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to Improve Your Packaging?
        </h2>
        <p className="mb-8 text-lg text-zinc-300">
          Contact us today for a personalized quote and expert consultation.
        </p>
        <Link href="/contact">
          <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-zinc-900">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
