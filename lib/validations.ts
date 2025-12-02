import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
})

export const quoteRequestSchema = contactFormSchema.extend({
  cartItems: z.array(z.object({
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int().positive(),
  })).min(1, 'Cart must contain at least one item'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type QuoteRequestData = z.infer<typeof quoteRequestSchema>
