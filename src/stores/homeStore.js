import axios from 'axios';
import { create } from 'zustand'

const homeStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (event) => {
    set({query: event.target.value})
  },

  fetchCoins: async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

    const coins = res.data.coins.map(coin => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
        symbol: coin.item.symbol,
      }
    })
    set({coins: coins});
    console.log(coins);
  }
}))

export default homeStore;