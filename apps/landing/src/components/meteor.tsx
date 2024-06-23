import type { JSX } from 'react'

import { cn } from '@terratritium/ui'

type MeteorProps = {
  className?: string
}

export default function Meteor({ className }: MeteorProps): JSX.Element {
  return (
    <div
      className={cn(
        '-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 z-0 h-full overflow-hidden opacity-50',
        className,
      )}
    >
      <div
        className='-rotate-45 before:-mt-0.5 absolute top-[600px] left-[30%] h-px w-80 animate-[meteor_9s_linear_infinite] bg-meteor opacity-0 before:absolute before:z-0 before:h-1.5 before:w-1 before:rounded-[50%] before:bg-white/70 before:shadow-meteor'
        style={{ animationDelay: '9s' }}
      />

      <div
        className='-rotate-45 before:-mt-0.5 absolute top-[500px] left-2/4 h-px w-80 animate-[meteor_7s_linear_infinite] bg-meteor opacity-0 before:absolute before:z-0 before:h-1.5 before:w-1 before:rounded-[50%] before:bg-white/70 before:shadow-meteor'
        style={{ animationDelay: '5s' }}
      />

      <div
        className='-rotate-45 before:-mt-0.5 absolute top-[720px] left-[60%] h-px w-80 animate-[meteor_8s_linear_infinite] bg-meteor opacity-0 before:absolute before:z-0 before:h-1.5 before:w-1 before:rounded-[50%] before:bg-white/70 before:shadow-meteor'
        style={{ animationDelay: '12s' }}
      />

      <div
        className='-rotate-45 before:-mt-0.5 absolute top-[1000px] left-[80%] h-px w-80 animate-[meteor_6s_linear_infinite] bg-meteor opacity-0 before:absolute before:z-0 before:h-1.5 before:w-1 before:rounded-[50%] before:bg-white/70 before:shadow-meteor'
        style={{ animationDelay: '20s' }}
      />
    </div>
  )
}
