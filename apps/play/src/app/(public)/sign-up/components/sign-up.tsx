import type { JSX } from 'react'
import Link from 'next/link'

import { Button, typographyVariants, Icon } from '@terratritium/ui'

import UserRegisterForm from './user-register-form'

export default function SignUp(): JSX.Element {
  return (
    <div className='max-w-sm grid mx-auto relative'>
      <h1 className='text-2xl font-medium'>Time to play!</h1>

      <div className='mt-2' />

      <p className={typographyVariants({ variant: 'muted' })}>
        Already have an account?{' '}
        <Link
          className='text-white hover:underline underline-offset-2'
          href='/sign-in'
        >
          Sign in
        </Link>
        .
      </p>

      {process.env.VERCEL_ENV !== 'production' && (
        <>
          <div className='mt-8' />

          <UserRegisterForm />

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
        </>
      )}
    </div>
  )
}
