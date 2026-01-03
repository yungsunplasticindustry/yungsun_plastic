import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
          Get in Touch
        </h2>

        <div className="space-y-6">
          {COMPANY_INFO.locations.map((location) => (
            <div key={location.id} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-zinc-900 mb-4">{location.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-zinc-500 mt-0.5" />
                  <p className="text-zinc-600">{location.address}</p>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-zinc-500 mt-0.5" />
                  <a
                    href={`tel:${location.phone}`}
                    className="text-zinc-600 hover:text-blue-600 transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-zinc-500 mt-0.5" />
                  <a
                    href={`mailto:${location.email}`}
                    className="text-zinc-600 hover:text-blue-600 transition-colors"
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-zinc-50 p-6">
        <div className="flex items-start space-x-4">
          <div className="rounded-lg bg-white p-2 shadow-sm">
            <Clock className="h-6 w-6 text-zinc-900" />
          </div>
          <div>
            <h3 className="font-medium text-zinc-900 mb-2">Business Hours</h3>
            <div className="text-sm text-zinc-600 space-y-1">
              <p>Monday - Friday: {COMPANY_INFO.businessHours.weekdays}</p>
              <p>Saturday: {COMPANY_INFO.businessHours.saturday}</p>
              <p>Sunday: {COMPANY_INFO.businessHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
