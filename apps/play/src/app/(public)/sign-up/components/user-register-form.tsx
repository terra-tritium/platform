'use client'

import type { z } from 'zod'
import type { HTMLAttributes, JSX } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  cn,
  Input,
  Button,
  Icon,
  toast,
} from '@terratritium/ui'

import { signUpSchema } from '@/schemas'
import { api } from '@/lib/api'
import { handleError } from '@/utils'
import { HookFormDevtool } from '@/components'
import { useGetCountries } from '@/hooks/api/use-country'

export const formSchema = signUpSchema

type FormValues = z.infer<typeof formSchema>

interface UserRegisterFormProps extends HTMLAttributes<HTMLFormElement> {}

export default function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps): JSX.Element {
  const { data: countries, isLoading: isCountriesLoading } = useGetCountries()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const { register, formState, reset, handleSubmit, control, ...form } =
    useForm<FormValues>({
      defaultValues: {
        name: '', // FIXME: Change to 'nickname'
        email: '',
        password: '',
        country: '',
      },
      resolver: zodResolver(formSchema),
    })

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return api.post('/player/register', values)
    },

    onError(error) {
      toast.error(
        handleError(
          error,
          'Sign up is currently not available, please try again later :(',
        ),
      )
    },

    onSuccess: () => {
      router.push('/sign-in')

      toast.success(
        'Please check your email to complete the registration process.',
      )
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (values: FormValues) => {
    if (!executeRecaptcha) return

    const reCaptchaToken = await executeRecaptcha()

    mutation.mutate({
      ...values,
      'g-recaptcha-response': reCaptchaToken,
      address: 'nowallet',
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
            name='name'
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormLabel className='sr-only'>Nickname</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Icon.user className='absolute w-4 h-4 top-4 left-4' />

                    <Input
                      className='pl-11'
                      placeholder='Nickname'
                      type='text'
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
            name='email'
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormLabel className='sr-only'>Email</FormLabel>

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
                <FormLabel className='sr-only'>Secure password</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Icon.lockKeyhole className='absolute w-4 h-4 top-4 left-4' />

                    <Input
                      className='pl-11'
                      placeholder='Secure password'
                      type='password'
                      {...field}
                    />

                    {/* <Icon.eye className='absolute w-4 h-4 top-4 right-4' /> */}
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name='country'
            render={({ field: { onChange } }) => (
              <FormItem className='space-y-0'>
                <FormLabel className='sr-only'>Country</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Icon.mapPin className='absolute w-4 h-4 top-4 left-4' />

                    <Select
                      onValueChange={(value) => onChange(value)}
                      onOpenChange={(value) => onChange(value)}
                    >
                      <SelectTrigger className='pl-11'>
                        <SelectValue placeholder='Country' />
                      </SelectTrigger>

                      <SelectContent>
                        {isCountriesLoading ? (
                          <SelectItem value='loading'>Loading...</SelectItem>
                        ) : (
                          countries?.map(({ id: value, name: label }) => (
                            <SelectItem key={value} value={value.toString()}>
                              {label}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
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
