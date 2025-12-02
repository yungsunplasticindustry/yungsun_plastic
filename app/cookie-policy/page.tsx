import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Yungsun Plastic Industry. Learn about how we use cookies and similar technologies on our website.',
  alternates: {
    canonical: 'https://yungsunplastic.com/cookie-policy/',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-width py-16">
        <div className="mx-auto max-w-4xl prose prose-zinc">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
            Cookie Policy
          </h1>
          
          <p className="text-zinc-600 mb-6">
            <strong>Last Updated:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-zinc-600 mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit a website. They are widely used to make websites work more efficiently and 
              to provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-zinc-600 mb-4">
              Yungsun Plastic Industry uses cookies and similar technologies for the following purposes:
            </p>
            
            <h3 className="text-xl font-medium text-zinc-800 mb-3">Essential Cookies</h3>
            <p className="text-zinc-600 mb-4">
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation and access to secure areas. The website cannot function 
              properly without these cookies.
            </p>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Analytics Cookies</h3>
            <p className="text-zinc-600 mb-4">
              We use analytics cookies (such as Vercel Analytics) to understand how visitors interact 
              with our website. This helps us improve our website&apos;s performance and user experience. 
              These cookies collect information anonymously.
            </p>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Performance Cookies</h3>
            <p className="text-zinc-600 mb-4">
              We use Vercel Speed Insights to monitor our website&apos;s performance. These cookies help 
              us identify and fix issues that may affect your browsing experience.
            </p>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Functional Cookies</h3>
            <p className="text-zinc-600 mb-4">
              These cookies allow the website to remember choices you make (such as your preferred 
              language or region) and provide enhanced, personalized features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 mb-4">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="border border-zinc-200 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-zinc-200 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-zinc-200 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-zinc-200 px-4 py-2">_vercel_analytics</td>
                    <td className="border border-zinc-200 px-4 py-2">Website analytics</td>
                    <td className="border border-zinc-200 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-200 px-4 py-2">yunsun-cart</td>
                    <td className="border border-zinc-200 px-4 py-2">Shopping cart data</td>
                    <td className="border border-zinc-200 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-zinc-600 mb-4">
              Some cookies on our website are set by third-party services. These include:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li><strong>Vercel Analytics:</strong> For website traffic analysis</li>
              <li><strong>Vercel Speed Insights:</strong> For performance monitoring</li>
            </ul>
            <p className="text-zinc-600 mb-4">
              These third parties have their own privacy policies governing how they use your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Managing Cookies</h2>
            <p className="text-zinc-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            
            <h3 className="text-xl font-medium text-zinc-800 mb-3">Browser Settings</h3>
            <p className="text-zinc-600 mb-4">
              Most browsers allow you to refuse or accept cookies, delete cookies, and set preferences 
              for specific websites. Here&apos;s how to access cookie settings in popular browsers:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-800 mb-3">Impact of Disabling Cookies</h3>
            <p className="text-zinc-600 mb-4">
              Please note that disabling cookies may affect the functionality of our website. Some 
              features may not work properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Local Storage</h2>
            <p className="text-zinc-600 mb-4">
              In addition to cookies, we use local storage to store your shopping cart items. This 
              data is stored locally on your device and is not transmitted to our servers. You can 
              clear this data through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-zinc-600 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. Please check this page periodically 
              for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Contact Us</h2>
            <p className="text-zinc-600 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <address className="not-italic text-zinc-600">
              <strong>Yungsun Plastic Industry</strong><br />
              Email: <a href="mailto:info@yungsunplastic.com" className="text-yellow-600 hover:text-yellow-700">info@yungsunplastic.com</a><br />
              Address: Lahore, Pakistan
            </address>
          </section>

          <div className="mt-8 p-4 bg-zinc-100 rounded-lg">
            <p className="text-zinc-600 text-sm">
              For more information about how we handle your data, please see our{' '}
              <Link href="/privacy-policy" className="text-yellow-600 hover:text-yellow-700 underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms-and-conditions" className="text-yellow-600 hover:text-yellow-700 underline">
                Terms and Conditions
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
