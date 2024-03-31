import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Too short, must be at least 4 characters')
    .max(64, 'Too long, must be at most 64 characters'),
  'g-recaptcha-response': z.string().optional(),
})
