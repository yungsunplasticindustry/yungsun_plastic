import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-zinc-900">
        Get in Touch
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="rounded-lg bg-zinc-100 p-3">
            <Mail className="h-6 w-6 text-zinc-900" />
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">Email</h3>
            <a 
              href="mailto:info@Yungsunplastic.com" 
              className="text-zinc-600 hover:text-zinc-900"
            >
              info@Yungsunplastic.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="rounded-lg bg-zinc-100 p-3">
            <Phone className="h-6 w-6 text-zinc-900" />
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">Phone</h3>
            <a 
              href="tel:+1234567890" 
              className="text-zinc-600 hover:text-zinc-900"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="rounded-lg bg-zinc-100 p-3">
            <MapPin className="h-6 w-6 text-zinc-900" />
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">Address</h3>
            <p className="text-zinc-600">
              Industrial Area, City, Country
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="rounded-lg bg-zinc-100 p-3">
            <Clock className="h-6 w-6 text-zinc-900" />
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">Business Hours</h3>
            <div className="text-sm text-zinc-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
