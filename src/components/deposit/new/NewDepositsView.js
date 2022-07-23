import React, { useState } from 'react';
import { Button, Divider, Image, Input, Radio, Select, Space, Table, Typography, } from 'antd';
// import { DepositCreditCardPaymentConfirmation } from '../steps/DepositCreditCardPaymentConfirmation';
import WarningOutlined from '@ant-design/icons/WarningOutlined';
import { asNumber, isMobile } from '../../../hook/useCustomHook';
import { CardAccordion } from './CardAccordion'

const { Title } = Typography;
const { Option } = Select;
const icon = <WarningOutlined size="large" />;

const agents = {
  1: {
    firstName: "toFill_firstName",
    lastName: "toFill_firstName",
    country: "toFill_country",
    city: "toFill_city",
    zip: "toFill_zip",
    fee: "toFill_fee",
  },
  2: {
    firstName: "toFill_firstName",
    lastName: "toFill_firstName",
    country: "toFill_country",
    city: "toFill_city",
    zip: "toFill_zip",
    fee: "toFill_fee",
  },
  3: {
    firstName: "toFill_firstName",
    lastName: "toFill_firstName",
    country: "toFill_country",
    city: "toFill_city",
    zip: "toFill_zip",
    fee: "toFill_fee",
  },
};

export const NewDepositsView = () => {
  const [inputDeposit, setInputDeposit] = useState();
  const [value, setValue] = useState(1);
  const [agent, setAgent] = useState(agents[1]);
  const [depositData, setDepositData] = useState();

  const fee = 3.5;

  const onChange = (e) => {
    setAgent(agents[e.target.value]);
    setValue(e.target.value);
  };

  const inputValidation = (inputDeposit) => asNumber(inputDeposit);
  const checkNegative = (expression) =>
    expression <= 0 ? asNumber(0, 2) : asNumber(expression, 2);

  const dataSource = [
    {
      key: "1",
      img: `dashboard/deposit/icon.png`,
      name: "VISA",
      fee,
      completion: "completion",
    },
    {
      key: "2",
      img: `dashboard/deposit/icon.png`,
      name: "MasterCard",
      fee,
      completion: "completion",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img
          alt={img}
          src={img}
          style={{
            width: "50px",
            height: "25px",
          }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fee%",
      dataIndex: "fee",
      key: "feePercent",
      render: (fee) => <p color="light blue">{fee.toFixed(2)} %</p>,
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => (
        <> {checkNegative((fee * inputValidation(inputDeposit || 0)) / 100)} USD</>
      ),
    },
    {
      title: "Completion",
      dataIndex: "completion",
      key: "completion",
      render: (completion) => (
        <>
          <a>{completion}</a>
        </>
      ),
    },
    {
      title: "You spend",
      dataIndex: "fee",
      key: "spend",
      render: (fee) => (
        <>
          {" "}
          {checkNegative(
            (fee * inputValidation(inputDeposit || 0)) / 100 +
            inputValidation(inputDeposit || 0)
          )}{" "}
          USD
        </>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: () => (
        <Button
          type="primary"
          disabled={!inputDeposit}
          onClick={() => createDeposit("fiat")}
        >
          deposits.tables.button
        </Button>
      ),
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      img: `dashboard/deposit/icon.png`,
      name: "<T>deposits.tables.values.2</T>",
      fee: 0.0,
      completion: "<T>deposits.tables.completion.1</T>",
    },
    {
      key: "2",
      img: `dashboard/deposit/icon.png`,
      name: "<T>deposits.tables.values.3</T>",
      fee: 0.0,
      completion: "<T>deposits.tables.completion.1</T>",
    },
  ];

  const columns2 = [
    {
      title: "",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img
          alt={img}
          src={img}
          style={{
            width: "50px",
            height: "25px",
          }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fee%",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => (
        <>
          <a>{fee.toFixed(2)}%</a> + $ 1.15
        </>
      ),
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => <> 1.15 USD</>,
    },
    {
      title: "Completion",
      dataIndex: "completion",
      key: "completion",
    },
    {
      title: "You spend",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => (
        <> {checkNegative(inputValidation(inputDeposit || 0) - 1.15)} USD</>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      align: "left",
      render: () => (
        <Button
          type="primary"
          disabled={!inputDeposit}
          onClick={() => createDeposit("maintence")}
        >
          deposits.tables.button
        </Button>
      ),
    },
  ];

  const dataSource3 = [
    {
      key: "1",
      img: `dashboard/deposit/icon.png`,
      name: "<T>deposits.tables.values.4</T>",
      fee: 0.0,
      completion: "<T>deposits.tables.completion.2</T>",
    },
  ];

  const columns3 = [
    {
      title: "",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img
          alt={img}
          src={img}
          style={{
            width: "50px",
            height: "25px",
          }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fee%",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => (
        <>
          <a>{fee.toFixed(2)} %</a>
        </>
      ),
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => (
        <> {checkNegative((fee * inputValidation(inputDeposit || 0)) / 100)} USD</>
      ),
    },
    {
      title: "Completion",
      dataIndex: "completion",
      key: "completion",
    },
    {
      title: "You spend",
      dataIndex: "fee",
      key: "fee",
      render: (fee) => <> {checkNegative(inputValidation(inputDeposit || 0))} USD</>,
    },
    {
      title: "",
      dataIndex: "action",
      align: "left",
      render: () => (
        <Button
          type="primary"
          disabled={!inputDeposit}
          onClick={() => createDeposit("crypto")}
        >
          deposits.tables.button
        </Button>
      ),
    },
  ];

  const createDeposit = (type) => {
    // console.log(selectedCoin, getRate(selectedCoin, definition), inputDeposit, coinAddress, type);
    setDepositData({
      type,
      rate: 0.111111,
      amountFiat: inputDeposit,
      fee: type === 'crypto' ? 0 : fee,
      coin: 'BTC',
      coinAddress: 'coinadress',
      coinUri: 'coinUri',
      amountCrypto: 100,
    });
  };

  const enterValue = (val) => {
    try {
      const numberVal = parseFloat(val);
      if (numberVal && numberVal > 0) {
        setInputDeposit(numberVal);
      } else {
        setInputDeposit();
      }
    } catch (e) {
      setInputDeposit();
    }
  };

  return (
    <>
      {!depositData && (
        <div>
          <div className="font_30 font_bold mb_10">deposits.pageTitle</div>
          <Title level={5}>
            deposits.inputTitle
          </Title>

          <Input.Group compact style={{ marginBottom: "30px" }}>
            <Input
              style={isMobile() ? { width: "70%" } : { width: "18%" }}
              type="number"
              placeholder={"0"}
              value={inputDeposit}
              size="large"
              onChange={(event) => enterValue(event.target.value)}
            />
            <Select
              defaultValue="USD"
              size="large"
              style={isMobile() ? { width: "25%" } : {}}
            >
              <Option value="USD">USD</Option>
            </Select>
          </Input.Group>
          <Divider />
          {!isMobile() && <>
            <div className="font_25 font_bold mt_20 mb_5">
              Bank Card
            </div>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              tableLayout="fixed"
              scroll={isMobile() ? { x: 900 } : {}}
            />
          </>}
          {isMobile() && <CardAccordion
            title="Bank Card"
            obj={dataSource}
            inputDeposit={inputDeposit}
            createDeposit={createDeposit}
            checkNegative={checkNegative}
            inputValidation={inputValidation}
            arrow />}
          {!isMobile() &&
            <>
              <div className="font_25 font_bold mt_20 mb_5">
                Wire transfer
              </div>
              <Table
                dataSource={dataSource2}
                columns={columns2}
                pagination={false}
                tableLayout="fixed"
                scroll={isMobile() ? { x: 900 } : {}}
              />
            </>}
          {isMobile() && <CardAccordion
            title="Wire Transfer"
            obj={dataSource2}
            inputDeposit={inputDeposit}
            createDeposit={createDeposit}
            checkNegative={checkNegative}
            inputValidation={inputValidation}
            arrow />}
          {!isMobile() && <>
            <div className="font_25 font_bold mt_20 mb_5">
              E - currencies
            </div>
            <Table
              dataSource={dataSource3}
              columns={columns3}
              pagination={false}
              tableLayout="fixed"
              scroll={isMobile() ? { x: 900 } : {}}
            /></>
          }
          {isMobile() && <CardAccordion
            title="E - currencies"
            obj={dataSource3}
            inputDeposit={inputDeposit}
            createDeposit={createDeposit}
            checkNegative={checkNegative}
            inputValidation={inputValidation}
            arrow />}
        </div>
      )}
    </>
  );
};
