import { redirect } from 'next/navigation'

type ServerPageProps = {
  params: {
    server: string
  }
}

export default function ServerPage({
  params: { server },
}: ServerPageProps): never {
  redirect(`${server}/sign-in`)
}
