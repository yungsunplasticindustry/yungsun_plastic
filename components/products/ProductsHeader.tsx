import Breadcrumbs from '@/components/layout/Breadcrumbs'

export default function ProductsHeader() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Our Products' },
  ]

  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
      <div className="container-width flex flex-col items-center">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mx-auto max-w-3xl text-center mt-4">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">
            Our Products
          </h1>
          <p className="text-lg text-zinc-600">
            Explore our wide range of industrial packaging solutions and machinery.
          </p>
        </div>
      </div>
    </section>
  )
}
