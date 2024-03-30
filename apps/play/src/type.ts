import type { Icon, Logo } from '@terratritium/ui'

export type Menu = {
  icon?: keyof typeof Icon
  href: string
  title: string
}

export type Social = {
  icon?: keyof typeof Logo
  href: string
  title: string
}
