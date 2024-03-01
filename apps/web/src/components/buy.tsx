import type { JSX } from 'react'

import { spacingVariants } from '@terratritium/ui'

export const Buy = (): JSX.Element => {
  return (
    <div className='border-t'>
      <div className='container border-x'>
        <div className={spacingVariants({ variant: 'section' })}>
          <h2 className='font-bold tracking-tighter leading-none uppercase'>
            <span className='text-6xl'>Where to</span>
            <span
              className='block text-7xl text-transparent'
              style={{ WebkitTextStroke: '1px white' }}
            >
              buy TRIT
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

// Coinhall https://coinhall.org/terraclassic/terra1rdm4u439w8lery29m5dv5z6w7raea0gvt29qefqhr37n5n4yhphsxlqpwc
// Terraswap https://app-classic.terraswap.io/pairs/terra1rdm4u439w8lery29m5dv5z6w7raea0gvt29qefqhr37n5n4yhphsxlqpwc
// Terraport https://terraport.finance
// Connin https://coininn.com/coin/TRIT
// Pancake https://pancakeswap.finance/swap?outputCurrency=0x44846e92Dd01e3Fe8f84a9A33D555b2AeE862EDB
