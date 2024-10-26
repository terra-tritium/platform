import type { JSX } from 'react'
import Link from 'next/link'

import { Logo } from '@terratritium/ui/components'

const channels = [
  {
    logo: <Logo.youTube className='size-16' />,
    href: 'https://youtube.com/@terratritium',
    name: 'YouTube',
    description:
      'Subscribe to our YouTube Channel for developer insights, gameplay videos, and tutorials that will help you master the world of Terra Tritium.',
  },
  {
    logo: <Logo.youTube className='size-16' />,
    href: 'https://x.com/terratritium',
    name: 'Telegram',
    description:
      'Join the discussion on our Telegram Group to chat with other players in real-time, ask questions, and get the latest community updates.',
  },
  {
    logo: <Logo.x className='size-16' />,
    href: 'https://x.com/terratritium',
    name: 'X',
    description:
      "Follow us on X to stay informed about Terra Tritium's latest developments, giveaways, and upcoming features.",
  },
]

export default function CommunityPage(): JSX.Element {
  return (
    <section className='py-10 lg:py-24 sm:py-16'>
      <div className='mx-auto max-w-7xl px-4 lg:px-8 sm:px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mx-auto inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 px-4 py-1.5'>
            <p className='font-semibold text-xs uppercase tracking-widest'>
              Join the Terra Tritium Community
            </p>
          </div>

          <h2 className='mt-6 font-bold text-3xl leading-tight lg:text-5xl sm:text-4xl'>
            The Terra Tritium community is at the heart of our growing game
            ecosystem
          </h2>

          <p className='mt-4 text-2xl text-muted-foreground leading-relaxed'>
            Whether you're a player, trader, or just curious about the world of
            Terra Tritium, we have spaces where you can connect, learn, and
            share experiences with other enthusiasts.
          </p>
        </div>

        <div className='mt-4 grid grid-cols-1 gap-5 lg:mt-8 sm:grid-cols-3 lg:gap-x-12'>
          {channels.map(({ logo, href, name, description }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: ignore
            <div className='px-9 py-10' key={index}>
              {logo}

              <Link href={href} target='_blank'>
                <h3 className='mt-8 font-semibold text-lg'>{name}</h3>
              </Link>

              <p className='mt-4 text-base text-muted-foreground'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto max-w-5xl text-center'>
        <p className='m-4 text-xl leading-relaxed lg:mt-8'>
          Our community is vibrant, welcoming, and passionate about exploring
          everything Terra Tritium has to offer. Join us today and be part of
          the journey as we continue to build the future of the game.
        </p>
      </div>
    </section>
  )
}
