import axios from 'axios';
import { create } from 'zustand'


const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {

    const [graphRes, dataRes] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`),
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
    ])

   

    const graphData = graphRes.data.prices.map((price) => {
      const [timeStamp, p] = price;
      const date = new Date(timeStamp).toLocaleDateString('en-uk')
      return {
        Date: date,
        Price: p.toFixed(2),
      };
    }) 
    console.log(dataRes);
    

    set({graphData, dataRes})
    // console.log(graphRes, dataRes);
  }
}))

export default showStore