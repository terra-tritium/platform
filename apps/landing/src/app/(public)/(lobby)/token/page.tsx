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

      <h2>Tritium Token ($TRIT)</h2>

      <p>
        Tritium ($TRIT) is the official in-game currency of Terra Tritium,
        designed to power the entire game ecosystem. Players can earn, trade,
        and spend $TRIT within the game for purchasing resources, upgrading
        equipment, and unlocking exclusive features. As a utility token, $TRIT
        offers players seamless interactions within the world of Terra Tritium,
        creating a dynamic economy driven by user engagement and strategy.
      </p>

      <p>
        Beyond its role in-game, $TRIT can also be traded on external platforms
        like Coinhall, allowing players to explore further trading opportunities
        and investment strategies. The value of $TRIT evolves with the
        community, reflecting both in-game activity and broader market
        movements.
      </p>

      <h2>$TRIT usage in Tritium Bridge</h2>

      <p>
        The Tritium Bridge is a dedicated platform that enables the easy and
        secure transfer of $TRIT between Terra Tritium and external wallets or
        exchanges. It allows users to seamlessly move tokens between in-game
        balances and personal wallets, ensuring that the in-game economy stays
        interconnected with the larger blockchain ecosystem.
      </p>

      <p>
        Whether you're looking to stake your tokens, transfer them for trading,
        or reinvest in the game, the Tritium Bridge offers a smooth and
        efficient pathway. With its user-friendly interface and strong security
        protocols, managing your $TRIT tokens has never been easier.
      </p>
    </div>
  )
}
