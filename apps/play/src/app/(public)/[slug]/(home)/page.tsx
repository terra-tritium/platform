import { redirect } from 'next/navigation'

type SlugPageProps = {
  params: {
    slug: string
  }
}

export default function SlugPage({ params: { slug } }: SlugPageProps): never {
  redirect(`${slug}/sign-in`)
}
