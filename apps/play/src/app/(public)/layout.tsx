import type { ReactNode, JSX } from 'react'
import Link from 'next/link'

import { Orbit, Icon, Logo } from '@terratritium/ui'

import ReCaptchaProvider from '@/app/providers/recaptcha'
import { Footer } from '@/components'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({
  children,
}: PublicLayoutProps): JSX.Element {
  return (
    <main className='flex flex-col h-screen pt-8 md:pt-12'>
      <Orbit className='container' />

      <section className='container relative flex-1'>
        <Link className='flex justify-center' href='/'>
          <Logo.terraTritium className='h-12' />
        </Link>

        <Link
          className='absolute right-0 top-0 flex space-x-2 items-center font-medium mt-2 group'
          href={process.env.NEXT_PUBLIC_LANDING_URL as string}
        >
          <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
            Portal
          </span>

          <div className='border bg-background hover:bg-white/5 rounded-full p-2'>
            <Icon.x className='w-5 h-5' />
          </div>
        </Link>

        <div className='my-12 md:my-24 z-10'>
          <ReCaptchaProvider>{children}</ReCaptchaProvider>
        </div>
      </section>

      <Footer />
    </main>
  )
}
