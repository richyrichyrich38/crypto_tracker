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
            <Link to={`/${coin.id}`}>
              {coin.name}
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Home