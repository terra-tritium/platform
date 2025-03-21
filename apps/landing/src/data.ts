import type { Menu, Social } from '@/type'

export const mainMenu = [
  { href: '/', title: 'Home' },
  { href: 'https:/play.terratritium.com', title: 'Game' },
  { href: '/token', title: 'Token' },
  { href: '/community', title: 'Community' },
] as Array<Menu>

export const socialMenu = [
  {
    icon: 'youTube',
    title: 'YouTube',
    href: 'https://youtube.com/@terratritium',
  },
  {
    icon: 'twitch',
    title: 'Twitch',
    href: 'https://twitch.tv/terratritium',
  },
  {
    icon: 'instagram',
    title: 'Instagram',
    href: 'https://instagram.com/terratritium',
  },
  {
    icon: 'x',
    title: 'X',
    href: 'https://twitter.com/terratritium',
  },
] as Array<Social>

export const footerMenu = [
  {
    title: 'Individuals',
    items: [
      {
        title: 'Get Started',
        href: 'https://docs.terratritium.com/',
      },
      {
        title: 'The TRIT Token',
        href: '/token',
      },
      {
        title: 'Staking',
        href: 'https://docs.terratritium.com/',
      },
    ],
  },
  // {
  //   title: 'Builders',
  //   items: [
  //     {
  //       title: 'Start Building',
  //       href: '/start-building',
  //     },
  //     {
  //       title: 'Fundamentals',
  //       href: '/fundamentals',
  //       daysLeft: 23,
  //     },
  //     {
  //       title: 'Migration Guide',
  //       href: '/migration-guide',
  //       daysLeft: 23,
  //     },
  //     {
  //       title: 'Technology',
  //       href: '/technology',
  //       icon: 'arrowUpRight',
  //     },
  //     {
  //       title: 'Become a Validator',
  //       href: '/become-a-validator',
  //       icon: 'arrowUpRight',
  //     },
  //     {
  //       title: 'Hackathons',
  //       href: '/hackathons',
  //       daysLeft: 23,
  //     },
  //     {
  //       title: 'Releases',
  //       href: '/releases',
  //     },
  //   ],
  // },
  {
    title: 'Ecosystem',
    items: [
      {
        title: 'Validators',
        href: 'https://validator.info/terra-classic/terravaloper1ldvm3meszks6glyjwdnwt4re8faxzgalu4gh9j',
      },
      {
        title: 'Bridge',
        href: 'https://bridge.terratritium.com/',
      },
      {
        title: 'Rocket',
        href: 'https://rocket.terratritium.com/',
      },
      {
        title: 'NFT',
        href: 'https://miata.io/creators/32/collection/99',
      },
      {
        title: 'Partners',
        href: '/',
        daysLeft: 9999,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Governance',
        href: 'https://discord.gg/wNcPr8ya',
        icon: 'arrowUpRight',
      },
      {
        title: 'Ambassadors Program',
        href: '/',
        daysLeft: 9999,
      },
      {
        title: 'FAQ',
        href: 'https://docs.terratritium.com/intro',
      },
      {
        title: 'Blog',
        href: 'https://t.me/terratritium',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Whitepaper',
        href: '/_static/TerraTritiumWhitepaper.pdf',
        icon: 'newspaper',
      },
      {
        title: 'Token Metrics',
        href: '/token',
        icon: 'newspaper',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Documentation',
        href: 'https://docs.terratritium.com/intro',
        icon: 'arrowUpRight',
      },
      {
        title: 'Contracts',
        href: '/careers',
      },
      {
        title: 'Contact us',
        href: 'mail.to:terratritium@terratritium.com',
      },
    ],
  },
] as Array<{
  title: string
  items: Array<Menu & { daysLeft?: number }>
}>

export const legalMenu = [
  {
    href: '/legal',
    title: 'Legal',
  },
  {
    href: '/disclaimer',
    title: 'Disclaimer',
  },
  {
    href: '/privacy',
    title: 'Privacy Policy',
  },
  {
    href: '/terms',
    title: 'Terms of Use',
  },
] as Array<Menu>
