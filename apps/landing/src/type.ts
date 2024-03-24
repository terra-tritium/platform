import type { Icon } from '@terratritium/ui'

export type Menu = {
  icon?: keyof typeof Icon
  title: string
  href: string
}
