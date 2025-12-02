import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { generateFAQSchema, termsFAQs } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for Yungsun Plastic Industry. Read our terms of use, warranty policy, and legal agreements.',
  alternates: {
    canonical: 'https://yungsunplastic.com/terms-and-conditions/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={generateFAQSchema(termsFAQs)} />
      <div className="container-width py-16">
        <div className="mx-auto max-w-4xl prose prose-zinc">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
            Terms and Conditions
          </h1>
          
          <p className="text-zinc-600 mb-6">
            <strong>Last Updated:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 mb-4">
              By accessing and using the Yungsun Plastic Industry website (yungsunplastic.com), you accept and 
              agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do 
              not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Use of Website</h2>
            <p className="text-zinc-600 mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&apos;s use of the website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful, threatening, or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Products and Services</h2>
            <h3 className="text-xl font-medium text-zinc-800 mb-3">Product Information</h3>
            <p className="text-zinc-600 mb-4">
              We make every effort to display our products accurately. However, we cannot guarantee that 
              product images, descriptions, or specifications are completely accurate, current, or error-free. 
              We reserve the right to correct any errors and update information at any time.
            </p>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Pricing</h3>
            <p className="text-zinc-600 mb-4">
              All prices are subject to change without notice. Quotes provided are valid for 30 days unless 
              otherwise specified. Final pricing will be confirmed at the time of order.
            </p>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Availability</h3>
            <p className="text-zinc-600 mb-4">
              Product availability is subject to change. We reserve the right to discontinue any product 
              at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Orders and Payments</h2>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>All orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Payment terms will be agreed upon at the time of order confirmation</li>
              <li>Prices are quoted in Pakistani Rupees (PKR) unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Warranty</h2>
            <p className="text-zinc-600 mb-4">
              Our products come with manufacturer warranties as specified at the time of purchase. 
              Warranty terms vary by product and will be provided with your order confirmation.
            </p>
            <p className="text-zinc-600 mb-4">Warranty does not cover:</p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>Damage caused by misuse or improper operation</li>
              <li>Normal wear and tear</li>
              <li>Unauthorized modifications or repairs</li>
              <li>Damage from power surges or electrical issues</li>
              <li>Consumable parts and accessories</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Shipping and Delivery</h2>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss passes to the buyer upon delivery</li>
              <li>Shipping costs will be quoted separately</li>
              <li>Installation services are available at additional cost</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Returns and Refunds</h2>
            <p className="text-zinc-600 mb-4">
              Returns are accepted within 7 days of delivery for unused products in original packaging. 
              Custom orders and modified equipment are non-refundable. Refunds will be processed within 
              14 business days of receiving the returned item.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Intellectual Property</h2>
            <p className="text-zinc-600 mb-4">
              All content on this website, including text, images, logos, and graphics, is the property 
              of Yungsun Plastic Industry and is protected by intellectual property laws. You may not 
              reproduce, distribute, or use any content without our prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-zinc-600 mb-4">
              To the fullest extent permitted by law, Yungsun Plastic Industry shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages arising from your 
              use of our website or products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Indemnification</h2>
            <p className="text-zinc-600 mb-4">
              You agree to indemnify and hold harmless Yungsun Plastic Industry, its officers, directors, 
              employees, and agents from any claims, damages, losses, or expenses arising from your 
              violation of these terms or your use of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. Governing Law</h2>
            <p className="text-zinc-600 mb-4">
              These Terms and Conditions are governed by and construed in accordance with the laws of 
              Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts of Lahore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Changes to Terms</h2>
            <p className="text-zinc-600 mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting on this page. Your continued use of the website 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. Contact Information</h2>
            <p className="text-zinc-600 mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <address className="not-italic text-zinc-600">
              <strong>Yungsun Plastic Industry</strong><br />
              Email: <a href="mailto:info@yungsunplastic.com" className="text-yellow-600 hover:text-yellow-700">info@yungsunplastic.com</a><br />
              Address: Lahore, Pakistan
            </address>
          </section>

          <div className="mt-8 p-4 bg-zinc-100 rounded-lg">
            <p className="text-zinc-600 text-sm">
              By using our website, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms and Conditions. See also our{' '}
              <Link href="/privacy-policy" className="text-yellow-600 hover:text-yellow-700 underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookie-policy" className="text-yellow-600 hover:text-yellow-700 underline">
                Cookie Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
