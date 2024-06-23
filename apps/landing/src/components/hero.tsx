import type { JSX } from 'react'
import Link from 'next/link'

import { Icon, Sprite } from '@terratritium/ui'

export default function Hero(): JSX.Element {
  return (
    <div className='container grid grid-cols-8'>
      <div className='col-span-4' />

      <div className='col-span-5 row-span-3 space-y-3 pb-24'>
        <span className='border-white/50 border-l pl-5 font-medium text-muted-foreground text-sm uppercase tracking-widest'>
          Ready to play
        </span>

        <div className='font-medium text-8xl leading-none'>
          Lead civilization
          <br />
          Mine galaxies
          <br />
          Earn real crypto
        </div>
      </div>

      <Link className='relative col-start-7 row-start-4' href='/'>
        <Sprite.dots className='-translate-y-1/2 -top-1 absolute right-0 w-24 translate-x-1/2' />

        <div className='aspec relative flex aspect-1/1 flex-col justify-between space-y-3 bg-green-500 px-7 py-8 text-gray-900'>
          <Icon.coins className='size-10' />

          <span className='font-semibold text-xl'>Buy TRIT</span>
        </div>
      </Link>

      <div className='relative col-start-2 col-end-4 row-span-2 aspect-1/1'>
        <Sprite.dots className='-translate-x-1/2 absolute bottom-24 left-0 w-48' />

        <div
          className='relative z-10 aspect-square bg-cover bg-indigo-500 bg-no-repeat'
          style={{ backgroundImage: 'url(/_static/img/person.webp)' }}
        />
      </div>

      <div className='col-span-2 col-start-5'>
        <div className='border-white border-l pl-5 uppercase leading-relaxed tracking-widest'>
          About
        </div>

        <p className='pt-2 pl-5 text-muted-foreground'>
          Experience the future of MMO gaming in this exciting WEB3 strategy
          game. Lead your civilization through galaxies, mining and earning real
          crypto assets.
        </p>
      </div>

      <div className='col-start-8'>
        <div className='aspect-1/1 bg-cyan-500' />
      </div>

      <div
        className='col-start-5 aspect-1/1 bg-center bg-contain bg-indigo-900 bg-no-repeat'
        style={{ backgroundImage: 'url(/_static/img/concil.webp)' }}
      />

      <div className='col-span-2 col-start-6'>
        <div className='relative grid aspect-2/1 place-items-center bg-indigo-600'>
          <Sprite.wave className='stroke-current px-4' />

          <div className='absolute right-0 bottom-0 grid h-12 w-12 cursor-pointer place-items-center bg-indigo-700'>
            <Icon.play className='size-4 fill-current' />
          </div>
        </div>
      </div>

      <div className='col-start-2 space-y-1'>
        <div className='pt-3 text-xl'>Card</div>

        <div className='text-muted-foreground text-sm'>Origins Colonizer</div>
      </div>

      <div className='col-start-4'>
        <div className='relative aspect-1/1'>
          <img src='/_static/img/card-origins-colonizer.webp' alt='' />

          <div className='absolute right-0 bottom-0 grid h-12 w-12 cursor-pointer place-items-center bg-white text-gray-900 transition-colors hover:bg-blue-600 hover:text-white'>
            <Icon.play className='size-4 fill-current' />
          </div>
        </div>
      </div>

      <div className='col-start-6 space-y-1'>
        <div className='pt-3 text-xl'>Roadmap</div>

        <div className='text-muted-foreground text-sm'>By Andry</div>
      </div>

      <div className='col-start-7'>
        <div className='pt-4 text-right text-muted-foreground text-sm'>
          23:45
        </div>
      </div>

      <div className='col-start-4 space-y-1'>
        <div className='pt-3 text-xl'>Watch Trailer</div>

        <div className='text-muted-foreground text-sm'>2 min</div>
      </div>
    </div>
  )
}
