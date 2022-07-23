import React, { useEffect, useState } from 'react';
import { Button, message, Space, Statistic, Typography } from 'antd';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import i18n from 'meteor/universe:i18n';
import QRCode from 'qrcode.react';
import { Colors, getQrAddress, isMobile } from '../../../../api/helpers';

const { Countdown } = Statistic;

const { Title, Text } = Typography;
const T = i18n.createComponent();

export const DepositCryptoConfirmation = (props) => {
  const [loading, setLoading] = useState(false);
  const [until, setUntil] = useState();
  const { rate, fee, type, amountCrypto, coinAddress, coinUri, coin, amountFiat } = props.depositData;
  const qrAddress = coinUri || getQrAddress(coin, coinAddress, amountCrypto);

  useEffect(() => {
    setUntil(Date.now() + (1000 * 60 * 15));
  }, []);

  const onFinish = () => {
    message.error('Request timed out');
    props.onCancel();
  };

  return (
    <>
      <div style={{
        display: 'flex',
        width: isMobile() ? '100%' : '50%'
      }}>
        <QRCode value={qrAddress}/>
        <Space direction="vertical" style={{
          width: '100%',
          textAlign: 'right'
        }}>
          <Text>{amountCrypto} BTC</Text>
          <Text style={{ color: Colors.GRAY }}>{amountFiat} USD</Text>
          <br/>
          <Text>{coinAddress}</Text>
          <Countdown value={until} format="mm:ss" onFinish={onFinish}></Countdown>
        </Space>
      </div>
      <div style={{ display: 'flex' }}>
        <Button value="large" type="link" onClick={() => props.onCancel()}>
          <ArrowLeftOutlined/>
          Go Back
        </Button>
        <Button style={{ textTransform: 'uppercase' }} type="primary"
                onClick={() => props.onCancel()}>I Have Paid</Button>
      </div>
    </>
  );
};
