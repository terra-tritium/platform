import type { ReactNode, JSX } from 'react'
import Link from 'next/link'

import { Icon } from '@terratritium/ui'

interface PublicLayoutProps {
  children: ReactNode
  params: {
    server: string
  }
}

export default function ServerLayout({
  children,
  params: { server },
}: PublicLayoutProps): JSX.Element {
  return (
    <>
      <Link
        className='absolute top-0 flex space-x-2 items-center font-medium mt-2 group'
        href='/'
      >
        <div className='border border-transparent bg-background hover:bg-white/5 rounded-full p-2'>
          <Icon.moveLeft className='w-5 h-5' />
        </div>

        <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
          Servers
        </span>
      </Link>

      <div className='max-w-sm grid mx-auto relative'>
        <div className='flex items-center space-x-4'>
          <span className='w-full h-px bg-gradient-to-r from-transparent to-teal-500 ' />

          <div className='text-lg uppercase font-semibold shrink-0 tracking-wide'>
            {server}
          </div>

          <span className='w-full h-px bg-gradient-to-l from-transparent to-teal-500 ' />
        </div>

        <div className='mt-8' />

        {children}
      </div>
    </>
  )
}
