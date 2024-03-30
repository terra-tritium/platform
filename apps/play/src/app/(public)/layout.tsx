import type { ReactNode, JSX } from 'react'
import Link from 'next/link'

import { Orbit, Logo, Land } from '@terratritium/ui'

import ReCaptchaProvider from '@/app/providers/recaptcha'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({
  children,
}: PublicLayoutProps): JSX.Element {
  return (
    <main className='flex flex-col h-screen'>
      <Orbit className='container' />

      <section className='container relative pt-8 md:pt-12 flex-1'>
        <Link className='flex justify-center' href='/'>
          <Logo.terraTritium className='h-12' />
        </Link>

        <div className='my-12 md:my-24 z-10'>
          <ReCaptchaProvider>{children}</ReCaptchaProvider>
        </div>
      </section>

      <Land />
    </main>
  )
}
