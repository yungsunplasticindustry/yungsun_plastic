import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { generateFAQSchema, privacyFAQs } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Yungsun Plastic Industry. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://yungsunplastic.com/privacy-policy/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={generateFAQSchema(privacyFAQs)} />
      <div className="container-width py-16">
        <div className="mx-auto max-w-4xl prose prose-zinc">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-zinc-600 mb-6">
            <strong>Last Updated:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Introduction</h2>
            <p className="text-zinc-600 mb-4">
              Yungsun Plastic Industry (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website yungsunplastic.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-zinc-800 mb-3">Personal Information</h3>
            <p className="text-zinc-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>Fill out our contact form</li>
              <li>Request a quote for our products</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-zinc-600 mb-4">
              This information may include your name, email address, phone number, company name, and any other 
              information you choose to provide.
            </p>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Automatically Collected Information</h3>
            <p className="text-zinc-600 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-zinc-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process and fulfill quote requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Information Sharing</h2>
            <p className="text-zinc-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>With service providers who assist us in operating our website</li>
              <li>To comply with legal requirements or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Data Security</h2>
            <p className="text-zinc-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Your Rights</h2>
            <p className="text-zinc-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Cookies</h2>
            <p className="text-zinc-600 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. 
              For more information, please see our{' '}
              <Link href="/cookie-policy" className="text-yellow-600 hover:text-yellow-700 underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Third-Party Links</h2>
            <p className="text-zinc-600 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-zinc-600 mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Contact Us</h2>
            <p className="text-zinc-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic text-zinc-600">
              <strong>Yungsun Plastic Industry</strong><br />
              Email: <a href="mailto:info@yungsunplastic.com" className="text-yellow-600 hover:text-yellow-700">info@yungsunplastic.com</a><br />
              Address: Lahore, Pakistan
            </address>
          </section>
        </div>
      </div>
    </main>
  )
}
