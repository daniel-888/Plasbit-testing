import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PriceFirst } from '../components/price/PriceFirst';
import { PriceSecond } from '../components/price/PriceSecond';
// import { PriceThird } from '../components/price/PriceThird';

export const Price = () => {

    const [prices, setPrices] = useState()
    const getCoinPrices = () => {
        // axios.get('https://coinbase.com/api/v2/assets/summary?include_prices=true&resolution=day&filter=listed&base=USD')
        axios.get('https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=day&sort=rank')
            .then((response) => {
                const data = response && response.data && response.data.data;
                const dataSet = data.map((obj, index) => ({
                    ...obj,
                    no: index + 1
                }))
                setPrices(dataSet)
            });
    }

    useEffect(() => {
        getCoinPrices()
        // const interval = setInterval(getCoinPrices, 1000)
        // return () => clearInterval(interval)
    }, [])

    console.log('prices', prices)

    return (
        <div className="App">
            <Header />
            <main>
                <PriceFirst prices={prices} />
                <PriceSecond prices={prices} />
                {/* <PriceThird /> */}
                {/* <PriceFourth /> */}
            </main>
            <Footer />
        </div>
    );
}