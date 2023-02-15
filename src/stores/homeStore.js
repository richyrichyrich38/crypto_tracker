import axios from 'axios';
import { create } from 'zustand'

const homeStore = create((set) => ({
  fetchCoins: () => {
    axios.get('')
  }
}))

export default homeStore;