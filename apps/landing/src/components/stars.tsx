import type { JSX } from 'react'

import { cn } from '@acme/ui'

const stars = [
  { className: 'bg-orange-800', style: { top: 443, left: 299 } },
  { className: 'bg-purple-900', style: { top: 471, right: 183 } },
  { className: 'bg-purple-700', style: { top: 461, left: 210 } },
  { className: 'bg-purple-700', style: { top: 199, right: 270 } },
  { className: 'bg-orange-800', style: { top: 108, left: 218 } },
  { className: 'bg-purple-900', style: { top: 395, right: 14 } },
  { className: 'bg-purple-900', style: { top: 310, left: 379 } },
  { className: 'bg-purple-700', style: { top: 437, right: 349 } },
  { className: 'bg-white', style: { top: 504, left: 267 } },
  { className: 'bg-orange-800', style: { top: 390, right: 104 } },
  { className: 'bg-orange-800', style: { top: 398, left: 26 } },
  { className: 'bg-purple-900', style: { top: 464, right: 358 } },
  { className: 'bg-purple-700', style: { top: 167, left: 287 } },
  { className: 'bg-orange-800', style: { top: 515, right: 221 } },
  { className: 'bg-purple-900', style: { top: 405, left: 48 } },
  { className: 'bg-purple-900', style: { top: 179, right: 299 } },
  { className: 'bg-white', style: { top: 276, left: 226 } },
  { className: 'bg-purple-900', style: { top: 70, right: 125 } },
  { className: 'bg-purple-900', style: { top: 106, left: 273 } },
  { className: 'bg-orange-800', style: { top: 245, right: 172 } },
  { className: 'bg-purple-900', style: { top: 164, left: 398 } },
  { className: 'bg-orange-800', style: { top: 217, right: 81 } },
  { className: 'bg-orange-800', style: { top: 555, left: 341 } },
  { className: 'bg-purple-700', style: { top: 141, right: 115 } },
  { className: 'bg-orange-800', style: { top: 402, left: 397 } },
  { className: 'bg-orange-800', style: { top: 215, right: 2 } },
  { className: 'bg-orange-800', style: { top: 42, left: 165 } },
  { className: 'bg-purple-900', style: { top: 299, right: 151 } },
  { className: 'bg-white', style: { top: 51, left: 257 } },
  { className: 'bg-purple-900', style: { top: 434, right: 389 } },
  { className: 'bg-purple-900', style: { top: 550, left: 203 } },
  { className: 'bg-purple-700', style: { top: 181, right: 374 } },
  { className: 'bg-purple-900', style: { top: 150, left: 228 } },
  { className: 'bg-white', style: { top: 224, right: 244 } },
  { className: 'bg-purple-900', style: { top: 369, left: 103 } },
  { className: 'bg-purple-700', style: { top: 312, right: 220 } },
  { className: 'bg-orange-800', style: { top: 231, left: 270 } },
  { className: 'bg-orange-800', style: { top: 549, right: 346 } },
  { className: 'bg-purple-900', style: { top: 244, left: 339 } },
  { className: 'bg-white', style: { top: 450, right: 141 } },
]

export default function Stars(): JSX.Element {
  return (
    <>
      {stars.map(({ className, style }, index) => (
        <div
          className={cn('absolute h-0.5 w-0.5 rounded-full', className)}
          // biome-ignore lint/suspicious/noArrayIndexKey: This is a static list
          key={index}
          role='presentation'
          style={style}
        />
      ))}
    </>
  )
}
