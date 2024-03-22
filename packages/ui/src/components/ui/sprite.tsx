import type { HTMLAttributes } from 'react'

type SpriteProps = HTMLAttributes<SVGElement>

export const Sprite = {
  soilCenter: (props: SpriteProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: SVG is purely decorative
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='794'
      height='133'
      fill='none'
      {...props}
    >
      <path
        fill='url(#a)'
        d='M698.04 132.936H89.167L.161 91.896c69.586-5.938 157.453-8.2 249.617 9.122 225.003 42.277 436.835-20.764 408.643-56.63-1.99-2.535-4.847-4.236-7.963-5.028-48.147-12.22-388.759-4.798-379.803-13.531 3.305-4.64 73.365-7.493 56.63-12.148-19.29-4.957-69.456-5.967-124.008-6.08 49.848-6.14 234.901-12.077 207.878.85-38.969 18.459 28.798 13.95 140.873 11.268 68.115-2.694 79.627-4.409 81.591-11.255-1.471-9.294 89.512-2.925 130.588 6.353-51.335-4.019-79.195-2.204-75.212 5.88.419 8.56 97.749 29.122 103.881 50.159 5.006 21.601-36.908 44.095-94.836 62.077z'
        opacity='.3'
      />
      <defs>
        <linearGradient
          id='a'
          x1='396.722'
          x2='396.722'
          y1='132.936'
          y2='.754'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCE2FF' />
          <stop offset='1' stopColor='#E859A3' />
        </linearGradient>
      </defs>
    </svg>
  ),
  soilRight: (props: SpriteProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: SVG is purely decorative
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='616'
      height='104'
      fill='none'
      {...props}
    >
      <path
        fill='url(#a)'
        d='M.268 1.063s160.367 2.357 148.457 5.69c-11.911 3.332 46.238 6.692 36.765 11.373-9.473 4.684-101.595 6.642-85.588 10.557s160.267 3.263 169.967 5.873 49.725-.513-23.533 17.361c-73.257 17.875 81.608 23.098 81.608 23.098l287.099-15.462L480.513.105.271 1.066z'
        opacity='.3'
      />
      <path
        fill='url(#b)'
        d='M271.398 103.879c42.86 0 77.605-5.237 77.605-11.697s-34.745-11.697-77.605-11.697-77.604 5.237-77.604 11.697 34.744 11.697 77.604 11.697'
        opacity='.3'
      />
      <defs>
        <linearGradient
          id='a'
          x1='307.654'
          x2='307.654'
          y1='75.015'
          y2='.105'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCE2FF' />
          <stop offset='1' stopColor='#E859A3' />
        </linearGradient>
        <linearGradient
          id='b'
          x1='271.398'
          x2='271.398'
          y1='103.879'
          y2='80.485'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCE2FF' />
          <stop offset='1' stopColor='#E859A3' />
        </linearGradient>
      </defs>
    </svg>
  ),
  soilLeft: (props: SpriteProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: SVG is purely decorative
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='611'
      height='69'
      fill='none'
      {...props}
    >
      <path
        fill='url(#a)'
        d='M509.361 1.8s-215.313 9.638-162.945 13.774-127.323 24.874-127.323 24.874l-91.275-5.305C-59.062 17.87-24.55 7.31 127.571.316L509.364 1.8z'
        opacity='.3'
      />
      <path
        fill='url(#b)'
        d='M610.79 59.566S480.449 71.6 500.54 63.692s46.53-15.472 27.676-16.849c-18.855-1.376-130.199 0-130.199 0s29.512-4.301 19.712-5.587c-9.801-1.289 22.211-5.743 22.211-5.743L579.184 33.8s-39.691 7.34-32.831 10.535c6.86 3.194 41.404 12.797 64.437 15.228z'
        opacity='.3'
      />
      <path
        fill='url(#c)'
        d='M253.42 68.532c73.273 0 132.673-6.286 132.673-14.04 0-7.755-59.4-14.041-132.673-14.041s-132.672 6.286-132.672 14.04c0 7.755 59.399 14.041 132.672 14.041'
        opacity='.3'
      />
      <defs>
        <linearGradient
          id='a'
          x1='254.803'
          x2='254.803'
          y1='40.448'
          y2='.316'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCE2FF' />
          <stop offset='1' stopColor='#E859A3' />
        </linearGradient>
        <linearGradient
          id='b'
          x1='504.403'
          x2='504.403'
          y1='66.383'
          y2='33.803'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCE2FF' />
          <stop offset='1' stopColor='#E859A3' />
        </linearGradient>
        <linearGradient
          id='c'
          x1='253.42'
          x2='253.42'
          y1='68.532'
          y2='40.448'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCE2FF' />
          <stop offset='1' stopColor='#E859A3' />
        </linearGradient>
      </defs>
    </svg>
  ),
}
