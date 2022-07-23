import React from "react";
import { Progress, Typography } from 'antd';
import { CoinTitle } from '../coins/CoinTitle';
import { CoinColors } from '../../../api/btc/btcMethods';

const {Text} = Typography;
export const CoinPortfolioItem = ({address, ratioFromTotal, usd}) => {
  return (
    <>
      <div className="portfolioColumn portfolioCoinName">
        <CoinTitle name="" base={address.coin} imageWidth="30px"/>
      </div>
      <div className="portfolioColumn portfolioRatioBar">
        <Progress percent={ratioFromTotal * 100} size="small" strokeColor={CoinColors[address.coin]}
                  trailColor={"transparent"}
                  format={percent => percent.toFixed(0) + '%'}/>
      </div>
      <Text className="portfolioColumn portfolioCoinAmount">{address.systemAmount} {address.coin}</Text>
      <Text type="secondary" className="portfolioColumn portfolioCoinAmountInUsd">{usd.toFixed(2)}$</Text>
    </>
  )
}
