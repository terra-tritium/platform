import type { JSX } from 'react'
import Link from 'next/link'

import { typographyVariants, Logo, Land } from '@terratritium/ui'

import { socialMenu, legalMenu } from '@/data'

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className='container'>
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
