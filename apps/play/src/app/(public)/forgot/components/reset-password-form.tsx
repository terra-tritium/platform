'use client'

import type { z } from 'zod'
import type { HTMLAttributes, JSX } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

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

import { resetPasswordSchema } from '@/schemas'
import { api } from '@/lib/api'
import { handleError } from '@/utils'
import { HookFormDevtool } from '@/components'

export const formSchema = resetPasswordSchema

type FormValues = z.infer<typeof formSchema>

interface ResetPasswordFormProps extends HTMLAttributes<HTMLFormElement> {}

export default function ResetPasswordForm({
  className,
  ...props
}: ResetPasswordFormProps): JSX.Element {
  const { register, formState, reset, handleSubmit, control, ...form } =
    useForm<FormValues>({
      defaultValues: {
        email: '',
      },
      resolver: zodResolver(formSchema),
    })

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return api.post('/user/forgot-password', values)
    },

    onError(error) {
      toast.error(
        handleError(
          error,
          'Signup is currently not available, please try again later :(',
        ),
      )
    },

    onSuccess: () => {
      router.push('/sign-in')

      toast.success('Check your email for a link to reset your password.')
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (values: FormValues) => {
    mutation.mutate(values)
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
              <FormItem>
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

                <FormLabel className='sr-only'>First name</FormLabel>

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
