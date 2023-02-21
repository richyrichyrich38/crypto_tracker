import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function Show() {
  const store = showStore()
  const params = useParams()


  React.useEffect(() => {
    console.log(params);
    store.fetchData(params.id)
  }, []);

  if (!store.data) return <></>

  return (
    <div>
      <header>
        <img src={store.data.image.large} />
        <h2>
          {store.data.name} ({store.data.symbol})
        </h2>
      </header>
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

    </div>
  )
}

export default Show;