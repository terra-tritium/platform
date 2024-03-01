import type { JSX } from 'react'
import Link from 'next/link'

import {
  Logo,
  typographyVariants,
  Icons,
  cn,
  Detail,
  spacingVariants,
} from '@terratritium/ui'
import { Meteor } from '.'

const menu = [
  {
    title: 'Individuals',
    items: [
      {
        title: 'Get Started',
        href: '/get-started',
      },
      {
        title: 'The TRIT Token',
        href: '/token',
      },
      {
        title: 'On-chain 2FA',
        href: '/on-chain-2fa',
      },
      {
        title: 'Staking',
        href: '/staking',
      },
      {
        title: 'Sustainability',
        href: '/sustainability',
        icon: 'arrowUpRight',
      },
    ],
  },
  {
    title: 'Builders',
    items: [
      {
        title: 'Start Building',
        href: '/start-building',
      },
      {
        title: 'Fundamentals',
        href: '/fundamentals',
        daysLeft: 23,
      },
      {
        title: 'Migration Guide',
        href: '/migration-guide',
        daysLeft: 23,
      },
      {
        title: 'Technology',
        href: '/technology',
        icon: 'arrowUpRight',
      },
      {
        title: 'Become a Validator',
        href: '/become-a-validator',
        icon: 'arrowUpRight',
      },
      {
        title: 'Hackathons',
        href: '/hackathons',
        daysLeft: 23,
      },
      {
        title: 'Releases',
        href: '/releases',
      },
    ],
  },
  {
    title: 'Ecosystem',
    items: [
      {
        title: 'Discover',
        href: '/discover',
      },
      {
        title: 'Projects',
        href: '/projects',
      },
      {
        title: 'Partners',
        href: '/partners',
      },
      {
        title: 'Validators',
        href: '/validators',
      },
      {
        title: 'Service Providers',
        href: '/service-providers',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Events Calendar',
        href: '/events-calendar',
      },
      {
        title: 'Governance',
        href: '/governance',
        icon: 'arrowUpRight',
      },
      {
        title: 'Ambassadors Program',
        href: '/ambassadors-program',
        daysLeft: 23,
      },
      {
        title: 'FAQ',
        href: '/faq',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Whitepaper',
        href: '/whitepaper',
        icon: 'newspaper',
      },
      {
        title: 'Economics Paper',
        href: '/economics-paper',
        icon: 'newspaper',
      },
      {
        title: 'Token Metrics',
        href: '/token-metrics',
        icon: 'newspaper',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Media Kit',
        href: '/media-kit',
        icon: 'arrowUpRight',
      },
      {
        title: 'Careers',
        href: '/careers',
      },
    ],
  },
] as Array<{
  title: string
  items: Array<{
    title: string
    href: string
    icon?: keyof typeof Icons
    daysLeft?: number
  }>
}>

export const Footer = (): JSX.Element => {
  return (
    <div className='relative border-t'>
      <Meteor stardust={{ className: 'rotate-90' }} />

      <footer
        className={spacingVariants({
          className: 'container relative',
          variant: 'section',
        })}
      >
        <div className='absolute top-0 left-0 w-full h-48 -z-10'>
          <div className='absolute left-0 w-px h-full bg-border' />
          <div className='absolute right-0 w-px h-full bg-border' />
          <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-background' />
        </div>

        <div className='grid grid-cols-4 gap-x-4 xl:gap-y-16'>
          {menu.map(({ title, items }, index) => (
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
                  const Icon = Icons[icon as keyof typeof Icons]

                  return (
                    // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
                    <li key={index}>
                      <Link
                        className={cn(
                          'flex group',
                          icon ? 'items-center space-x-1' : null,
                        )}
                        href={href}
                      >
                        <span>{title}</span>

                        {icon ? (
                          <Icon className='w-4 h-4 stroke-zinc-700' />
                        ) : null}

                        {daysLeft ? (
                          <span className='self-center px-2 ml-2 text-xs font-medium leading-5 rounded-full border border-green-900'>
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

        <div className='pt-24' />

        <Detail.eclipse className='absolute z-0 fill-background' />

        <div className='pt-24' />

        <div className='relative z-10'>
          <div className='text-center'>
            <Link className='inline-flex items-center space-x-4' href='/'>
              <Logo.mark className='w-32 h-32' />
              <Logo.type className='h-7' />
            </Link>
          </div>

          {/* <span className='font-medium'>
          Lead civilization, mine galaxies, earn real crypto.
        </span> */}

          <div className='pt-12' />

          <ul className='flex justify-center items-center space-x-6'>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-3 items-center'
                href='/'
              >
                <span className='flex relative w-2 h-2'>
                  <span className='inline-flex absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping' />
                  <span className='inline-flex relative w-2 h-2 bg-green-500 rounded-full' />
                </span>

                <span>Status</span>
              </a>
            </li>

            <li>
              <Link target='_blank' rel='noopener noreferrer' href='/privacy'>
                Legal
              </Link>
            </li>

            <li>
              <Link target='_blank' rel='noopener noreferrer' href='/privacy'>
                Disclaimer
              </Link>
            </li>

            <li>
              <Link target='_blank' rel='noopener noreferrer' href='/privacy'>
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link target='_blank' rel='noopener noreferrer' href='/terms'>
                Terms of Use
              </Link>
            </li>
          </ul>

          <div className='pt-8' />

          <p
            className={typographyVariants({
              className: 'text-center',
              variant: 'muted',
            })}
          >
            &copy; {new Date().getFullYear()} Terra Tritium. All rights reserved
          </p>
        </div>

        {/* <div className='absolute left-1/2  h-2/3 scale-150  stroke-zinc-700/70 [mask-image:linear-gradient(to_top,white_20%,transparent_75%)] -translate-x-1/2'>
          <svg
            viewBox='0 0 1026 1026'
            fill='none'
            aria-hidden='true'
            className='inset-0 w-full h-full animate-spin-forward-slow'
          >
            <path
              d='M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z'
              stroke='#d4d4d8'
              strokeOpacity='0.7'
            />
            <path
              d='M513 1025C230.23 1025 1 795.77 1 513'
              stroke='url(#:R9dj6qja:-gradient-1)'
              strokeLinecap='round'
            />
            <defs>
              <linearGradient
                id=':R9dj6qja:-gradient-1'
                x1={1}
                y1={513}
                x2={1}
                y2={1025}
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#22c55e' />
                <stop offset={1} stopColor='#121212' stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>

          <svg
            viewBox='0 0 1026 1026'
            fill='none'
            aria-hidden='true'
            className='absolute inset-0 w-full h-full animate-spin-reverse-slower'
          >
            <path
              d='M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z'
              stroke='#d4d4d8'
              strokeOpacity='0.7'
            />
            <path
              d='M913 513c0 220.914-179.086 400-400 400'
              stroke='url(#:R9dj6qja:-gradient-2)'
              strokeLinecap='round'
            />
            <defs>
              <linearGradient
                id=':R9dj6qja:-gradient-2'
                x1={913}
                y1={513}
                x2={913}
                y2={913}
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#22c55e' />
                <stop offset={1} stopColor='#121212' stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </footer>
    </div>
  )
}
