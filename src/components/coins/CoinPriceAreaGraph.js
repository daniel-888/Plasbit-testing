import { TinyArea } from '@ant-design/charts';
import { asNumber, getReversedFilteredArray } from '../../../api/helpers';
import React from 'react';

export const CoinPriceAreaGraph = ({ data }) => {

  return (
    <TinyArea
      syncViewPadding={true}
      smooth={true}
      autoFit={false}
      yAxis={{
        min: parseFloat(data.latest) - (parseFloat(data.latest) *
          (Math.abs(parseFloat(data.percent_change * 100)) > 10 ? 0.22 : 0.075)),
        max: parseFloat(data.latest) + (parseFloat(data.latest) *
          (Math.abs(parseFloat(data.percent_change * 100)) > 10 ? 0.22 : 0.075))
      }}
      data={
        getReversedFilteredArray(data?.prices, 50)
          ?.map((v) =>
            asNumber(parseFloat(v), parseInt(data.unit_price_scale || 5, 10))
          ) || []
      }
    />
  )
}
