import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(4).max(15),
  address: z.string().optional(),
  email: z.string().email().min(5).max(255),
  password: z.string().min(8).max(64),
  country: z.string().min(1),
  'g-recaptcha-response': z.string().optional(),
})
