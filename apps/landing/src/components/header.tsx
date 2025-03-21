'use client'

import type { JSX } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Orbit, Logo, cn, typographyVariants } from '@terratritium/ui'

import Meteor from './meteor'

import { mainMenu } from '@/data'

export default function Header(): JSX.Element {
  const pathname = usePathname()

  return (
    <>
      <Orbit className='container' />

      <Meteor className='container' />

      <header className='container grid grid-cols-[1fr_248px_1fr] pt-8 md:pt-12'>
        <nav
          className={typographyVariants({
            className: 'flex items-center gap-x-4 font-medium',
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

        <Link className='flex justify-center' href='https://play.terratritium.com'>
          <Logo.terraTritium className='h-12' />
        </Link>

        <ul className='flex items-center justify-end space-x-4'>
          <li>
            <Link
              className='group relative inline-flex rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(246_40%_21%)_inset]'
              href="https://play.terratritium.com" target='blank'
            >
              <span className='absolute inset-0 h-full w-full animate-flip rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]' />

              <span className='absolute inset-[1px] rounded-md bg-background' />

              <div className='relative z-10 pl-24 font-medium'>
                <img
                  alt='Space'
                  src='/_static/img/space.webp'
                  className='-translate-y-1/2 -left-3 absolute top-1/2 w-24 transform transition-[top_1s] group-hover:top-1/4'
                />
                <span>Play now</span>
              </div>
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
