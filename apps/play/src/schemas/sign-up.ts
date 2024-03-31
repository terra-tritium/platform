import { z } from 'zod'

export const signUpSchema = z.object({
  name: z
    .string()
    .min(4, 'Too short, must be at least 4 characters')
    .max(15, 'Too long, must be at most 15 characters'),
  address: z.string().optional(),
  email: z.string().email().min(5).max(255),
  password: z
    .string()
    .min(8, 'Too short, must be at least 4 characters')
    .max(64, 'Too long, must be at most 64 characters'),
  country: z.string().min(1),
  'g-recaptcha-response': z.string().optional(),
})
