import axios from 'axios';
import { create } from 'zustand'


const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=120`);

    const graphData = res.data.prices.map(price => {
      const [timeStamp, p] = price;
      const date = new Date(timeStamp).toLocaleDateString('en-uk')

      return {
        Date: timeStamp,
        Price: p,
        
      };
      
    })

    set({graphData: graphData})
    console.log(res.data);
  }
}))

export default showStore