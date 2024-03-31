import type { z } from 'zod'
import { type HTMLAttributes, type JSX, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import Link from 'next/link'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  cn,
  Input,
  Button,
  Icon,
  toast,
} from '@terratritium/ui'

import { signInSchema } from '@/schemas'
import { sapi } from '@/lib/api'
import { handleError } from '@/utils'
import { HookFormDevtool } from '@/components'

export const formSchema = signInSchema

type FormValues = z.infer<typeof formSchema>

interface UserRegisterFormProps extends HTMLAttributes<HTMLFormElement> {
  server: string
}

export default function UserRegisterForm({
  className,
  server,
  ...props
}: UserRegisterFormProps): JSX.Element {
  const [isPassVisible, setIsPassVisible] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const { register, formState, reset, handleSubmit, control, ...form } =
    useForm<FormValues>({
      defaultValues: {
        email: '',
        password: '',
      },
      resolver: zodResolver(formSchema),
    })

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return sapi(server).post('/user/login', values)
    },

    onError(error) {
      toast.error(
        handleError(
          error,
          'Sign in is currently not available, please try again later :(',
        ),
      )
    },

    onSuccess: (response) => {
      router.push(
        `/api/redirect?server=${server}&token=${response.data.token}&planet=${response.data.planet}`,
      )
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (values: FormValues) => {
    if (!executeRecaptcha) return

    const reCaptchaToken = await executeRecaptcha()

    mutation.mutate({
      ...values,
      'g-recaptcha-response': reCaptchaToken,
    })
  }

  return (
    <>
      <HookFormDevtool control={control} />

      <Form {...{ register, formState, reset, handleSubmit, control, ...form }}>
        <form
          className={cn('grid space-y-4', className)}
          onSubmit={handleSubmit(onSubmit)}
          {...props}
        >
          <FormField
            control={control}
            name='email'
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormLabel className='sr-only'>First name</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Icon.atSign className='absolute w-4 h-4 top-4 left-4' />

                    <Input
                      className='pl-11'
                      placeholder='Email'
                      type='email'
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name='password'
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormLabel className='sr-only'>First name</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Icon.lockKeyhole className='absolute w-4 h-4 top-4 left-4' />

                    <Input
                      className='pl-11'
                      placeholder='Secure password'
                      type={isPassVisible ? 'text' : 'password'}
                      {...field}
                    />

                    <button
                      className='absolute top-1 right-1 p-3'
                      type='button'
                      onClick={() => setIsPassVisible(!isPassVisible)}
                    >
                      {isPassVisible ? (
                        <Icon.eyeOff className='w-4 h-4' />
                      ) : (
                        <Icon.eye className=' w-4 h-4 ' />
                      )}
                    </button>

                    <Link
                      className='md:absolute md:-right-5 relative top-2 leading-8 translate-x-full hover:underline underline-offset-2'
                      href={`/${server}/forgot`}
                    >
                      Forgot?
                    </Link>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className='relative'>
            {formState.isValid ? (
              <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500 to-teal-700 opacity-70 blur-lg -z-10' />
            ) : null}

            <Button
              className='w-full'
              disabled={!formState.isValid}
              size='lg'
              type='submit'
            >
              {formState.isSubmitting ? (
                <Icon.loader2 className='w-5 h-5 animate-spin' />
              ) : (
                <>
                  <span>Continue</span>

                  <Icon.moveRight className='w-5 h-5' />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
