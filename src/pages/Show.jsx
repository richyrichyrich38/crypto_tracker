import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function Show() {
  const store = showStore()
  const params = useParams()


  React.useEffect(() => {
    // console.log(params);
    store.fetchData(params.id)
  }, []);

  // if(!store.data) return <></>

  return (
    <div>
      {store.dataRes&&(
        <header>
        <img src={store.dataRes.data.image.large} />
        <h2>
          {store.dataRes.data.name} ({store.dataRes.data.symbol})
        </h2>
      </header>
      )}
      <AreaChart
          width={500}
          height={400}
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      {store.dataRes&&(
        <div>
          <h4>Market Cap Rank</h4>
          <span>{store.dataRes.data.market_cap_rank}</span>
        </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>Current Price</h4>
            <span>${store.dataRes.data.market_data.current_price.usd.toFixed(3)}</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>Description</h4>
            <span>{store.dataRes.data.description.en}</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>24h Percentage Price Change</h4>
            <span>{store.dataRes.data.market_data.price_change_percentage_24h.toFixed(2)}%</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>24h Price Change USD</h4>
            <span>${store.dataRes.data.market_data.price_change_24h_in_currency.usd.toFixed(3)}</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>24h Low</h4>
            <span>${store.dataRes.data.market_data.low_24h.usd.toFixed(3)}</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>24h High</h4>
            <span>${store.dataRes.data.market_data.high_24h.usd.toFixed(3)}</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>Circulating Supply</h4>
            <span>{store.dataRes.data.market_data.circulating_supply.toFixed(0)} tokens</span>
          </div>
      )}
      {store.dataRes&&(
          <div>
            <h4>1y Percentage Change</h4>
            <span>
              {store.dataRes.data.market_data.price_change_percentage_1y.toFixed(2)}%
            </span>
          </div>
      )}

        
      
    </div>
  )
}

export default Show