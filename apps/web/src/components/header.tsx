import type { JSX } from 'react'
import Link from 'next/link'

import { Logo, Social, spacingVariants } from '@terratritium/ui'
import { mainMenu, social } from '@/data'

export const Header = (): JSX.Element => {
  return (
    <header
      className={spacingVariants({
        className: 'container border-x !py-0',
        variant: 'section',
      })}
    >
      <div className='grid items-center py-4 grid-cols-header'>
        <nav className='flex space-x-4 lg:space-x-6'>
          {mainMenu.map(({ title, href }, index) => (
            <Link
              href={href}
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              key={index}
            >
              {title}
            </Link>
          ))}
        </nav>

        <Link className='flex items-center space-x-4 shrink-0' href='/'>
          <Logo.mark className='w-20 h-20' />
        </Link>

        <ul className='flex justify-end space-x-4'>
          {social.map(({ icon, name, href }, index) => {
            const Icon = Social[icon as keyof typeof Social]

            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              <li key={index}>
                <Link href={href} rel='nofollow noopener' target='_blank'>
                  <Icon className='w-6 h-6' />

                  <span className='sr-only'>{name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
