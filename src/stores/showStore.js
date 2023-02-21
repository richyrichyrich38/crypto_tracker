import axios from 'axios';
import { create } from 'zustand'


const showStore = create(set => {
    return (
        {
            graphData: [],

            fetchData: async (id) => {
                // this is the revert point
                const [graphRes, dataRes] = await Promise.all([
                    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90`),
                    axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
                ])

                const graphData = graphRes.data.prices.map((price) => {
                    const [timeStamp, p] = price;
                    const date = new Date(timeStamp).toLocaleDateString('en-uk')
                    return {
                        Date: date,
                        Price: p,
                    };
                })

                set({ graphData: graphData })
                console.log('showStore data: ', dataRes);
            }
        })
})

export default showStore