import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Button,
  Link,
  Hr,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import { Fragment } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : ''

interface EmailVerifyEmailProps {
  firstName: string
  magicLink: string
  fromIp: string
  fromLocation: string
}

export const EmailVerifyEmail = ({
  firstName,
  magicLink,
  fromIp,
  fromLocation,
}: EmailVerifyEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />

        <Fragment>
          <Preview>Please verify your email on Terra Tritium</Preview>

          <Body className='font-sans bg-white'>
            <Container className='max-w-[464px]'>
              <Section className='md:mt-16'>
                <Img
                  alt='Terra Tritium'
                  className='my-0'
                  src={`${baseUrl}/static/logo.png`}
                  width='211'
                  height='40'
                />
              </Section>

              <Heading className='mt-5 text-2xl md:mt-8'>
                Welcome to Terra Tritium, {firstName}!{' '}
                <span className='ml-1'>👋</span>
              </Heading>

              <Text>
                Thanks for signing up! We're excited to have you as a user and
                can't wait to see what you will create!
              </Text>

              <Text>
                To access the platform, please verify your email address. This
                link will expire in 30 min.
              </Text>

              <Button
                className='py-3 px-6 text-white bg-black rounded-md'
                href={magicLink}
              >
                Verify email address
              </Button>

              <Section>
                <Text className='mb-0'>or follow this link:</Text>

                <Link
                  href={magicLink}
                  className='mt-4 font-semibold text-green-600 no-underline'
                >
                  {magicLink}
                </Link>
              </Section>

              <Hr className='my-6 w-full border' />

              <Text className='text-[#666666] text-[12px] leading-[24px]'>
                This check was intended for{' '}
                <span className='text-black'>{firstName}</span>. This
                verification was sent from{' '}
                <span className='text-black'>{fromIp}</span> located in{' '}
                <span className='text-black'>{fromLocation}</span>. If you
                didn't expect this verification, you can ignore this email.
              </Text>
            </Container>
          </Body>
        </Fragment>
      </Tailwind>
    </Html>
  )
}

EmailVerifyEmail.PreviewProps = {
  firstName: 'John',
  magicLink: 'https://terratritium.com/verify-email/xyz',
  fromIp: '216.238.112.233',
  fromLocation: 'São Paulo, Brazil',
} as EmailVerifyEmailProps

export default EmailVerifyEmail
