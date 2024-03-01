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

interface WorkspaceInviteEmailProps {
  invitedByFirstName: string
  invitedByEmail: string
  workspaceName: string
  firstName: string
  magicLink: string
  fromIp: string
  fromLocation: string
}

export const WorkspaceInviteEmail = ({
  invitedByFirstName,
  invitedByEmail,
  workspaceName,
  firstName,
  magicLink,
  fromIp,
  fromLocation,
}: WorkspaceInviteEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />

        <Fragment>
          <Preview>You're invited to join a Terra Tritium workspace</Preview>

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
                Invited to workspace
                <span className='ml-1'>👨🏻‍💻</span>
              </Heading>

              <Text>
                <strong>{invitedByFirstName}</strong> ({invitedByEmail}) has
                invited you to the <strong>{workspaceName}</strong> workspace on{' '}
                <strong>Terra Tritium</strong>.
              </Text>

              <Text>
                To accept the invite, please click the button below. This link
                will expire in 48 hours.
              </Text>

              <Button
                className='py-3 px-6 text-white bg-black rounded-md'
                href={magicLink}
              >
                Join workspace
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
                <span className='text-black'>{firstName}</span>. This magic link
                was sent from <span className='text-black'>{fromIp}</span>{' '}
                located in <span className='text-black'>{fromLocation}</span>.
                If you don't recognize this invite, you can ignore this email.
              </Text>
            </Container>
          </Body>
        </Fragment>
      </Tailwind>
    </Html>
  )
}

WorkspaceInviteEmail.PreviewProps = {
  invitedByFirstName: 'Richard',
  invitedByEmail: 'richard.doe@example.com',
  workspaceName: 'Acme Inc.',
  firstName: 'John',
  magicLink: 'https://terratritium.com/join-workspace/xyz',
  fromIp: '216.238.112.233',
  fromLocation: 'São Paulo, Brazil',
} as WorkspaceInviteEmailProps

export default WorkspaceInviteEmail
