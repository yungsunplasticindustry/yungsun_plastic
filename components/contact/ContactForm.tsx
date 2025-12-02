'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useCartStore } from '@/stores/cart'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

interface ContactFormProps {
  includeCartItems?: boolean
}

export default function ContactForm({ includeCartItems = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  
  const cartItems = useCartStore((state) => state.getCartItems())
  const clearCart = useCartStore((state) => state.clearCart)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Build email body
      let emailBody = `Name: ${data.name}\n`
      emailBody += `Email: ${data.email}\n`
      if (data.phone) emailBody += `Phone: ${data.phone}\n`
      if (data.company) emailBody += `Company: ${data.company}\n`
      emailBody += `\nMessage:\n${data.message}`
      
      if (includeCartItems && cartItems.length > 0) {
        emailBody += `\n\n--- Quote Request Items ---\n`
        cartItems.forEach(item => {
          emailBody += `- ${item.product.name} (Qty: ${item.quantity})\n`
        })
      }

      // Open mailto link
      const subject = includeCartItems ? 'Quote Request - Yungsun Plastic Industry' : 'Contact Inquiry - Yungsun Plastic Industry'
      const mailtoUrl = `mailto:info@yungsunplastic.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
      
      window.open(mailtoUrl, '_blank')
      
      setSubmitResult({
        success: true,
        message: 'Your email client has been opened. Please send the email to complete your request.'
      })
      
      reset()
      if (includeCartItems) {
        clearCart()
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'An error occurred. Please email us directly at info@yungsunplastic.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
        {includeCartItems ? 'Request a Quote' : 'Send us a Message'}
      </h2>

      {submitResult && (
        <div className={`mb-4 rounded-md p-4 ${
          submitResult.success 
            ? 'bg-green-50 text-green-800 border border-green-200'
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitResult.message}
        </div>
      )}

      {includeCartItems && cartItems.length > 0 && (
        <div className="mb-4 rounded-md bg-zinc-50 p-4">
          <h3 className="mb-2 font-medium text-zinc-900">Your Cart Items:</h3>
          <ul className="space-y-1 text-sm text-zinc-600">
            {cartItems.map(item => (
              <li key={item.product.id}>
                {item.product.name} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-900">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 ${
              errors.name ? 'border-red-500' : 'border-zinc-300'
            }`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-900">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 ${
              errors.email ? 'border-red-500' : 'border-zinc-300'
            }`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-900">
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full rounded-md border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-900">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            className="w-full rounded-md border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-900">
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 ${
              errors.message ? 'border-red-500' : 'border-zinc-300'
            }`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || (includeCartItems && cartItems.length === 0)}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            includeCartItems ? 'Submit Quote Request' : 'Send Message'
          )}
        </Button>
      </form>
    </div>
  )
}
