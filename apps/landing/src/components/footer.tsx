import type { JSX } from 'react'
import Link from 'next/link'

import { typographyVariants, Icon, cn, Logo } from '@terratritium/ui'

import { footerMenu, socialMenu, legalMenu } from '@/data'

import Land from './land'

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className='container'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8 xl:gap-y-12'>
          {footerMenu.map(({ title, items }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
            <div key={index}>
              <h3>{title}</h3>

              <div className='mt-2' />

              <ul
                className={typographyVariants({
                  className: 'leading-8',
                  variant: 'muted',
                })}
              >
                {items.map(({ href, title, icon, daysLeft }, index) => {
                  const Ikon = Icon[icon as keyof typeof Icon]

                  return (
                    // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
                    <li key={index}>
                      <Link
                        className={cn(
                          'flex group hover:text-white',
                          icon ? 'items-center space-x-1' : null,
                        )}
                        href={href}
                      >
                        <span>{title}</span>

                        {icon ? (
                          <Ikon className='w-4 h-4 stroke-zinc-700' />
                        ) : null}

                        {daysLeft ? (
                          <span className='self-center px-1.5 ml-2 text-[11px] font-medium leading-4 rounded-full border border-indigo-600'>
                            <span className='group-hover:hidden'>Soon</span>
                            <span className='hidden group-hover:block'>
                              {daysLeft} days
                            </span>
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-16' />

        <h3
          className={typographyVariants({
            className: 'text-sm text-center',
            variant: 'muted',
          })}
        >
          Follow us at
        </h3>

        <div className='mt-4' />

        <ul className='flex justify-center space-x-4'>
          {socialMenu.map(({ icon, href, title }, index) => {
            const Icon = Logo[icon as keyof typeof Logo]

            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              <li key={index}>
                <Link href={href} rel='nofollow noopener' target='_blank'>
                  <Icon className='w-9 h-9' />

                  <span className='sr-only'>{title}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='mt-16' />

        <ul
          className={typographyVariants({
            className: 'flex flex-wrap justify-center items-center gap-6',
            variant: 'muted',
          })}
        >
          <li>
            <Link
              className='flex gap-3 items-center text-white'
              href='/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <span className='flex relative w-2 h-2'>
                <span className='inline-flex absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping' />
                <span className='inline-flex relative w-2 h-2 bg-green-500 rounded-full' />
              </span>

              <span>Status</span>
            </Link>
          </li>

          {legalMenu.map(({ title, href }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
            <li key={index}>
              <Link
                className='hover:text-white'
                href={href}
                rel='noopener noreferrer'
                target='_blank'
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-8' />

        <p className='text-center text-sm'>
          &copy; 2023 / {new Date().getFullYear()} Terra Tritium. All rights
          reserved.
        </p>
      </footer>

      <Land />
    </>
  )
}
