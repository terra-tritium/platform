import type { ReactNode, JSX } from 'react'

import { Logo } from '@acme/ui'

import Stars from '@/components/stars'
import Footer from '@/components/footer'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({
  children,
}: PublicLayoutProps): JSX.Element {
  return (
    <main className='flex flex-col h-screen'>
      <section className='container relative pt-8 md:pt-12 flex-1'>
        <header className='flex justify-center'>
          <Logo.terraTritium className='h-12' />
        </header>

        <div className='max-md:hidden bg-radial-gradient absolute aspect-video -top-20 w-full blur-3xl opacity-40 mix-blend-hard-light max-lg:hidden' />

        <img
          alt='Orbit'
          className='absolute max-md:hidden top-40 left-1/2 -translate-x-1/2 -z-20'
          src='/static/img/orbit.svg'
        />

        <div className='relative max-md:hidden left-1/2 w-full max-w-7xl -translate-x-1/2 -z-10'>
          <Stars />
        </div>

        <div className='my-12 md:my-24 z-10'>{children}</div>
      </section>

      <Footer />
    </main>
  )
}
