'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X } from 'lucide-react'
import Button from '@/components/ui/Button'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type QuoteFormData = z.infer<typeof quoteSchema>

interface RequestQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export default function RequestQuoteModal({ isOpen, onClose, productName }: RequestQuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      product: productName || '',
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    
    // Mock submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Quote request submitted:', data)
    
    // Show success message
    alert('Your quote request has been submitted successfully! We will contact you soon.')
    
    reset()
    onClose()
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-white/30"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl m-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900">Request a Quote</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-zinc-100"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium text-zinc-700">
                Company *
              </label>
              <input
                {...register('company')}
                type="text"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                placeholder="ABC Industries"
              />
              {errors.company && (
                <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-700">
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              placeholder="+92 300 1234567"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="product" className="mb-1 block text-sm font-medium text-zinc-700">
              Product/Interest
            </label>
            <input
              {...register('product')}
              type="text"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              placeholder="e.g., Strapping Machine"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700">
              Message *
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              placeholder="Please provide details about your requirements..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>
          
          <div className="flex gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
