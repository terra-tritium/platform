import Image from 'next/image'

import { Sprite } from '@terratritium/ui'

export default function Land(): JSX.Element {
  return (
    <div className='w-full h-40 max-md:hidden bg-gradient-to-r from-[#77528B] via-[#6D6BFB] to-[#77528B] relative mt-24 shrink-0'>
      <Image
        alt='Hill'
        className='absolute top-4 -translate-y-full z-10'
        src='/static/img/footer/hill-left.svg'
        width={512}
        height={145}
      />

      {/* <Image
    alt='Hill'
    className='absolute -top-64 left-32 max-xl:hidden -translate-y-full z-10'
    src='/static/img/footer/ship.svg'
    width={204}
    height={116}
  /> */}

      <Image
        alt='Hill'
        className='absolute -top-56 left-1/2 max-xl:hidden -translate-x-1/2 z-10'
        src='/static/img/footer/ship.png'
        width={320}
        height={240}
      />

      <Image
        alt='Hill'
        className='absolute top-10 left-1/2 max-xl:hidden -translate-x-1/2 z-10'
        src='/static/img/footer/ship-shadow.svg'
        width={240}
        height={20}
      />

      <Image
        alt='Hill'
        className='absolute -translate-y-full top-6 z-10'
        src='/static/img/footer/stone-left.svg'
        width={153}
        height={34}
      />

      <Image
        alt='Hill'
        className='absolute -translate-y-full max-lg:hidden left-16 top-16 z-20'
        src='/static/img/footer/tritium-left.svg'
        width={369}
        height={126}
      />

      <Image
        alt='Hill'
        className='absolute max-lg:hidden bottom-0 z-20'
        src='/static/img/footer/tritium-left-front.svg'
        width={668}
        height={372}
      />

      <Image
        alt='Hill'
        className='absolute left-1/2 -translate-x-1/2 -translate-y-full top-6 z-10'
        src='/static/img/footer/stone-center.svg'
        width={1040}
        height={56}
      />

      <Image
        alt='Hill'
        className='absolute top-8 right-20 -translate-y-full z-10 max-lg:hidden'
        src='/static/img/footer/hill-right.svg'
        width={315}
        height={280}
      />

      {/* <Image
    alt='Hill'
    className='absolute top-20 right-40 -translate-y-full z-10'
    src='/static/img/footer/tritium-right.svg'
    width={529}
    height={176}
  /> */}

      <Image
        alt='Hill'
        className='absolute top-16 left-1/2 -translate-x-full z-10'
        src='/static/img/footer/tritium-center.svg'
        width={142}
        height={58}
      />

      <Image
        alt='Hill'
        className='absolute bottom-0 right-0 z-10'
        src='/static/img/footer/tritium-right-front.svg'
        width={574}
        height={539}
      />

      <div className='flex absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden'>
        <Sprite.soilLeft className='-mr-24' />
        <Sprite.soilCenter />
        <Sprite.soilRight className='-ml-24' />
      </div>
    </div>
  )
}
