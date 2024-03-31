import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export function GET(req: NextRequest): Response {
  const { searchParams } = new URL(req.url)
  const server = searchParams.get('server')
  const token = searchParams.get('token')
  const planet = searchParams.get('planet')

  const response = NextResponse.redirect(
    new URL(`/game/planet/${planet}`, `https://${server}.terratritium.com`),
  )
  response.headers.set('Authorization', `Bearer ${token}`)

  return response
}
