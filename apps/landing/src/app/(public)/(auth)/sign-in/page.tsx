import type { JSX } from 'react'
import Link from 'next/link'

import { typographyVariants, Input, Button, Icon } from '@acme/ui'

export default function SignInPage(): JSX.Element {
  return (
    <div className='max-w-sm grid mx-auto relative'>
      <h1 className='text-2xl font-medium'>Ready to conquer?</h1>

      <div className='mt-2' />

      <p className={typographyVariants({ variant: 'muted' })}>
        New to Terra Tritium?{' '}
        <Link
          className='text-white hover:underline underline-offset-2'
          href='/sign-up'
        >
          Sign up
        </Link>{' '}
        for an account.
      </p>

      <div className='mt-8' />

      <div className='relative'>
        <Icon.atSign className='absolute w-4 h-4 top-4 left-4' />

        <Input className='pl-11' placeholder='Email' type='email' />
      </div>

      <div className='mt-4' />

      <div className='relative'>
        <Icon.lockKeyhole className='absolute w-4 h-4 top-4 left-4' />

        <Input className='px-11' placeholder='Password' type='password' />

        <Icon.eye className='absolute w-4 h-4 top-4 right-4' />

        <Link
          className='md:absolute md:-right-5 relative top-2 leading-8 translate-x-full hover:underline underline-offset-2'
          href='/forgot'
        >
          Forgot?
        </Link>
      </div>

      <div className='mt-8' />

      <div className='relative'>
        <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500 to-teal-700 opacity-70 blur-lg -z-10' />

        <Button className='w-full' size='lg' type='submit'>
          <span>Continue</span>

          <Icon.moveRight className='w-5 h-5' />
        </Button>
      </div>

      <div className='mt-6' />

      <div className='flex items-center space-x-4'>
        <span className='w-full h-px bg-gradient-to-r from-transparent to-orange-500 ' />

        <div className='text-xs uppercase font-semibold shrink-0 tracking-wide'>
          Or continue with
        </div>

        <span className='w-full h-px bg-gradient-to-l from-transparent to-orange-500 ' />
      </div>

      <div className='mt-6' />

      <Button className='w-full' size='lg' type='submit' variant='outline'>
        <span>Google</span>

        <Icon.moveRight className='w-5 h-5' />
      </Button>
    </div>
  )
}
