import type { JSX } from 'react'

import {
  Avatar,
  AvatarImage,
  spacingVariants,
  typographyVariants,
} from '@terratritium/ui'

const teams = [
  {
    image: 'https://terratritium.com/assets/images/team/cristian.png',
    name: 'Cristian',
    role: 'Founder & CEO',
  },
  {
    image: 'https://terratritium.com/assets/images/team/andry.png',
    name: 'Andry',
    role: 'Principal Engineer',
  },
  {
    image: 'https://terratritium.com/assets/images/team/vegas.png',
    name: 'Vegas',
    role: 'Community & Partners',
  },
  {
    image: 'https://terratritium.com/assets/images/team/thiago.png',
    name: 'Tiago',
    role: 'Advisor & Partners',
  },
  {
    image: 'https://terratritium.com/assets/images/team/nuno.png',
    name: 'Levathar',
    role: 'Node Infrastructure',
  },
  {
    image: 'https://terratritium.com/assets/images/team/roniel.png',
    name: 'Roniel',
    role: 'Head of Development',
  },
  {
    image: 'https://terratritium.com/assets/images/team/fabio.png',
    name: 'Fabio',
    role: 'Frontend Developer',
  },
  {
    image: 'https://terratritium.com/assets/images/team/larissa.png',
    name: 'Larissa',
    role: 'Game Developer',
  },
  {
    image: 'https://terratritium.com/assets/images/team/kleiton.png',
    name: 'Kleiton',
    role: 'Game Developer',
  },
  {
    image: 'https://terratritium.com/assets/images/team/walker.png',
    name: 'Walker',
    role: 'DevSecOps',
  },
  {
    image: 'https://terratritium.com/assets/images/team/balta.png',
    name: 'Balta',
    role: 'Art Director',
  },
] as Array<{ image: string; name: string; role: string }>

export const Team = (): JSX.Element => {
  return (
    <div className='border-t'>
      <div className='container border-x'>
        <div className={spacingVariants({ variant: 'section' })}>
          <h2 className='font-bold tracking-tighter leading-none uppercase'>
            <span
              className='block text-6xl text-transparent'
              style={{ WebkitTextStroke: '1px white' }}
            >
              Definitive
            </span>
            <span className='text-7xl'>team</span>
          </h2>

          <div className='pt-16' />

          <div className='grid grid-cols-6 gap-y-8'>
            {teams.map(({ image, name, role }, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
              <div className='flex flex-col group' key={index}>
                <div className='flex relative'>
                  <div className='absolute left-2 top-4 w-28 h-28 rounded-full border-8 border-white transition-colors duration-700 group-hover:border-teal-500' />

                  <Avatar className='w-32 h-32'>
                    <AvatarImage src={image} />
                  </Avatar>
                </div>

                <div className='mt-2' />

                <h3 className='text-lg'>{name}</h3>

                <p
                  className={typographyVariants({
                    className: 'text-sm',
                    variant: 'muted',
                  })}
                >
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
