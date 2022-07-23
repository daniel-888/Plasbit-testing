import React, { useEffect } from 'react';
import { Typography } from 'antd';

const {
  Title,
  Text
} = Typography;
import './coinChart.css';
import { CoinTitle } from '../coins/CoinTitle';
import { PercentChangeText } from '../coins/PercentChangeText';
import { asNumber } from '../../../api/helpers';
import { CoinPriceAreaGraph } from '../coins/CoinPriceAreaGraph';

export const CoinChart = ({
  coinTickerData
}) => {

  return (
    <div className="coinChartContainer">
      <CoinTitle name={coinTickerData.name} base={coinTickerData.base} imageWidth="35px"/>
      <br/>
      <Text>
        {asNumber(
          parseFloat(coinTickerData.latest),
          parseInt(coinTickerData.unit_price_scale || 5, 10)
        )}
      </Text>
      <span>
        <PercentChangeText percentChange={coinTickerData.percent_change}
                           unitPriceScale={coinTickerData.unit_price_scale}/>
      </span>
      <br/>
      <div className="coinChartGraphContainer">
        <CoinPriceAreaGraph data={coinTickerData} />
      </div>
    </div>
  );
};
