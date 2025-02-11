import Link from 'next/link'

import { buttonVariants } from '@terratritium/ui'

export default function NFT(): JSX.Element {
  return (
    <div className='mx-auto my-40 grid max-w-7xl grid-cols-1 items-center gap-x-24 gap-y-12 lg:grid-cols-2'>
      <div className='mx-auto text-center lg:order-last lg:mx-0 lg:max-w-none lg:text-left'>
        <h1 className='font-bold text-4xl sm:text-5xl xl:text-6xl'>
          Introducing "The Terra Tritium Origins" NFT Collection!
        </h1>

        <p className='mx-auto mt-5 font-normal text-lg text-muted-foreground lg:mx-0 lg:mt-8 lg:text-xl lg:leading-9'>
          Embark on an epic sci-fi adventure with our revolutionary TERRA
          TRITIUM Game NFT collection, "Origins", grant you access to exclusive
          features like SPECIAL ABILITIES and EXCLUSIVE GAME ZONES. Step into a
          vast universe filled with unexplored planets, intergalactic
          civilizations, and thrilling encounters of Terra Tritium Universe. Our
          collection features unique NFTs that will immerse you in a captivating
          storyline.
        </p>

        <div className='mt-8 lg:mt-16 sm:mt-12'>
          <Link
            className={buttonVariants({
              className: 'w-full',
              size: 'lg',
              variant: 'outline',
            })}
            href='https://miata.io/creators/32/collection/99'
            target='_blank'
          >
            Mint Now
          </Link>
        </div>
      </div>

      <div>
        <div className='mx-auto grid max-w-md grid-cols-2 gap-6 lg:mx-0 lg:max-w-none'>
          <img
            alt=''
            className='mx-auto h-full w-full rounded-lg object-cover'
            src='https://assets.miata.io/preview/3/fe/3fe0b2b8b0d4cc8f9805a4f31b9345a55eafe39cd1fff4c6035ad71758f71fdd.jpg'
          />

          <img
            alt=''
            className='mx-auto h-full w-full rounded-lg object-cover'
            src='https://assets.miata.io/preview/7/5c/75c0160518a1b2c235e333ff522b8b6772cd85462915c443e0a665ea31eeb0d9.jpg'
          />

          <img
            alt=''
            className='mx-auto h-full w-full rotate-3 transform rounded-lg object-cover'
            src='https://assets.miata.io/preview/e/4c/e4c0cf6a25e17b3aa8e30b6c95e0a57b5510178d063af16ee181c5a8f324b850.jpg'
          />

          <img
            alt=''
            className='mx-auto h-full w-full rounded-lg object-cover'
            src='https://assets.miata.io/preview/6/45/64585a984657b9830157d34bf28929281edc98364df1bf7c6bf0ca646488a96e.jpg'
          />
        </div>
      </div>
    </div>
  )
}
