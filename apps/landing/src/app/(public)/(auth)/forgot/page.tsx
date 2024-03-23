import type { JSX } from 'react'
import Link from 'next/link'

import { Input, Button, typographyVariants, Icon } from '@terratritium/ui'

export default function SignUpPage(): JSX.Element {
  return (
    <div className='max-w-sm grid mx-auto relative'>
      <h1 className='text-2xl font-medium'>Reset Your Password</h1>

      <div className='mt-2' />

      <p className={typographyVariants({ variant: 'muted' })}>
        Type in your email and we'll send you a link to reset your password.
      </p>

      <div className='mt-8' />

      <div className='relative'>
        <Icon.atSign className='absolute w-4 h-4 top-4 left-4' />

        <Input className='pl-11' placeholder='Email' type='email' />
      </div>

      <div className='mt-8' />

      <div className='relative'>
        <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500 to-teal-700 opacity-70 blur-lg -z-10' />

        <Button className='w-full' size='lg' type='submit'>
          <span>Continue</span>

          <Icon.moveRight className='w-5 h-5' />
        </Button>
      </div>

      <div className='mt-8' />

      <p className={typographyVariants({ variant: 'muted' })}>
        Did you remember your password?{' '}
        <Link
          className='text-white hover:underline underline-offset-2'
          href='/sign-in'
        >
          Sign in
        </Link>
        .
      </p>
    </div>
  )
}
