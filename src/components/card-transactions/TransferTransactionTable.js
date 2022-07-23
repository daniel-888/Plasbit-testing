import React, { useState, useEffect } from 'react';
import { Input, Select, Space, Table, Typography, Popconfirm, Button, Row, Col, Form, message, Tooltip, Pagination } from 'antd';
import { useResize } from '../../hook/useCustomHook';
import { TransferAccordion } from './TransferAccordion';

export const TransferTransactionTable = (props) => {
  const { isMobile } = useResize()
  const [datesRange, setDatesRange] = useState();
  const [text, setText] = useState();
  const getMillisDay = 1000 * 60 * 60 * 24;
  const [page, setPage] = useState(1)
  const [viewDetails, setViewDetails] = useState([])

  const formatStr = (str, len, record) => {
    const format = viewDetails[viewDetails?.findIndex(view => view.key._str === record.key._str)]?.isDetail
    if (format) return str
    else if (len >= str.length) return str
    else return str.substr(0, len) + '...'
  }

  const columnsNonAdmin = [
    {
      title: 'Request Date',
      dataIndex: 'date',
      key: 'date',
      render: (value, record) => (
        <Tooltip placement="topLeft" title={record.created_at} style={{ width: '5%' }}>
          {formatStr(record.created_at, 10, record)}
        </Tooltip>
      ),
      sorter: (a, b) => parseInt(a.date) - parseInt(b.date),
      defaultSortOrder: 'descend'
    },
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
      render: (accountType, record) => (
        <Tooltip placement="topLeft" title={accountType}>
          {formatStr(accountType, 10, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Account Name',
      dataIndex: 'accountName',
      key: 'accountName',
      ellipsis: false,
      render: (accountName, record) => (
        <Tooltip placement="topLeft" title={accountName}>
          {formatStr(accountName, 10, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Account Number',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
      ellipsis: false,
      render: (accountNumber, record) => (
        <Tooltip placement="topLeft" title={accountNumber}>
          {formatStr(accountNumber, 10, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Bank Name',
      dataIndex: 'bankName',
      key: 'bankName',
      ellipsis: false,
      render: (bankName, record) => (
        <Tooltip placement="topLeft" title={bankName}>
          {formatStr(bankName, 10, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Bank Code',
      dataIndex: 'bankCode',
      key: 'bankCode',
      ellipsis: false,
      render: (bankCode, record) => (
        <Tooltip placement="topLeft" title={bankCode}>
          {formatStr(bankCode, 12, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      ellipsis: {
        showTitle: false
      },
      ellipsis: false,
      render: (notes, record) => (
        <Tooltip placement="topLeft" title={notes}>
          {formatStr(notes, 10, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Sent in fiat',
      dataIndex: 'amountFiat',
      key: 'amountFiat',
      ellipsis: false,
      render: (amountFiat, record) => (
        <Tooltip placement="topLeft" title={amountFiat}>
          {formatStr(amountFiat, 8, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Currency',
      dataIndex: 'fiatName',
      key: 'fiatName',
      ellipsis: false,
      render: (fiatName, record) => (
        <Tooltip placement="topLeft" title={fiatName}>
          {fiatName}
        </Tooltip>
      ),
    },
    {
      title: 'Amount in Crypto',
      dataIndex: 'amountCrypto',
      key: 'amountCrypto',
      ellipsis: false,
      render: (amountCrypto, record) => (
        <Tooltip placement="topLeft" title={amountCrypto}>
          {amountCrypto}
        </Tooltip>
      ),
    },
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ellipsis: false,
      render: (status, record) => (
        <Tooltip placement="topLeft" title={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tooltip>
      ),
    },
    {
      title: 'Action',
      "dataIndex": 'updated_at',
      key: 'updated_at',
      ellipsis: false,
      render: (updated_at, record) => (
        <Tooltip placement="topLeft" title={`Handled at: ${updated_at}`}>
          {formatStr(`Handled at: ${updated_at}`, 8, record)}
        </Tooltip>
      ),
    },
    {
      title: 'Confirmation Documents',
      ellipsis: false,
    },
  ];

  const dateFilters = [{
    key: 'oneweek',
    value: '1 week',
    millis: (getMillisDay * 7),
  },
  {
    key: 'onemonth',
    value: '1 month',
    millis: (getMillisDay * 30),
  },
  {
    key: 'threemonths',
    value: '3 months',
    millis: (getMillisDay * 30 * 3),
  },
  {
    key: 'sixmonths',
    value: '6 months',
    millis: (getMillisDay * 30 * 6),
  }];

  const transactions = [
    {
      "_id": {
        "_str": "61deb77707480000c70021b2"
      },
      "address": "",
      "amount": "(Document) 3 Fields",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "cardName": "test card",
      "coin": "BTC",
      "created_at": "2021-11-26 21:41:06.302",
      "currency": "USD",
      "details": "",
      "description": "description description description",
      "email": "boris@gmail.com",
      "fees": "",
      "from": "",
      "native_amount": "(Document) 4 Fields",
      "network": "",
      "resource": "",
      "status": "pending",
      "time": "2021-11-26T21:41:06.302Z",
      "to": "",
      "amountFiat": "1.33 USD",
      "amountCrypto": "0.00878LTC",
      "tranId": "",
      "transactionAmount": 0.0018376,
      "type": "wired",
      "updated_at": "2021-11-26T21:41:06.302Z",
      "user": "2GaxTweXKDfn8aDNh",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "depositData": {
        "accountType": "Personal Account",
        "accountName": "NAME",
        "bankName": "BANK",
        "accountNumber": "GB29",
        "bankAddress": "UK",
        "bankCode": "1111 2222 3333 4444",
        "notes": "This is a test notes. "
      },
      "key": {
        "_str": "61deb77707480000c70021b2"
      },
      "date": 1637962866302,
      "accountType": "Personal Account",
      "accountName": "Account Name",
      "bankName": "Bank name",
      "accountNumber": "account number",
      "bankAddress": "bank address",
      "bankCode": "bank code",
      "notes": "This is a test notes."
    },
    {
      "_id": {
        "_str": "41deb77707481100c11021b2"
      },
      "address": "",
      "amount": "(Document) 3 Fields",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "cardName": "test card",
      "coin": "BTC",
      "created_at": "2021-11-26 21:41:06.302",
      "currency": "USD",
      "details": "",
      "description": "description description description",
      "email": "boris@gmail.com",
      "fees": "",
      "from": "",
      "native_amount": "(Document) 4 Fields",
      "network": "",
      "resource": "",
      "status": "pending",
      "time": "2021-11-26T21:41:06.302Z",
      "to": "",
      "amountFiat": "1.33 USD",
      "amountCrypto": "0.00878LTC",
      "tranId": "",
      "transactionAmount": 0.0018376,
      "type": "wired",
      "updated_at": "2021-11-26T21:41:06.302Z",
      "user": "2GaxTweXKDfn8aDNh",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "depositData": {
        "accountType": "Personal Account",
        "accountName": "NAME",
        "bankName": "BANK",
        "accountNumber": "GB29",
        "bankAddress": "UK",
        "bankCode": "1111 2222 3333 4444",
        "notes": "This is a test notes. "
      },
      "key": {
        "_str": "41deb77707481100c11021b2"
      },
      "date": 1637962866302,
      "accountType": "Personal Account",
      "accountName": "Account Name",
      "bankName": "Bank name",
      "accountNumber": "account number",
      "bankAddress": "bank address",
      "bankCode": "bank code",
      "notes": "This is a test notes."
    },
    {
      "_id": {
        "_str": "41deb77707481100c11021b3"
      },
      "address": "",
      "amount": "(Document) 3 Fields",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "cardName": "test card",
      "coin": "BTC",
      "created_at": "2021-11-26 21:41:06.302",
      "currency": "USD",
      "details": "",
      "description": "description description description",
      "email": "boris@gmail.com",
      "fees": "",
      "from": "",
      "native_amount": "(Document) 4 Fields",
      "network": "",
      "resource": "",
      "status": "pending",
      "time": "2021-11-26T21:41:06.302Z",
      "to": "",
      "amountFiat": "1.33 USD",
      "amountCrypto": "0.00878LTC",
      "tranId": "",
      "transactionAmount": 0.0018376,
      "type": "wired",
      "updated_at": "2021-11-26T21:41:06.302Z",
      "user": "2GaxTweXKDfn8aDNh",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "depositData": {
        "accountType": "Personal Account",
        "accountName": "NAME",
        "bankName": "BANK",
        "accountNumber": "GB29",
        "bankAddress": "UK",
        "bankCode": "1111 2222 3333 4444",
        "notes": "This is a test notes. "
      },
      "key": {
        "_str": "41deb77707481100c11021b3"
      },
      "date": 1637962866302,
      "accountType": "Personal Account",
      "accountName": "Account Name",
      "bankName": "Bank name",
      "accountNumber": "account number",
      "bankAddress": "bank address",
      "bankCode": "bank code",
      "notes": "This is a test notes."
    },
    {
      "_id": {
        "_str": "41deb77707481100c11021b4"
      },
      "address": "",
      "amount": "(Document) 3 Fields",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "cardName": "test card",
      "coin": "BTC",
      "created_at": "2021-11-26 21:41:06.302",
      "currency": "USD",
      "details": "",
      "description": "description description description",
      "email": "boris@gmail.com",
      "fees": "",
      "from": "",
      "native_amount": "(Document) 4 Fields",
      "network": "",
      "resource": "",
      "status": "pending",
      "time": "2021-11-26T21:41:06.302Z",
      "to": "",
      "amountFiat": "1.33 USD",
      "amountCrypto": "0.00878LTC",
      "tranId": "",
      "transactionAmount": 0.0018376,
      "type": "wired",
      "updated_at": "2021-11-26T21:41:06.302Z",
      "user": "2GaxTweXKDfn8aDNh",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "depositData": {
        "accountType": "Personal Account",
        "accountName": "NAME",
        "bankName": "BANK",
        "accountNumber": "GB29",
        "bankAddress": "UK",
        "bankCode": "1111 2222 3333 4444",
        "notes": "This is a test notes. "
      },
      "key": {
        "_str": "41deb77707481100c11021b4"
      },
      "date": 1637962866302,
      "accountType": "Personal Account",
      "accountName": "Account Name",
      "bankName": "Bank name",
      "accountNumber": "account number",
      "bankAddress": "bank address",
      "bankCode": "bank code",
      "notes": "This is a test notes."
    },
  ]

  useEffect(() => {
    const keys = transactions.map((transaction, index) => (
      {
        key: transaction.key,
        isDetail: false
      }
    ))

    setViewDetails(keys)
  }, [])

  const handleChange = (val) => {
    // console.log(val);
    setDatesRange(val);
  };

  const handlePagination = page => {
    setPage(page)
  }

  const handleViewDetail = key => {
    const temp = viewDetails.map(view => view.key._str === key._str ? {
      ...view,
      isDetail: !view.isDetail
    } : view)
    setViewDetails([...temp])
  }

  let columns = [...columnsNonAdmin]
  columns.push(
    {
      title: 'Details',
      dataIndex: 'date',
      key: 'date',
      render: (text, record) => {
        const format = viewDetails[viewDetails?.findIndex(detail => detail.key._str == record.key._str)]?.isDetail
        return <>
          <div className={`detail_btn ${format ? 'bg_red' : 'bg_light_blue'}`}
            onClick={() => handleViewDetail(record.key)}>
            {format ? 'Close' : 'View Details'}
          </div>
        </>
      }
    },
  )

  return (
    <>
      <div className='d_flex justify_content_between align_items_center filter_row'>
        <div className='filter'>
          <div className="text light_blue">
            <p>Search by Transaction Type</p>
          </div>
          <Select value={props.mode} onChange={props.handleChange} defaultValue={props.mode}
            style={{ width: '100%' }}>
            <Select.Option value="card">
              View Card Transaction
            </Select.Option>
            <Select.Option value="transfer">
              View Transfer Transaction
            </Select.Option>
          </Select>
        </div>
        <div className='filter'>
          <div className="text light_blue">
            <p>Search by Date Range</p>
          </div>
          <Select value={datesRange} onChange={handleChange}
            style={{ width: '100%' }}>
            {dateFilters.map((filter) => (
              <Select.Option key={filter.key} value={filter.key}>
                {filter.value}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className='filter'>
          <div>
            <div className="text light_blue">
              <p>Search by Keyword</p>
            </div>
            <Input onChange={(e) => setText(e.target.value)} placeholder="Type any keyword"
            ></Input>
          </div>
        </div>
      </div>
      {!isMobile && <Table dataSource={transactions} columns={columns} className="transaction_table mt_20" />}
      {isMobile && <div className="transaction_mob">
        <div className="d_flex align_items_center thead">
          <div className='request_date'>Request Date</div>
          <div className='sent_fiat'>Sent in fiat</div>
          <div className='details'>Details</div>
        </div>
        {transactions.map((transaction, index) => {
          if ((index >= (page - 1) * 10) && (index < page * 10)) {
            return <TransferAccordion obj={transaction} key={index} arrow />
          }
        })}
        <div className="pagination mt_10">
          <Pagination current={page} onChange={handlePagination} total={transactions.length} />
        </div>
      </div>}
      {/*{isObjectEmpty(transactions) && <div>No results found</div>}*/}
    </>
  );
};

