import { asNumber, Colors, isMobile } from '../../../api/helpers';
import React from 'react';

export const PercentChangeText = ({
  percentChange,
  unitPriceScale
}) => {
  return (
    <span style={{
      color: parseFloat(percentChange) >= 0 ? Colors.GREEN : Colors.RED
    }}>
      {asNumber(
        parseFloat(percentChange * 100),
        parseInt(unitPriceScale || 5, 10)
      )} %
    </span>
  );
};
