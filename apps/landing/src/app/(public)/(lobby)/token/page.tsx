import { JSX } from 'react'

const response = await fetch('https://terra-classic-lcd.publicnode.com/cosmwasm/wasm/v1/contract/terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00/smart/eyJ0b2tlbl9pbmZvIjp7fX0=');

var supply = 0;
var circulationSupply = 0;

if (response.ok) {
  const data = await response.json();
  const initialSupply = 495000000;
  const initialCirculateSupply = 136600000;

  const totalSupply = data.data.total_supply / 1000000;
  supply = totalSupply;

  const circulatingSupply = initialCirculateSupply - (initialSupply - totalSupply);
  circulationSupply = circulatingSupply;
} else {
  throw new Error('API call error');
}

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
            <p className='font-bold text-4xl xl:text-6xl'>{supply.toLocaleString("en-EN", { maximumFractionDigits: 0 })}</p>

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
            <p className='font-bold text-4xl xl:text-6xl'>{circulationSupply.toLocaleString("en-EN", { maximumFractionDigits: 0 })}</p>

            <p className='text-muted-foreground lg:text-xl'>
              Circulating Supply
            </p>
          </div>
        </div>
      </div>

      <br/>
      <h2><b>Tritium Token ($TRIT)</b></h2>
      <br/>

      <p style={{opacity: "0.5"}}>
        Tritium ($TRIT) is the official in-game currency of Terra Tritium,
        designed to power the entire game ecosystem. Players can earn, trade,
        and spend $TRIT within the game for purchasing resources, upgrading
        equipment, and unlocking exclusive features. As a utility token, $TRIT
        offers players seamless interactions within the world of Terra Tritium,
        creating a dynamic economy driven by user engagement and strategy.
      </p>

      <br/>

      <p style={{opacity: "0.5"}}>
        Beyond its role in-game, $TRIT can also be traded on external platforms
        like Coinhall, allowing players to explore further trading opportunities
        and investment strategies. The value of $TRIT evolves with the
        community, reflecting both in-game activity and broader market
        movements.
      </p>

      <br/>

      <h2><b>$TRIT usage in Tritium Bridge</b></h2>

      <br/>

      <p style={{opacity: "0.5"}}>
        The Tritium Bridge is a dedicated platform that enables the easy and
        secure transfer of $TRIT between Terra Tritium and external wallets or
        exchanges. It allows users to seamlessly move tokens between in-game
        balances and personal wallets, ensuring that the in-game economy stays
        interconnected with the larger blockchain ecosystem.
      </p>

      <br/>

      <p style={{opacity: "0.5"}}>
        Whether you're looking to stake your tokens, transfer them for trading,
        or reinvest in the game, the Tritium Bridge offers a smooth and
        efficient pathway. With its user-friendly interface and strong security
        protocols, managing your $TRIT tokens has never been easier.
      </p>
    </div>
  )
}
