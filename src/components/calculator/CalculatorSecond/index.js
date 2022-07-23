
import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Second.css'
import { useResize } from '../../../hook/useCustomHook'
import { Chart } from './Chart'

export const CalculatorSecond = () => {

    const { isMobile } = useResize()
    const [day, setDay] = useState(1)

    const [priceHistory, setPriceHistory] = useState([]);
    const [btcPriceData, setBtcPriceData] = useState(0);
    const baseURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${day}`;
    const baseURL1 = "https://api.coingecko.com/api/v3/coins/bitcoin";

    useEffect(() => {
        // axios.get(baseURL).then((response) => {
        //     const data = response.data;
        //     let prices = [];
        //     prices = data?.prices?.map((item) => ({
        //         date: formatDate(item[0]),
        //         price: item[1].toFixed(2)
        //     }))
        //     setPriceHistory(prices);
        // });

        // axios.get(baseURL1).then((response) => {
        //     const data = response.data.market_data;
        //     setBtcPriceData(data);
        // })

    }, [day]);

    const formatDate = (e) => {
        const dates = new Date(e);
        const year = dates.getFullYear();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[dates.getMonth()];
        const date = dates.getDate();
        const hour = dates.getHours();
        const minute = "0" + dates.getMinutes();
        const second = "0" + dates.getSeconds();

        const formattedDate = date + ' ' + month + ' ' + year;
        const formattedTime = hour + ':' + minute.substr(-2) + ':' + second.substr(-2);

        if (day == 1) return formattedTime;
        return formattedDate;
    }

    const formatPrice = (price) => {
        // const formatConfig = new Intl.NumberFormat("en-US", {
        //     style: "currency",
        //     currency: "USD",
        //     minimumFractionDigits: 2
        // });

        // return formatConfig.format(price);

        return price + "USD";
    };

    const formatPlusMinus = (priceChange) => {
        const isPositive = Math.sign(priceChange) >= 0;

        return (
            <span className={`${isPositive ? "positive" : "negative"}`}>
                {/* {`${isPositive ? "&#9650;" : "&#9660;"}${priceChange.toFixed(2)}%`} */}
                {priceChange?.toFixed(2)}%
            </span>
        );
    };

    return (
        <section className="calculator_second container">
            <div className="title text_center">
                Current <span>Bitcoin Price</span> {isMobile && <br />} in USD <span className="text">(US Dollar)</span>
            </div>
            <div className="sub_title">
                <span className="text">{formatPrice(btcPriceData?.current_price?.usd)} </span>
                <span className="text percent">{formatPlusMinus(btcPriceData?.price_change_percentage_24h)}</span>
            </div>
            <div className="chart">
                <div className="chart_title">
                    <div className="help_title">Bitcoin Price History</div>
                    {!isMobile && <div className="time">
                        <span className={`text ${day == 1 ? "active" : ""}`} onClick={() => setDay(1)}>24h</span>
                        <span className={`text ${day == 7 ? "active" : ""}`} onClick={() => setDay(7)}>1w</span>
                        <span className={`text ${day == 30 ? "active" : ""}`} onClick={() => setDay(30)}>1m</span>
                        <span className={`text ${day == 365 ? "active" : ""}`} onClick={() => setDay(365)}>1y</span>
                    </div>}
                    {isMobile && <><select className="text time">
                        <option>24h</option>
                        <option>1w</option>
                        <option>1m</option>
                        <option>1y</option>
                    </select>
                        <i className="arrow right" /></>}
                </div>
                <Chart priceHistory={priceHistory} />
            </div>
        </section>
    )
}