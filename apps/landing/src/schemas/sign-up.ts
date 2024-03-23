import { z } from 'zod'

export const signUpSchema = z.object({
  nickname: z.string().min(4).max(20),
  email: z.string().email().min(5).max(255),
  password: z.string().min(8).max(64),
  country: z.string().length(2),
})
