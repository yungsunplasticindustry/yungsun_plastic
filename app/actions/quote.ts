'use server'

import { revalidatePath } from 'next/cache'
import { quoteRequestSchema, type QuoteRequestData } from '@/lib/validations'

export type QuoteActionResult = {
  success: boolean
  message: string
  error?: string
}

export async function submitQuoteRequest(data: QuoteRequestData): Promise<QuoteActionResult> {
  try {
    // Validate the data
    const validated = quoteRequestSchema.parse(data)

    // TODO: In production, integrate with email service (Resend, SendGrid, etc.)
    // For now, we'll simulate email sending
    console.log('Quote Request Received:', {
      from: validated.email,
      name: validated.name,
      company: validated.company || 'N/A',
      phone: validated.phone || 'N/A',
      message: validated.message,
      items: validated.cartItems.map(item => ({
        product: item.productName,
        quantity: item.quantity
      }))
    })

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Revalidate the contact page to show success state
    revalidatePath('/contact')

    return {
      success: true,
      message: 'Your quote request has been submitted successfully. Our team will contact you within 24 hours.'
    }
  } catch (error) {
    console.error('Quote submission error:', error)
    
    if (error instanceof Error) {
      return {
        success: false,
        message: 'Failed to submit quote request',
        error: error.message
      }
    }

    return {
      success: false,
      message: 'An unexpected error occurred'
    }
  }
}
