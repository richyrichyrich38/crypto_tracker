import axios from 'axios';
import { create } from 'zustand'
import debounce from '../helpers/debounce';

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: '',

  setQuery: (event) => {
    set({query: event.target.value})
    homeStore.getState().searchCoins()
  },

  searchCoins: debounce( async () => {
    const {query, trending} = homeStore.getState()
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)

    if (query.length > 2) {

    const coins = res.data.coins.map(coin => {
      return {
        name: coin.name,
        image: coin.thumb,
        id: coin.id,
        capRank: coin.market_cap_rank,
        // priceBtc: coin.item.price_btc,
        symbol: coin.symbol,

      }
    })
// console.log(res.data);
set({coins, trending: coins})
  } else {
    set({coins: trending})
  }

  }, 500),

  fetchCoins: async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

    const coins = res.data.coins.map(coin => {
      return {
        name: coin.item.name,
        image: coin.item.thumb,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
        symbol: coin.item.symbol,
        // capRank: coin.item.market_cap_rank
      }
    })
    set({coins: coins});
    // console.log(res);
  }
}))

export default homeStore;