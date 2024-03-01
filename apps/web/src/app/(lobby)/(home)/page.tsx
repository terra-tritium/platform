import type { JSX } from 'react'
import Link from 'next/link'

import { badgeVariants, typographyVariants } from '@terratritium/ui'

import { Hero, Buy, Numbers, Awards, Team } from '@/components'

const modules = [
  {
    title: 'Module Economy',
    subtitle:
      'Act as a genuine token supplier, offering in-game resources for trading purposes',
    href: '/',
    tags: [
      {
        label: 'Resource contribution',
        href: '/',
      },
    ],
    image:
      'https://res.cloudinary.com/sidusheroes-com/image/upload/v1699341615/sidus_site/games/home/module-economy_c2ep7s.webp',
    color: '',
  },
  {
    title: 'Play To Earn',
    subtitle:
      'Explore P2E concept in a smart way by creating an economy and mining assets',
    href: '/',
    tags: [
      {
        label: 'Token',
        href: '/',
      },
      {
        label: 'Liquidity',
        href: '/',
      },
    ],
    image:
      'https://res.cloudinary.com/sidusheroes-com/image/upload/v1699342961/sidus_site/games/home/lp-farming_ella1z.webp',
    color: '',
  },
  {
    title: 'Stake',
    subtitle:
      'Seek Tritium, a rare mineral, using a spaceship that suits your strategy for TRIT rewards.',
    href: '/',
    tags: [
      {
        label: 'Assets',
        href: '/',
      },
      {
        label: 'Trade',
        href: '/',
      },
    ],
    image:
      'https://res.cloudinary.com/sidusheroes-com/image/upload/v1699342961/sidus_site/games/home/sidus-market_m4a1ub.webp',
    color: '',
  },
  {
    title: 'Smart NFT',
    subtitle:
      'Collect NFTs and combine them for in-game interactions, uses and unlock unique busters',
    href: '/',
    tags: [
      {
        label: 'Resource contribution',
        href: '/',
      },
    ],
    image:
      'https://res.cloudinary.com/sidusheroes-com/image/upload/v1695721173/sidus_site/games/home/MilitaryGeneral_SMMPoseHor01_2_rtdnkc_rpdmbk.png',
    color: '',
  },
  {
    title: 'Tritium Rocket',
    subtitle:
      'Take charge as the Captain of a Miner Explorer on a mission to find the elusive Tritium Mineral!',
    href: '/',
    tags: [
      {
        label: 'Token',
        href: '/',
      },
      {
        label: 'Liquidity',
        href: '/',
      },
    ],
    image:
      'https://res.cloudinary.com/sidusheroes-com/image/upload/v1695721244/sidus_site/games/home/Game_catalog_id006_v003_v002_post_AO_3_emiss_1_1_dbcxbk_qtjsnq.png',
    color: '',
  },
]

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <Buy />

      <div className='border-y'>
        <div className='container grid grid-cols-3 border-l'>
          {modules.map(({ title, subtitle, tags, image }, index) => (
            <div
              className='flex relative flex-col p-4 border-r border-b lg:p-8 aspect-square group'
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              key={index}
            >
              <div
                className='absolute right-0 bottom-0 w-full h-full bg-right-bottom bg-no-repeat transition-all duration-500 origin-bottom-right group-hover:scale-110 -z-10'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: '65%',
                }}
              />

              <h2 className={typographyVariants({ variant: 'h2' })}>{title}</h2>

              <div className='mt-2' />

              <p className={typographyVariants({ variant: 'muted' })}>
                {subtitle}
              </p>

              <ul className='flex mt-auto space-x-2'>
                {tags.map(({ label, href }, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
                  <li key={index}>
                    <Link
                      className={badgeVariants({ variant: 'outline' })}
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='flex relative flex-col justify-center p-4 border-r border-b lg:p-8 aspect-square group'>
            <h2>
              <span
                className='block text-6xl font-bold tracking-tight leading-none text-transparent uppercase'
                style={{ WebkitTextStroke: '1px white' }}
              >
                491,809,752
              </span>

              <span className='text-3xl'>Total supply</span>
            </h2>

            <div className='mt-4 lg:mt-8' />

            <h2>
              <span
                className='block text-6xl font-bold tracking-tight leading-none text-transparent uppercase'
                style={{ WebkitTextStroke: '1px white' }}
              >
                93,629,877
              </span>

              <span className='text-3xl'>Circulating supply</span>
            </h2>

            <div className='mt-4' />
          </div>
        </div>
      </div>

      <Numbers />
      <Awards />
      <Team />
    </>
  )
}
