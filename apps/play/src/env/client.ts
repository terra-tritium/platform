import { z } from 'zod'

export type PublicEnv = z.infer<typeof publicEnvSchema>

const publicEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url(),
})

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
} satisfies Record<keyof PublicEnv, string | undefined>)
