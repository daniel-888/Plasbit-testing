import React from 'react'
import Slider from "react-slick";
import { Carousel } from 'antd';

import { getImg, useResize } from '../../../hook/useCustomHook'
import { Card } from '../Card'
import './First.css'

const coins = [
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
]

var sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,
    vertical: true,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export const DashboardFirst = () => {

    const { isMobile } = useResize()

    return (
        <div className="dashboard_first">
            <div className="left mb_30">
                <div className="font_30 font_bold">Dashboard</div>
                <div className="font_18 font_600">An overview of your portfolio and the crypto markets.</div>
                <Carousel autoplay speed={2000} autoplaySpeed={10000}>
                    <div>
                        <div className="banner" style={!isMobile ? { backgroundImage: `url(${getImg('dashboard/dashboard/banner_1.png')})` } : { backgroundImage: `url(${getImg('dashboard/dashboard/banner_mob.png')})` }}>
                            <div className="font_40 font_bold white">
                                Get more control over<br />
                                your Crypto Wallet &<br />
                                exchange cryptocurrencies
                            </div>
                            <button className="btn">Explore More</button>
                        </div>
                    </div>
                    <div>
                        <div className="banner" style={!isMobile ? { backgroundImage: `url(${getImg('dashboard/dashboard/banner_2.png')})` } : { backgroundImage: `url(${getImg('dashboard/dashboard/banner_mob.png')})` }}>
                            <div className="font_40 white">
                                Easily deposit crypto<br />
                                from your wallet and receive <br />
                                fiat to your bank account
                            </div>
                            <button className="btn">Explore More</button>
                        </div>
                    </div>
                    <div>
                        <div className="banner" style={!isMobile ? { backgroundImage: `url(${getImg('dashboard/dashboard/banner_3.png')})` } : { backgroundImage: `url(${getImg('dashboard/dashboard/banner_mob.png')})` }}>
                            <div className="font_40 white">
                                Reserve and manage<br />
                                your visa card<br />
                                in the cards dashboard
                            </div>
                            <button className="btn">Order card</button>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="right">
                <Slider {...sliderSettings}>
                    {coins.map((obj) => (
                        <Card
                            key={obj.coinName}
                            icon={obj.icon}
                            coinName={obj.coinName}
                            price={obj.price}
                            percent={obj.percent}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}