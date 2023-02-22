import React from 'react'
import homeStore from '../stores/homeStore'
import { Link } from 'react-router-dom'

function Home() {
  const store = homeStore()

  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <>
      <input type='text' value={store.query} onChange={store.setQuery}/>
      {store.coins.map(coin => {
        return (
          <div key={coin.id}>
            {coin.capRank}
            <Link style={{textDecoration: 'none'}} to={`/${coin.id}`}>
            <img src={coin.image} /> {`   (${coin.name})`} 
              
            </Link>
            {`   (${coin.symbol})`}
          </div>
        )
      })}
    </>
  )
}

export default Home