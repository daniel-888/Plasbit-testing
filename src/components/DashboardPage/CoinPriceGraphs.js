import React from 'react';
import './dashboard.css';
// import { useDataset } from '../../hooks/useDataset';
import Slider from 'react-slick';
import { Trend } from '../Trend';

const slider = [
  { coin: '', coinName: 'Neo', icon: 'slide-1.svg', date: 'Aug 13, 2021 10:00:00', price: 51.83, precent: '+2,06', volume: '$173,562,475' },
  { coin: '', coinName: 'Bitcoin', icon: 'slide-2.svg', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 46153.44, precent: '+2,06', volume: '$173,562,475' },
  { coin: '', coinName: 'Ether', icon: 'slide-3.svg', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 3213.88, precent: '+2,06', volume: '$173,562,475' },
  { coin: '', coinName: 'Litecoin', icon: 'slide-4.svg', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 175.84, precent: '+2,06', volume: '$173,562,475' },
  { coin: '', coinName: 'XRP', icon: 'slide-5.svg', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 1.02916, precent: '+2,06', volume: '$173,562,475' },
  { coin: '', coinName: 'Monero', icon: 'slide-6.svg', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 266.97, precent: '+2,06', volume: '$173,562,475' },
  { coin: '', coinName: 'Litecoin', icon: 'slide-4.svg', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 175.84, precent: '+2,06', volume: '$173,562,475' },
]

export const CoinPriceGraphs = (props) => {
  // const tickerData = useDataset();
  const sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <Slider {...sliderSettings} className="trend_slider">
      {slider.map((obj) => (
        <Trend
          key={obj.coinName}
          coin={obj.coin}
          icon={obj.icon}
          coinName={obj.coinName}
          date={obj.date}
          graphic={obj.graphic}
          price={obj.price}
          precent={obj.precent}
          volume={obj.volume}
        />
      ))}
    </Slider>
  );
};
