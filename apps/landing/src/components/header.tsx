import type { JSX } from 'react'
import Link from 'next/link'

import { Logo } from '@terratritium/ui'

import { Orbit } from '@/components'
import { mainMenu, socialMenu } from '@/data'

export default function Header(): JSX.Element {
  return (
    <>
      <Orbit className='container' />

      <header className='container grid grid-cols-[1fr_248px_1fr] pt-8 md:pt-12'>
        <nav className='flex gap-x-4 items-center font-medium'>
          {mainMenu.map(({ href, title }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
            <Link key={index} href={href}>
              {title}
            </Link>
          ))}
        </nav>

        <Link className='flex justify-center' href='/'>
          <Logo.terraTritium className='h-12' />
        </Link>

        <ul className='flex justify-end items-center space-x-4'>
          {socialMenu.map(({ icon, href, title }, index) => {
            const Icon = Logo[icon as keyof typeof Logo]

            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              <li key={index}>
                <Link href={href} rel='nofollow noopener' target='_blank'>
                  <Icon className='w-6 h-6' />

                  <span className='sr-only'>{title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </header>
    </>
  )
}
