import type { JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants, spacingVariants } from '@terratritium/ui'

// const tags = [
//   {
//     label: 'AI',
//     href: '/',
//   },
//   {
//     label: 'Play-To-Earn',
//     href: '/',
//   },
//   {
//     label: 'Free-to-Play',
//     href: '/',
//   },
//   {
//     label: 'Ecosystem',
//     href: '/',
//   },
// ] as Array<{ label: string; href: string }>

export const Hero = (): JSX.Element => {
  return (
    <div className='border-t'>
      {/* <div className='container'>
        <div className='pt-4' />

        <Link
          className='inline-flex py-1.5 px-4 rounded-full border lg:px-6'
          href='/'
        >
          <div className='flex items-center space-x-2'>
            <Icons.newspaper className='w-4 h-4' />

            <p className='text-white font-regular truncate'>
              Alpha 0.2 is here!
            </p>
          </div>

          <div className='mx-4 w-px bg-border' />

          <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400'>
            Read post <span aria-hidden='true'>→</span>
          </span>
        </Link>

        <div className='pt-4' />
      </div> */}

      <div className='container flex relative border-x'>
        {/* <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          src='https://res.cloudinary.com/sidusheroes-com/video/upload/v1675352941/sidus_site/play-now/sidus_f1iqo7.mp4'
        />

        <div className='absolute bottom-0 p-4 lg:p-8'>
          <ul className='flex space-x-2'>
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
        </div> */}

        {/* <div className='pt-4' /> */}

        <div
          className={spacingVariants({
            className: 'flex flex-col grow',
            variant: 'section',
          })}
        >
          <div className='mt-48' />

          <h1 className='flex flex-col text-7xl font-bold tracking-tighter uppercase leading-[4rem]'>
            <div
              className='text-transparent ml-[70px]'
              style={{ WebkitTextStroke: '1px white' }}
            >
              <span className='text-4xl tracking-normal'>Lead</span>{' '}
              civilization
            </div>{' '}
            mine galaxies{' '}
            <div
              className='text-transparent ml-[62px] text-nowrap'
              style={{ WebkitTextStroke: '1px white' }}
            >
              <span className='text-4xl tracking-normal align-super'>earn</span>{' '}
              real crypto
            </div>
          </h1>

          <div className='flex mt-auto space-x-6'>
            <Link
              className={buttonVariants({
                className: 'skew-right !bg-teal-600',
                size: 'lg',
                variant: 'secondary',
              })}
              href='/'
            >
              Play the game
            </Link>

            <Link
              className={buttonVariants({
                className: 'skew',
                size: 'lg',
                variant: 'outline',
              })}
              href='/'
            >
              Buy TRIT
            </Link>

            <Link
              className={buttonVariants({
                className: 'skew-left',
                size: 'lg',
                variant: 'outline',
              })}
              href='/'
            >
              Roadmap
            </Link>
          </div>
        </div>

        <Image
          alt=''
          className='shrink-0'
          src='/assets/img/hero.png'
          width={640}
          height={709}
        />
      </div>
    </div>
  )
}
