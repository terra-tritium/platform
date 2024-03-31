import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const server = searchParams.get('server')
  const token = searchParams.get('token')
  const planet = searchParams.get('planet')

  return NextResponse.redirect(
    new URL(
      `/login-connect?token=${token}&planet=${planet}`,
      `https://${server}.terratritium.com`,
    ),
  )
}
