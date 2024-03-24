'use client'

import type { JSX } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Logo, cn, typographyVariants } from '@terratritium/ui'

import { Orbit } from '@/components'
import { mainMenu } from '@/data'

export default function Header(): JSX.Element {
  const pathname = usePathname()

  return (
    <>
      <Orbit className='container' />

      <header className='container grid grid-cols-[1fr_248px_1fr] pt-8 md:pt-12'>
        <nav
          className={typographyVariants({
            className: 'flex gap-x-4 items-center font-medium',
            variant: 'muted',
          })}
        >
          {mainMenu.map(({ href, title }, index) => (
            <Link
              className={cn(
                'hover:text-white',
                pathname === href ? 'text-white' : null,
              )}
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              key={index}
              href={href}
            >
              {title}
            </Link>
          ))}
        </nav>

        <Link className='flex justify-center' href='/'>
          <Logo.terraTritium className='h-12' />
        </Link>

        <ul className='flex justify-end items-center space-x-4'>
          <li>
            <Link
              className='relative inline-flex rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(246_40%_21%)_inset]'
              href='/sign-up'
            >
              <span className='animate-flip before:animate-rotate absolute inset-0 h-full w-full rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]' />

              <span className='absolute bg-background rounded-md inset-[1px]' />

              <div className='z-10 font-medium'>Play now</div>
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
