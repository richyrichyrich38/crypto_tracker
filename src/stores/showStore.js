import axios from 'axios';
import { create } from 'zustand'

const showStore = create((set) => ({
  fetchData: (id) => {
    console.log('hello', id);
  }
}))

export default showStore