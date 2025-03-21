import type { JSX } from 'react'

export default function TokenPage(): JSX.Element {
  return (
    <div className='container'>
      <div className='flex justify-between'>
        <h2 className='font-bold uppercase leading-none tracking-tighter'>
          <span
            className='block text-6xl text-transparent'
            style={{ WebkitTextStroke: '1px white' }}
          >
            Our
          </span>
          <span className='text-7xl'>Supply</span>
        </h2>

        <div className='flex items-center space-x-4 lg:space-x-16 sm:space-x-8'>
          <div className='space-y-2'>
            <p className='font-bold text-4xl xl:text-6xl'>481,435,699</p>

            <p className='text-muted-foreground lg:text-xl'>Total Supply</p>
          </div>

          <svg
            className='h-auto w-4 text-muted-foreground'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 16 81'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Divider</title>
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 56)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 21)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 49)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 14)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 42)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 7)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 70)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 35)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 0)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 63)'
            />
            <line
              y1='-0.5'
              x2='18.0278'
              y2='-0.5'
              transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 28)'
            />
          </svg>

          <div className='space-y-2'>
            <p className='font-bold text-4xl xl:text-6xl'>108,593,579</p>

            <p className='text-muted-foreground lg:text-xl'>
              Circulating Supply
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
