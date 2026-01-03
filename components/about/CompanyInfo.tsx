import Image from 'next/image'

export default function CompanyInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Leading the Way in Industrial Packaging
            </h2>

            <div className="space-y-4 text-zinc-600">
              <p>
                Yungsun Plastic Industry is at the forefront of providing comprehensive
                packaging solutions to businesses across Pakistan and international markets.
                Our vision is to revolutionize the packaging industry through innovation,
                quality, and exceptional service.
              </p>

              <p>
                Today, we stand as Pakistan&apos;s largest packaging machinery and materials
                company, offering an extensive range of products from stretch films and
                strapping machines to advanced conveyor systems and automated packaging
                lines. Our commitment to excellence has earned us the trust of over 500
                satisfied clients across various industries.
              </p>

              <p>
                We believe in building long-term partnerships with our clients by
                understanding their unique needs and providing tailored solutions that
                drive efficiency, reduce costs, and enhance productivity. Our team of
                experienced professionals works tirelessly to ensure that every product
                we deliver meets the highest standards of quality and reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-zinc-600 mt-1">Quality Assured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-zinc-600 mt-1">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">13</div>
                <div className="text-sm text-zinc-600 mt-1">Product Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-zinc-600 mt-1">Quality Guarantee</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-zinc-100">
              <Image
                src="/images/uploads/2023/11/H-banner-2-min.jpg"
                alt="Yungsun Factory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg max-w-xs">
              <p className="font-semibold">
                &quot;Quality is not an act, it is a habit&quot;
              </p>
              <p className="text-sm mt-2 text-blue-100">- Our Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
