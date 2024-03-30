import Image from 'next/image'

import { cn } from '../../lib/utils'
// import { Sprite } from './sprite'
import HillLeft from '../../static/img/land/hill-left.svg'
import Ship from '../../static/img/land/ship.png'
import ShipShadow from '../../static/img/land/ship-shadow.svg'
import StoneLeft from '../../static/img/land/stone-left.svg'
import TritiumLeft from '../../static/img/land/tritium-left.svg'
import TritiumLeftFront from '../../static/img/land/tritium-left-front.svg'
import StoneCenter from '../../static/img/land/stone-center.svg'
import HillRight from '../../static/img/land/hill-right.svg'
import TritiumCenter from '../../static/img/land/tritium-center.svg'
import TritiumRightFront from '../../static/img/land/tritium-right-front.svg'

type LandProps = {
  className?: string
}

export default function Land({ className }: LandProps): JSX.Element {
  return (
    <div
      className={cn(
        'w-full h-40 bg-gradient-to-r from-[#77528B] via-[#6D6BFB] to-[#77528B] relative mt-56 shrink-0',
        className,
      )}
    >
      {/* <div className='flex absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden'>
        <Sprite.soilLeft className='-mr-24' />
        <Sprite.soilCenter />
        <Sprite.soilRight className='-ml-24' />
      </div> */}

      <Image
        alt='Hill Left'
        className='absolute top-4 -translate-y-full'
        src={HillLeft}
        width={512}
        height={145}
      />

      {/* <Image
        alt='Ship'
        className='absolute -top-64 left-32 max-xl:hidden -translate-y-full'
        src={Ship}
        width={204}
        height={116}
      /> */}

      <Image
        alt='Ship'
        className='absolute -top-56 left-1/2 max-xl:hidden -translate-x-1/2'
        src={Ship}
        width={320}
        height={240}
      />

      <Image
        alt='Ship Shadow'
        className='absolute top-10 left-1/2 max-xl:hidden -translate-x-1/2'
        src={ShipShadow}
        width={240}
        height={20}
      />

      <Image
        alt='Stone Left'
        className='absolute -translate-y-full top-6'
        src={StoneLeft}
        width={153}
        height={34}
      />

      <Image
        alt='Tritium Left'
        className='absolute -translate-y-full max-lg:hidden left-16 top-16'
        src={TritiumLeft}
        width={369}
        height={126}
      />

      <Image
        alt='Tritium Left Front'
        className='absolute max-lg:hidden bottom-0'
        src={TritiumLeftFront}
        width={668}
        height={372}
      />

      <Image
        alt='Stone Center'
        className='absolute left-1/2 -translate-x-1/2 -translate-y-full top-6'
        src={StoneCenter}
        width={1040}
        height={56}
      />

      <Image
        alt='Hill Right'
        className='absolute top-8 right-20 -translate-y-full max-lg:hidden'
        src={HillRight}
        width={315}
        height={280}
      />

      {/* <Image
        alt='Tritium Right'
        className='absolute top-20 right-40 -translate-y-full'
        src={TritiumRight}
        width={529}
        height={176}
      /> */}

      <Image
        alt='Tritium Center'
        className='absolute top-16 left-1/2 -translate-x-full max-lg:hidden'
        src={TritiumCenter}
        width={142}
        height={58}
      />

      <Image
        alt='Tritium Right Front'
        className='absolute bottom-0 right-0'
        src={TritiumRightFront}
        width={574}
        height={539}
      />
    </div>
  )
}
