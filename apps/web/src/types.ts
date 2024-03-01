import { Icons, Social as SocialIcons } from '@terratritium/ui'

export type Menu = Array<{
  icon?: keyof typeof Icons
  title: string
  href: string
  count?: number
}>

export type Social = {
  icon?: keyof typeof SocialIcons
  name: string
  href: string
}
