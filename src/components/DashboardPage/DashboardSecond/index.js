import React from 'react';

import { getImg, useResize } from '../../../hook/useCustomHook';
import './Second.css';
import { RePieChart } from '../RePieChart'

const coins = [
    { coinName: 'BTC', icon: 'slide-1.svg', amount: "0.1123523422342 BTC", price: 6032.83, percent: 0 },
    { coinName: 'ETH', icon: 'slide-2.svg', amount: "2.21242342342 ETH", price: 8613.44, percent: 0 },
    { coinName: 'ADA', icon: 'slide-2.svg', amount: "1000.624234732 ADA", price: 230.44, percent: 0 },
    { coinName: 'LTC', icon: 'slide-1.svg', amount: "50.2301231241241234124120 LTC", price: 100.83, percent: 0 },
    { coinName: 'USDC', icon: 'slide-1.svg', amount: "100000.0000 USDC", price: 1000.00, percent: 0 }
]

export const DashboardSecond = () => {

    const { isMobile } = useResize()
    return (
        <div className="dashboard_second mt_20">
            <div className="wallet">
                <div className="font_25 font_bold light_blue mb_20 text_center">My Wallet</div>
                {coins.map((coin, index) => (
                    <div className="row" key={index}>
                        <div className="coin">
                            <img src={getImg(coin.icon)} alt="icon" />
                            <div className="font_20 font_600 ml_10">{coin.coinName}</div>
                        </div>
                        {!isMobile && <>
                            <div className="font_20 font_bold amount">{parseFloat(coin.amount).toFixed(8).slice(0, 11)}</div>
                            <div className="font_20 font_bold price">${coin.price}</div>
                        </>}
                        {isMobile && <div >
                            <div className="font_20 font_bold amount">{parseFloat(coin.amount).toFixed(8).slice(0, 11)}</div>
                            <div className="font_20 font_bold price">${coin.price}</div>
                        </div>}
                    </div>
                ))}
            </div>
            <div className="chart">
                {!isMobile && <div className="font_25 font_bold light_blue mb_20 text_center">Asset Allocation</div>}
                <div className="pie_chart mt_50">
                    <RePieChart coins={coins} />
                </div>
            </div>
        </div>
    )
}