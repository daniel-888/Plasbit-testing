
import React from 'react'
import Slider from "react-slick";

import { Card } from '../Card'
import './First.css'

const coins = [
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
]

var sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export const PriceFirst = (props) => {

    return (
        <section className="price_first">
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
        </section>
    )
}