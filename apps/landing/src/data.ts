import type { Menu } from '@/type'

export const mainMenu = [
  { href: '/', title: 'Overview' },
  { href: '/customers', title: 'Customers' },
  { href: '/products', title: 'Products' },
  { href: '/settings', title: 'Settings' },
] as Array<Menu>

export const footerMenu = [
  {
    title: 'Individuals',
    items: [
      {
        title: 'Get Started',
        href: '/get-started',
      },
      {
        title: 'The TRIT Token',
        href: '/token',
      },
      {
        title: 'On-chain 2FA',
        href: '/on-chain-2fa',
      },
      {
        title: 'Staking',
        href: '/staking',
      },
      {
        title: 'Sustainability',
        href: '/sustainability',
        icon: 'arrowUpRight',
      },
    ],
  },
  {
    title: 'Builders',
    items: [
      {
        title: 'Start Building',
        href: '/start-building',
      },
      {
        title: 'Fundamentals',
        href: '/fundamentals',
        daysLeft: 23,
      },
      {
        title: 'Migration Guide',
        href: '/migration-guide',
        daysLeft: 23,
      },
      {
        title: 'Technology',
        href: '/technology',
        icon: 'arrowUpRight',
      },
      {
        title: 'Become a Validator',
        href: '/become-a-validator',
        icon: 'arrowUpRight',
      },
      {
        title: 'Hackathons',
        href: '/hackathons',
        daysLeft: 23,
      },
      {
        title: 'Releases',
        href: '/releases',
      },
    ],
  },
  {
    title: 'Ecosystem',
    items: [
      {
        title: 'Discover',
        href: '/discover',
      },
      {
        title: 'Projects',
        href: '/projects',
      },
      {
        title: 'Partners',
        href: '/partners',
      },
      {
        title: 'Validators',
        href: '/validators',
      },
      {
        title: 'Service Providers',
        href: '/service-providers',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Events Calendar',
        href: '/events-calendar',
      },
      {
        title: 'Governance',
        href: '/governance',
        icon: 'arrowUpRight',
      },
      {
        title: 'Ambassadors Program',
        href: '/ambassadors-program',
        daysLeft: 23,
      },
      {
        title: 'FAQ',
        href: '/faq',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Whitepaper',
        href: '/whitepaper',
        icon: 'newspaper',
      },
      {
        title: 'Economics Paper',
        href: '/economics-paper',
        icon: 'newspaper',
      },
      {
        title: 'Token Metrics',
        href: '/token-metrics',
        icon: 'newspaper',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Media Kit',
        href: '/media-kit',
        icon: 'arrowUpRight',
      },
      {
        title: 'Careers',
        href: '/careers',
      },
    ],
  },
] as Array<{
  title: string
  items: Array<Menu & { daysLeft?: number }>
}>

export const legalMenu = [
  {
    title: 'Legal',
    href: '/legal',
  },
  {
    title: 'Disclaimer',
    href: '/disclaimer',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
  {
    title: 'Terms of Use',
    href: '/terms',
  },
] as Array<Menu>
