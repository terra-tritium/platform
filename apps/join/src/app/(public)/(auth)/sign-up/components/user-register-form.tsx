'use client'

import type { z } from 'zod'
import { type HTMLAttributes, useState } from 'react'
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  cn,
  Input,
  Button,
  Icon,
  toast,
} from '@acme/ui'

import { signUpSchema } from '@/schemas'
import { api } from '@/lib/api'
import { handleError } from '@/utils'

type Country = {
  flag: string
  value: string
  label: string
}

const countries: Country[] = [
  {
    value: 'AR',
    label: 'Argentina',
    flag: '🇦🇷',
  },
  {
    value: 'BR',
    label: 'Brazil',
    flag: '🇧🇷',
  },
]

export const formSchema = signUpSchema

type FormValues = z.infer<typeof formSchema>

interface UserRegisterFormProps extends HTMLAttributes<HTMLFormElement> {}

export default function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const [open, setOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  const { register, formState, reset, handleSubmit, control, ...form } =
    useForm<FormValues>({
      defaultValues: {
        nickname: '',
        email: '',
        password: '',
        country: '',
      },
      resolver: zodResolver(formSchema),
    })

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return api.post('/auth/sign-up', values)
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
      router.refresh()
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (values: FormValues) => {
    mutation.mutate(values)
  }

  return (
    <Form {...{ register, formState, reset, handleSubmit, control, ...form }}>
      <form
        className={cn('grid space-y-4', className)}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <FormField
          control={control}
          name='nickname'
          render={({ field }) => (
            <FormItem>
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

              <FormLabel className='sr-only'>First name</FormLabel>

              <FormMessage />
            </FormItem>
          )}
        />

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

        <FormField
          control={control}
          name='password'
          render={({ field }) => (
            <FormItem>
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

              <FormLabel className='sr-only'>First name</FormLabel>

              <FormMessage />
            </FormItem>
          )}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              className='px-4 h-12 rounded-sm justify-normal gap-x-3'
              size='sm'
              variant='outline'
            >
              {selectedCountry ? (
                <>
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedCountry.label}</span>
                </>
              ) : (
                <>
                  <span>🎌</span>
                  <span className='text-muted-foreground'>Country</span>
                </>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className='p-0' align='start'>
            <Command>
              <CommandInput placeholder='Select country...' />

              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup>
                  {countries.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setSelectedCountry(
                          countries.find(
                            (priority) => priority.value === value,
                          ) || null,
                        )
                        setOpen(false)
                      }}
                    >
                      <span>{status.flag}</span>
                      <span className='ml-2'>{status.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

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
  )
}
