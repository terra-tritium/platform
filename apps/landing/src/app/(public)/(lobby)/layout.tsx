import type { ReactNode, JSX } from 'react'
import Link from 'next/link'

import { Logo } from '@terratritium/ui'

import { Orbit, Footer } from '@/components'

interface LobbyLayoutProps {
  children: ReactNode
}

export default function LobbyLayout({
  children,
}: LobbyLayoutProps): JSX.Element {
  return (
    <main className='flex flex-col h-screen'>
      <section className='container relative pt-8 md:pt-12 flex-1'>
        <Orbit />

        <Link className='flex justify-center' href='/'>
          <Logo.terraTritium className='h-12' />
        </Link>

        <div className='my-12 md:my-24 z-10'>{children}</div>
      </section>

      <Footer />
    </main>
  )
}
