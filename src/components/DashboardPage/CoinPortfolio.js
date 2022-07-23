import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Addresses } from '../../../api/btc/btcMethods';
import { List, Spin, Typography } from 'antd';
import { CoinPortfolioItem } from './CoinPortfolioItem';
import { Definition } from '../../../api/definition/definition';

const {Text} = Typography;

export const CoinPortfolio = () => {
  const [totalUsd, setTotalUsd] = useState(0);

  const {
    addresses,
    isReady,
    definition
  } = useTracker(() => {
    const subscriptions = [
      Meteor.subscribe('addresses.getAll'),
      Meteor.subscribe('definition'),
    ];
    return {
      addresses: Addresses.find().fetch(),
      isReady: subscriptions.filter(s => !s.ready()).length === 0,
      definition: Definition.findOne()
    };
  }, []);

  const calculateAddressUsdValue = (address) => {
    if (!(isReady && definition && definition.coins) ) {
      return 0;
    }

    return definition.coins[address.coin]?.rate * address.systemAmount || 0;
  };

  useEffect(() => {
    if (!(isReady && addresses && definition)) {
      return;
    }

    let totalUsd = 0;
    addresses.forEach(address => {
      totalUsd += calculateAddressUsdValue(address);
    })

    setTotalUsd(totalUsd)
  }, [isReady, addresses, definition]);

  if (!isReady) {
    return (
      <>
        <Spin/>
      </>
    );
  }
  return (
    <>
      <List bordered>
        {addresses.map((address, i) =>
          <List.Item key={i}>
            <CoinPortfolioItem address={address}
                               ratioFromTotal={calculateAddressUsdValue(address) / totalUsd}
                               usd={calculateAddressUsdValue(address)}
            />
          </List.Item>
        )}
        <List.Item>
          <Text strong>Total Balance {totalUsd.toFixed(2)}$</Text>
        </List.Item>
      </List>
    </>
  );
};
