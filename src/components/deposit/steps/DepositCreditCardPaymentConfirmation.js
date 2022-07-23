import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Divider,
  Input,
  message,
  Space,
  Statistic,
  Tooltip,
  Typography
} from 'antd';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import WarningOutlined from '@ant-design/icons/WarningOutlined';
import { WalletSelect } from '../../WalletSelect';
import { PaymentConfirmation } from '../../PaymentConfirmation';
import { Maintenance } from './../../../components/Maintenance';
import { asNumber, calculateTotals, getQrAddress, copyToClipboard } from '../../../../api/helpers';

import './Cardpay.css';

const { Title, Text, Link } = Typography;
const { Countdown } = Statistic;

const copyClip = (text) => {
  copyToClipboard(text);
  message.success('Copied to clipboard');
};

export const DepositCreditCardPaymentConfirmation = (props) => {
    const [loading, setLoading] = useState(false);
    const [paymentConfirmation, setPaymentConfirmation] = useState();
    const [paymentConfirmationCrypto, setPaymentConfirmationCrypto] = useState();
    const [isMaintence, setIsMaintence] = useState(false);

    const [until, setUntil] = useState();

    const { rate, fee, type, amountFiat, amountCrypto, coinAddress, coinUri, coin, } = props.depositData;
    const qrAddress = coinUri || getQrAddress(coin, coinAddress, amountCrypto);
    const titleLevel = 5;
    let currentDate = new Date();
    const totals = calculateTotals(amountFiat, true, fee, rate) || {};
    props.depositData.amountCrypto = totals?.amountCrypto || 0;
    // console.log(totals);

    useEffect(() => {
      setUntil(Date.now() + (1000 * 60 * 15));
    }, []);

    const onFinish = () => {
      message.error('Request timed out');
      props.onCancel();
    };

    const getPanel = (title, comp) => {
      return <div style={{ display: 'flex' }}>
        <Title style={{ width: '175px' }} level={5}>{title}</Title>
        {comp}
      </div>;
    };

    const handleConfirmation = () => {
      setPaymentConfirmation({
        expirationDate: new Date(currentDate.getTime() + 15 * 60000),
        title: 'Credit card charge',
        coinAddress: props.depositData?.coinAddress || '',
        coin: props.depositData?.coin,
        amountCrypto: asNumber(props.inputDeposit / rate),
        amountFiat: props.inputDeposit,
        fee: (
          asNumber((fee * props.inputDeposit) /
            100 / rate)
        ),
      });
    };

    if(isMaintence) {
      return (<Maintenance />)
    }
    else {
      if (paymentConfirmationCrypto) {
        return(
          <></>
        );
        //return (<DepositCryptoConfirmation {...props}/>);

      } else if (paymentConfirmation) {
        return (
          <PaymentConfirmation  {...paymentConfirmation}
                                onCancel={() =>
                                  setPaymentConfirmation(false)
                                }
                                onConfirm={() =>
                                  window.open(
                                    'https://dashboard.cardpayz.com/pay?code=HF5557',
                                    '_blank'
                                  )
                                }
                                onTimeout={() => setPaymentConfirmation(false)}/>
        );
      } else if (props?.depositData?.type === 'fiat') {
        return (
          <>
            <div className="font_30 font_bold"><T>depositConfirmation.creditCard.title</T></div>
            <Space>
              <Space direction="vertical">
                <Title level={titleLevel}>
                  <T>depositConfirmation.creditCard.toWallet</T>
                </Title>
                <Title level={titleLevel}>
                  <T>depositConfirmation.creditCard.amount</T>
                </Title>
                <Title level={titleLevel}>
                  <T>depositConfirmation.creditCard.fee</T>
                </Title>
                <Title level={titleLevel}>
                  <T>depositConfirmation.creditCard.credit</T>
                </Title>
              </Space>
              <Space direction="vertical" style={{ marginLeft: '20%' }}>
                <WalletSelect/>
                <Title level={titleLevel}>{totals.amountFiat} USD</Title>
                <Title level={titleLevel}>
                  {totals.feeFiat} USD
                </Title>
                <Title level={titleLevel}>
                  {totals.amountCrypto} BTC
                </Title>
              </Space>
            </Space>
            <Title level={titleLevel} style={{ marginBottom: '30px' }}>
              <T>depositConfirmation.creditCard.rules.title</T>
            </Title>

            <p>
              <T>depositConfirmation.creditCard.rules.rules.0</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.rules.rules.1</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.rules.rules.2</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.rules.rules.3</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.rules.rules.4</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.rules.rules.5</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.rules.rules.6</T>
            </p>
            <Divider/>
            <Title level={titleLevel}>
              <T>depositConfirmation.creditCard.verification.title</T>
            </Title>

            <p>
              <T>depositConfirmation.creditCard.verification.text.0</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.verification.text.1</T>
            </p>

            <Divider/>
            <Title level={titleLevel}>
              <T>depositConfirmation.creditCard.howWork.title</T>
            </Title>

            <p>
              <T>depositConfirmation.creditCard.howWork.text.0</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.howWork.text.1</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.howWork.text.1</T>
            </p>

            <Divider/>
            <Title level={titleLevel}>
              <T>depositConfirmation.creditCard.whatNeed.title</T>
            </Title>

            <p>
              <T>depositConfirmation.creditCard.whatNeed.text.0</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.whatNeed.text.1</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.whatNeed.text.2</T>
            </p>

            <Divider/>
            <Title level={titleLevel}>
              <T>depositConfirmation.creditCard.steps.title</T>
            </Title>

            <p>
              <T>depositConfirmation.creditCard.steps.text.0</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.steps.text.1</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.steps.text.2</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.steps.text.3</T>
            </p>

            <Divider/>
            <Title level={titleLevel}>
              <T>depositConfirmation.creditCard.ifDont.title</T>
            </Title>

            <p>
              <T>depositConfirmation.creditCard.ifDont.text.0</T>
            </p>
            <p>
              <T>depositConfirmation.creditCard.ifDont.text.1</T>
            </p>

            <Alert
              icon={<WarningOutlined/>}
              message={<T>depositConfirmation.creditCard.alert.0</T>}
              description={<T>depositConfirmation.creditCard.alert.1</T>}
              type="error"
              showIcon
            />
            <Space
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5%',
              }}
            >
              <Button value="large" type="link" onClick={() => props.onCancel()}>
                <ArrowLeftOutlined/>
                <T>depositConfirmation.creditCard.buttons.0</T>
              </Button>
              <Button
                value="large"
                type="primary"
                // onClick={() => handleConfirmation()}
                onClick={() => setIsMaintence(true)}

              >
                <T>depositConfirmation.creditCard.buttons.1</T>
              </Button>
            </Space>
          </>
        );
      } else if (type === 'crypto') {
        return (
          // <>
          //   <Title level={2} style={{ marginTop: '2%' }}>
          //     <T>depositConfirmation.creditCard.title</T>
          //   </Title>
          //   <Space direction="vertical">
          //     {getPanel('To Wallet', <WalletSelect/>)}
          //     {getPanel('Amount of Transfer', <Text>{totals.amountCrypto} BTC</Text>)}
          //     {getPanel('Fee', <Text>{totals.feeCrypto} BTC</Text>)}
          //     {getPanel('Value in USD', <Text>{totals.amountFiat} USD</Text>)}
          //     <div style={{ display: 'flex' }}>
          //       <Button value="large" type="link" onClick={() => props.onCancel()}>
          //         <ArrowLeftOutlined/>
          //         <T>depositConfirmation.creditCard.buttons.0</T>
          //       </Button>
          //       <Button
          //         value="large"
          //         type="primary"
          //         onClick={() => setPaymentConfirmationCrypto(true)}
          //       >
          //         <T>depositConfirmation.creditCard.buttons.1</T>
          //       </Button>
          //     </div>
          //   </Space>
          // </>
          <div className="card_pay">
          <div className="font_30 font_bold"><T>deposits.btc.title</T></div>
          <div className="description">
              <div className="font_15 mb_10 font_600"><T>deposits.btc.text.0</T><span className='red'>{totals.amountCrypto}</span><T>deposits.btc.text.2</T></div>
              <div className="font_15 mb_10 font_600"><T>deposits.btc.text.3</T><span className='red'>{totals.amountFiat}</span><T>deposits.btc.text.5</T></div>
              <div className="font_15 mb_10 font_600"><T>deposits.btc.text.6</T></div>
              <div className="font_15 mb_10 font_600"><T>deposits.btc.text.7</T></div>
              <div className="font_15 mb_10 font_600"><T>deposits.btc.text.8</T></div>
              <div className="font_15 mb_10 font_600"><T>deposits.btc.text.9</T></div>
            </div>
            <div className="deposit_infoes mt_30 d_flex">
                <div className="transfer_fields">
                    <div className="deposit_info mb_10">
                        <label className="font_18 font_600">
                            To Address
                        </label>
                        <div>
                            <Input.Group compact>
                                <Input
                                    defaultValue={coinAddress}
                                    style={{width: '226px'}}
                                    disabled={true}
                                />
                                <Tooltip title="copy address"
                                  onClick={() => copyClip(coinAddress)}
                                >
                                  <Button icon={<CopyOutlined />} />
                                </Tooltip>
                            </Input.Group>
                        </div>
                    </div>
                    <div className="deposit_info mb_10">
                        <label className="font_18 font_600">
                            Amount of Transfer
                        </label>
                        <div className="">
                            <Input.Group compact>
                                <Input
                                    defaultValue={totals.amountCrypto}
                                    disabled={true}
                                />
                            </Input.Group>
                        </div>
                    </div>
                    <div className="deposit_info mb_10">
                        <label className="font_18 font_600">
                            To Wallet
                        </label>
                        <div className="">
                          <Input.Group compact>
                            <WalletSelect disabled={true}/>
                          </Input.Group>
                        </div>
                    </div>
                    <div className="deposit_info mb_10">
                        <label className="font_18 font_600">
                            Amount in USD
                        </label>
                        <div className="">
                            <Input.Group compact>
                                <Input
                                    defaultValue={totals.amountFiat}
                                    disabled={true}
                                />
                            </Input.Group>
                        </div>
                    </div>
                </div>
                <div className='transfer_qr'>
                  <QRCode value={qrAddress} size={140}/>
                </div>
            </div>
            <Countdown value={until} format="mm:ss" onFinish={onFinish} className="deposit_infoes"></Countdown>
            <div className="mt_30 deposit_infoes">
              <Button value="large" type="link" onClick={() => props.onCancel()} style={{paddingLeft: 0}}>
                <ArrowLeftOutlined/>
                Go Back
              </Button>
            </div>
            <div className="deposit_infoes">
              <Button className="mt_20" style={{ textTransform: 'uppercase' }} type="primary" onClick={() => props.onCancel()}>I Have Paid</Button>
            </div>

          </div>
        );
      } else if (props?.depositData?.type === 'maintence'){
        return (<Maintenance />)
      }
    }


  }
;
