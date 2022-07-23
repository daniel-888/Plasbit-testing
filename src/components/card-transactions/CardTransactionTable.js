import React, { useState, useEffect } from 'react';
import { Input, Select, Space, Table, Typography, Popconfirm, Button, Pagination } from 'antd';
import { useResize } from '../../hook/useCustomHook';
import { CardAccordion } from './CardAccordion'

export const CardTransactionTable = (props) => {
  const { isMobile } = useResize()
  const [datesRange, setDatesRange] = useState();
  const [text, setText] = useState();
  const getMillisDay = 1000 * 60 * 60 * 24;
  const [page, setPage] = useState(1)
  const [viewDetails, setViewDetails] = useState([])

  const simplifiedView = props.simplifiedView || false;
  const isAdmin = props.isAdmin || false;

  const formatStr = (str, len, record) => {
    const format = viewDetails[viewDetails?.findIndex(view => view.key === record._id)]?.isDetail
    if (format) return str
    else if (len >= str.length) return str
    else return str.substr(0, len) + '...'
  }

  const columnsNonAdmin = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date, record) => (
        <>{formatStr(date, 11, record)}</>
      ),
    },
    {
      title: 'Credit',
      dataIndex: 'creditText',
      key: 'creditText',
      render: (creditText, record) => (
        <>{formatStr(creditText, 10, record)}</>
      ),
    },
    {
      title: 'Debit',
      dataIndex: 'debitText',
      key: 'debitText',
      render: (debitText, record) => (
        <>{formatStr(debitText, 10, record)}</>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'totalText',
      key: 'totalText',
      render: (totalText, record) => (
        <>{formatStr(totalText, 10, record)}</>
      ),
    },
    {
      title: 'Transaction',
      dataIndex: 'transactionId',
      key: 'transactionId',
      render: (transactionId, record) => (
        <>{formatStr(transactionId, 10, record)}</>
      ),
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
      render: (transactionType, record) => (
        <>{formatStr(transactionType, 12, record)}</>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (description, record) => (
        <>{formatStr(description, 10, record)}</>
      ),
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
      "_id": "vEysAgMKBM5skWqwH",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "501.99",
      "debitCurrency": "EUR",
      "description": "Fin: BNL C/O AG. VILLARICCAVILLARICCA80010        ITA mcc: 6011(TxnId: 9721556506) (500EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1637422320000",
      "transactionDateStr": "20 Nov 2021, 15:32",
      "transactionId": "9721556506",
      "transactionType": "ATM withdrawal",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "20 Nov 2021, 15:32",
      "creditText": "",
      "debitText": "501.99 EUR",
      "totalText": "",
      "key": "vEysAgMKBM5skWqwH"
    },
    {
      "_id": "HFowc6L8wyw5rFSn8",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "561.32",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9755481319) (633USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "633",
      "totalCurrency": "USD",
      "transactionDate": "1637769900000",
      "transactionDateStr": "24 Nov 2021, 16:05",
      "transactionId": "9755481319",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "24 Nov 2021, 16:05",
      "creditText": "561.32 EUR",
      "debitText": "",
      "totalText": "633 USD",
      "key": "HFowc6L8wyw5rFSn8"
    },
    {
      "_id": "o6bKuJZuZ3zqK3JEx",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "3056",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "14ef3546-3622-4c1f-8 mcc: (TxnId: 9659296103) (3056EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636740900000",
      "transactionDateStr": "12 Nov 2021, 18:15",
      "transactionId": "9659296103",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "12 Nov 2021, 18:15",
      "creditText": "3056 EUR",
      "debitText": "",
      "totalText": "",
      "key": "o6bKuJZuZ3zqK3JEx"
    },
    {
      "_id": "g5TSgdae4Mo9E9spv",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "1281.5",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "b52704b4-ca27-474c-9 mcc: (TxnId: 9569102946) (1281.5EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1635793200000",
      "transactionDateStr": "01 Nov 2021, 19:00",
      "transactionId": "9569102946",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "01 Nov 2021, 19:00",
      "creditText": "1281.5 EUR",
      "debitText": "",
      "totalText": "",
      "key": "g5TSgdae4Mo9E9spv"
    },
    {
      "_id": "iQygyydganpwne5Zg",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "537.25",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADIDASITALY3531436900120900        ITA mcc: 5661(TxnId: 9664577894) (614.13USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "614.13",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577894",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "537.25 EUR",
      "totalText": "614.13 USD",
      "key": "iQygyydganpwne5Zg"
    },
    {
      "_id": "bjcBg9bBNXbWGKoLt",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "107.43",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FACEBOOK FACEB3531436900100000        IRL mcc: 7311(TxnId: 9715456943) (118.04USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "118.04",
      "totalCurrency": "USD",
      "transactionDate": "1637338260000",
      "transactionDateStr": "19 Nov 2021, 16:11",
      "transactionId": "9715456943",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "19 Nov 2021, 16:11",
      "creditText": "",
      "debitText": "107.43 EUR",
      "totalText": "118.04 USD",
      "key": "bjcBg9bBNXbWGKoLt"
    },
    {
      "_id": "4ZxEwj39uJFFidGaG",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "31.2",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADITYASANEHI263531436900128020        ESP mcc: 8999(TxnId: 9633477983) (35USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "35",
      "totalCurrency": "USD",
      "transactionDate": "1636471140000",
      "transactionDateStr": "09 Nov 2021, 15:19",
      "transactionId": "9633477983",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "09 Nov 2021, 15:19",
      "creditText": "",
      "debitText": "31.2 EUR",
      "totalText": "35 USD",
      "key": "4ZxEwj39uJFFidGaG"
    },
    {
      "_id": "k8gTooPSYtNi3RfJ5",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "197",
      "debitCurrency": "EUR",
      "description": "987fb3e3-d27e-45e7-9 mcc: (TxnId: 9538735815) (197EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1635507780000",
      "transactionDateStr": "29 Oct 2021, 11:43",
      "transactionId": "9538735815",
      "transactionType": "Unload from card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "29 Oct 2021, 11:43",
      "creditText": "",
      "debitText": "197 EUR",
      "totalText": "",
      "key": "k8gTooPSYtNi3RfJ5"
    },
    {
      "_id": "5q9PNKkiMqznH3gyr",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "613",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "af414132-f395-4d03-b mcc: (TxnId: 9570030511) (613EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1635804420000",
      "transactionDateStr": "01 Nov 2021, 22:07",
      "transactionId": "9570030511",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "01 Nov 2021, 22:07",
      "creditText": "613 EUR",
      "debitText": "",
      "totalText": "",
      "key": "5q9PNKkiMqznH3gyr"
    },
    {
      "_id": "MiQaAhzrXskSLykPh",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "685.4",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADIDASITALY3531436900120900        ITA mcc: 5661(TxnId: 9664577892) (677.03USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "677.03",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577892",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "685.4 EUR",
      "totalText": "677.03 USD",
      "key": "MiQaAhzrXskSLykPh"
    },
    {
      "_id": "iz7PTYQzCuAx5q5BL",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "501.99",
      "debitCurrency": "EUR",
      "description": "Fin: BNL C/O AG. VILLARICCAVILLARICCA80010        ITA mcc: 6011(TxnId: 9607420094) (500EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636217040000",
      "transactionDateStr": "06 Nov 2021, 16:44",
      "transactionId": "9607420094",
      "transactionType": "ATM withdrawal",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "06 Nov 2021, 16:44",
      "creditText": "",
      "debitText": "501.99 EUR",
      "totalText": "",
      "key": "iz7PTYQzCuAx5q5BL"
    },
    {
      "_id": "dLdaHjv2DF8sJLap5",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "460.6",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *UPWRKESCROW402935773394107     CA USA mcc: 7361(TxnId: 9633477982) (515USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "515",
      "totalCurrency": "USD",
      "transactionDate": "1636471140000",
      "transactionDateStr": "09 Nov 2021, 15:19",
      "transactionId": "9633477982",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "09 Nov 2021, 15:19",
      "creditText": "",
      "debitText": "460.6 EUR",
      "totalText": "515 USD",
      "key": "dLdaHjv2DF8sJLap5"
    },
    {
      "_id": "W5qRKMKWaNPKsAe8d",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "376.7",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9547764847) (422USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "422",
      "totalCurrency": "USD",
      "transactionDate": "1635607320000",
      "transactionDateStr": "30 Oct 2021, 15:22",
      "transactionId": "9547764847",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "30 Oct 2021, 15:22",
      "creditText": "",
      "debitText": "376.7 EUR",
      "totalText": "422 USD",
      "key": "W5qRKMKWaNPKsAe8d"
    },
    {
      "_id": "cm5dBecdpBLq8K2o7",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "650.71",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADIDASITALY3531436900120900        ITA mcc: 5661(TxnId: 9664577897) (743.83USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "743.83",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577897",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "650.71 EUR",
      "totalText": "743.83 USD",
      "key": "cm5dBecdpBLq8K2o7"
    },
    {
      "_id": "FGbZxHAmEK3Ftz7sY",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "59.72",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "Fin: PAYPAL *ZARA3531436900115142        ESP mcc: 5691(TxnId: 9690771504) (68.48USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "68.48",
      "totalCurrency": "USD",
      "transactionDate": "1637077020000",
      "transactionDateStr": "16 Nov 2021, 15:37",
      "transactionId": "9690771504",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "16 Nov 2021, 15:37",
      "creditText": "59.72 EUR",
      "debitText": "",
      "totalText": "68.48 USD",
      "key": "FGbZxHAmEK3Ftz7sY"
    },
    {
      "_id": "2v3gARQNmxjZkAo8X",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "18.73",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FACEBOOK FACEB3531436900100000        IRL mcc: 7311(TxnId: 9728790180) (20.46USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "20.46",
      "totalCurrency": "USD",
      "transactionDate": "1637509380000",
      "transactionDateStr": "21 Nov 2021, 15:43",
      "transactionId": "9728790180",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "21 Nov 2021, 15:43",
      "creditText": "",
      "debitText": "18.73 EUR",
      "totalText": "20.46 USD",
      "key": "2v3gARQNmxjZkAo8X"
    },
    {
      "_id": "nBZD5WW8MWXNH3GQk",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "107.84",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9524517379) (121.33USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "121.33",
      "totalCurrency": "USD",
      "transactionDate": "1635350760000",
      "transactionDateStr": "27 Oct 2021, 16:06",
      "transactionId": "9524517379",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "27 Oct 2021, 16:06",
      "creditText": "",
      "debitText": "107.84 EUR",
      "totalText": "121.33 USD",
      "key": "nBZD5WW8MWXNH3GQk"
    },
    {
      "_id": "tPAKhn52QgPD8iEmD",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "109.99",
      "debitCurrency": "EUR",
      "description": "Fin: FACEBK SVXC38XU62fb.me/ads00000        IRL mcc: 7311(TxnId: 9672215623) (109.99EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636904280000",
      "transactionDateStr": "14 Nov 2021, 15:38",
      "transactionId": "9672215623",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "14 Nov 2021, 15:38",
      "creditText": "",
      "debitText": "109.99 EUR",
      "totalText": "",
      "key": "tPAKhn52QgPD8iEmD"
    },
    {
      "_id": "F5Cnu42EBBLkoNfED",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "3.95",
      "debitCurrency": "EUR",
      "description": "Auth: PAYPAL *PIPO             4029357733   HK mcc: 4816(TxnId: 9764184445) (4.29USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "4.29",
      "totalCurrency": "USD",
      "transactionDate": "1637862420000",
      "transactionDateStr": "25 Nov 2021, 17:47",
      "transactionId": "9764184445",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "25 Nov 2021, 17:47",
      "creditText": "",
      "debitText": "3.95 EUR",
      "totalText": "4.29 USD",
      "key": "F5Cnu42EBBLkoNfED"
    },
    {
      "_id": "jbuvSLpZkRbnEXuTi",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "227",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ZARA3531436900115142        ESP mcc: 5691(TxnId: 9584179010) (255.18USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "255.18",
      "totalCurrency": "USD",
      "transactionDate": "1635953460000",
      "transactionDateStr": "03 Nov 2021, 15:31",
      "transactionId": "9584179010",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "03 Nov 2021, 15:31",
      "creditText": "",
      "debitText": "227 EUR",
      "totalText": "255.18 USD",
      "key": "jbuvSLpZkRbnEXuTi"
    },
    {
      "_id": "kCjTzqkQKrRaoGHTD",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "64.98",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ZARA3531436900115142        ESP mcc: 5691(TxnId: 9649581043) (72.42USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "72.42",
      "totalCurrency": "USD",
      "transactionDate": "1636646160000",
      "transactionDateStr": "11 Nov 2021, 15:56",
      "transactionId": "9649581043",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "11 Nov 2021, 15:56",
      "creditText": "",
      "debitText": "64.98 EUR",
      "totalText": "72.42 USD",
      "key": "kCjTzqkQKrRaoGHTD"
    },
    {
      "_id": "dkSbSJuMaixWiGfJX",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "197",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "24a7449c-7145-49fa-9 mcc: (TxnId: 9556126299) (197EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1635702060000",
      "transactionDateStr": "31 Oct 2021, 17:41",
      "transactionId": "9556126299",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "31 Oct 2021, 17:41",
      "creditText": "197 EUR",
      "debitText": "",
      "totalText": "",
      "key": "dkSbSJuMaixWiGfJX"
    },
    {
      "_id": "pokDPKHJTXoJEiw5m",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "2580",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "e61b2523-b481-45be-a mcc: (TxnId: 9604114496) (2580EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636155000000",
      "transactionDateStr": "05 Nov 2021, 23:30",
      "transactionId": "9604114496",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "05 Nov 2021, 23:30",
      "creditText": "2580 EUR",
      "debitText": "",
      "totalText": "",
      "key": "pokDPKHJTXoJEiw5m"
    },
    {
      "_id": "MJXhKWZyY3NXRBGXM",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "563.73",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9592366807) (633USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "633",
      "totalCurrency": "USD",
      "transactionDate": "1636039800000",
      "transactionDateStr": "04 Nov 2021, 15:30",
      "transactionId": "9592366807",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "04 Nov 2021, 15:30",
      "creditText": "",
      "debitText": "563.73 EUR",
      "totalText": "633 USD",
      "key": "MJXhKWZyY3NXRBGXM"
    },
    {
      "_id": "QEkTGtRymDCPXbaBS",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "269",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "2faf3a21-87b4-45cd-9 mcc: (TxnId: 9659081659) (269EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636738560000",
      "transactionDateStr": "12 Nov 2021, 17:36",
      "transactionId": "9659081659",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "12 Nov 2021, 17:36",
      "creditText": "269 EUR",
      "debitText": "",
      "totalText": "",
      "key": "QEkTGtRymDCPXbaBS"
    },
    {
      "_id": "QB35EcX25hgN6hWqX",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "197",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "01f76165-d762-4ad0-a mcc: (TxnId: 9533834339) (197EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1635446580000",
      "transactionDateStr": "28 Oct 2021, 18:43",
      "transactionId": "9533834339",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "28 Oct 2021, 18:43",
      "creditText": "197 EUR",
      "debitText": "",
      "totalText": "",
      "key": "QB35EcX25hgN6hWqX"
    },
    {
      "_id": "c4RvWmjkfcLoCw2pZ",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "77.7",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "Fin: PAYPAL *ZARA3531436900115142        ESP mcc: 5691(TxnId: 9664577898) (89.07USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "89.07",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577898",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "77.7 EUR",
      "debitText": "",
      "totalText": "89.07 USD",
      "key": "c4RvWmjkfcLoCw2pZ"
    },
    {
      "_id": "EKsMeX9wemfFqnJfq",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "3.95",
      "debitCurrency": "EUR",
      "description": "Auth: PAYPAL *PIPO             4029357733   HK mcc: 4816(TxnId: 9764695755) (4.29USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "4.29",
      "totalCurrency": "USD",
      "transactionDate": "1637868360000",
      "transactionDateStr": "25 Nov 2021, 19:26",
      "transactionId": "9764695755",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "25 Nov 2021, 19:26",
      "creditText": "",
      "debitText": "3.95 EUR",
      "totalText": "4.29 USD",
      "key": "EKsMeX9wemfFqnJfq"
    },
    {
      "_id": "LudFpJmFKfPdJBmHC",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "197",
      "debitCurrency": "EUR",
      "description": "b9035f53-760c-49b4-8 mcc: (TxnId: 9556149854) (197EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1635702300000",
      "transactionDateStr": "31 Oct 2021, 17:45",
      "transactionId": "9556149854",
      "transactionType": "Unload from card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "31 Oct 2021, 17:45",
      "creditText": "",
      "debitText": "197 EUR",
      "totalText": "",
      "key": "LudFpJmFKfPdJBmHC"
    },
    {
      "_id": "szSzb8oM9gb6J8WYg",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "15.5",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9690771503) (17.1USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "17.1",
      "totalCurrency": "USD",
      "transactionDate": "1637077020000",
      "transactionDateStr": "16 Nov 2021, 15:37",
      "transactionId": "9690771503",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "16 Nov 2021, 15:37",
      "creditText": "",
      "debitText": "15.5 EUR",
      "totalText": "17.1 USD",
      "key": "szSzb8oM9gb6J8WYg"
    },
    {
      "_id": "bNBtffH2v3mWeKKrh",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "4.3",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *HOSTINGER3531436900100000        CYP mcc: 4816(TxnId: 9625385547) (4.81USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "4.81",
      "totalCurrency": "USD",
      "transactionDate": "1636384500000",
      "transactionDateStr": "08 Nov 2021, 15:15",
      "transactionId": "9625385547",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "08 Nov 2021, 15:15",
      "creditText": "",
      "debitText": "4.3 EUR",
      "totalText": "4.81 USD",
      "key": "bNBtffH2v3mWeKKrh"
    },
    {
      "_id": "hXNQDn8jisHk9Fpk6",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "70.36",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *SHOPIFY3531436900100000        IRL mcc: 5734(TxnId: 9576030379) (78.89USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "78.89",
      "totalCurrency": "USD",
      "transactionDate": "1635866940000",
      "transactionDateStr": "02 Nov 2021, 15:29",
      "transactionId": "9576030379",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "02 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "70.36 EUR",
      "totalText": "78.89 USD",
      "key": "hXNQDn8jisHk9Fpk6"
    },
    {
      "_id": "4DffxqmffARRdswDm",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "549.23",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADIDASITALY3531436900120900        ITA mcc: 5661(TxnId: 9664577893) (627.83USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "627.83",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577893",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "549.23 EUR",
      "totalText": "627.83 USD",
      "key": "4DffxqmffARRdswDm"
    },
    {
      "_id": "yKSfd7tdSxZgjPFg7",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "622.96",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADIDASITALY3531436900120900        ITA mcc: 5661(TxnId: 9664577896) (712.1USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "712.1",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577896",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "622.96 EUR",
      "totalText": "712.1 USD",
      "key": "yKSfd7tdSxZgjPFg7"
    },
    {
      "_id": "xZjpjqJbEgGbp9GbC",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "15.85",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9541471393) (17.83USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "17.83",
      "totalCurrency": "USD",
      "transactionDate": "1635523560000",
      "transactionDateStr": "29 Oct 2021, 16:06",
      "transactionId": "9541471393",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "29 Oct 2021, 16:06",
      "creditText": "",
      "debitText": "15.85 EUR",
      "totalText": "17.83 USD",
      "key": "xZjpjqJbEgGbp9GbC"
    },
    {
      "_id": "cXth9yBxp75mgpAS9",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "501.99",
      "debitCurrency": "EUR",
      "description": "Fin: BNL C/O AG. VILLARICCAVILLARICCA80010        ITA mcc: 6011(TxnId: 9607420093) (500EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636217040000",
      "transactionDateStr": "06 Nov 2021, 16:44",
      "transactionId": "9607420093",
      "transactionType": "ATM withdrawal",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "06 Nov 2021, 16:44",
      "creditText": "",
      "debitText": "501.99 EUR",
      "totalText": "",
      "key": "cXth9yBxp75mgpAS9"
    },
    {
      "_id": "LQoqJo6xxqAgnqAqQ",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "204.13",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ADIDASITALY3531436900120900        ITA mcc: 5661(TxnId: 9664577895) (233.34USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "233.34",
      "totalCurrency": "USD",
      "transactionDate": "1636817340000",
      "transactionDateStr": "13 Nov 2021, 15:29",
      "transactionId": "9664577895",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "13 Nov 2021, 15:29",
      "creditText": "",
      "debitText": "204.13 EUR",
      "totalText": "233.34 USD",
      "key": "LQoqJo6xxqAgnqAqQ"
    },
    {
      "_id": "xYHnv95fpeh7AxTLJ",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "0.06",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FACEBOOK FACEB3531436900100000        IRL mcc: 7311(TxnId: 9672215622) (0.07USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "0.07",
      "totalCurrency": "USD",
      "transactionDate": "1636904280000",
      "transactionDateStr": "14 Nov 2021, 15:38",
      "transactionId": "9672215622",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "14 Nov 2021, 15:38",
      "creditText": "",
      "debitText": "0.06 EUR",
      "totalText": "0.07 USD",
      "key": "xYHnv95fpeh7AxTLJ"
    },
    {
      "_id": "eY7FwRABQYoPQ6iMP",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "39.29",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *FIVERR COM402935773300000        ISR mcc: 8999(TxnId: 9532328007) (44.2USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "44.2",
      "totalCurrency": "USD",
      "transactionDate": "1635434700000",
      "transactionDateStr": "28 Oct 2021, 15:25",
      "transactionId": "9532328007",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "28 Oct 2021, 15:25",
      "creditText": "",
      "debitText": "39.29 EUR",
      "totalText": "44.2 USD",
      "key": "eY7FwRABQYoPQ6iMP"
    },
    {
      "_id": "MB6W8w892pyAtFmLK",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "2585",
      "creditCurrency": "EUR",
      "debitAmount": "",
      "debitCurrency": "",
      "description": "a297a92d-0d9a-439b-b mcc: (TxnId: 9612666547) (2585EUR)",
      "source": "4349 **** **** 2263",
      "totalAmount": "",
      "totalCurrency": "",
      "transactionDate": "1636277100000",
      "transactionDateStr": "07 Nov 2021, 09:25",
      "transactionId": "9612666547",
      "transactionType": "Transfer to card",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "07 Nov 2021, 09:25",
      "creditText": "2585 EUR",
      "debitText": "",
      "totalText": "",
      "key": "MB6W8w892pyAtFmLK"
    },
    {
      "_id": "GNXKArz3xhWT8CGDc",
      "cardId": "6gYJTh6kA7YWPnkWv",
      "creditAmount": "",
      "creditCurrency": "",
      "debitAmount": "232.42",
      "debitCurrency": "EUR",
      "description": "Fin: PAYPAL *ZARA3531436900115142        ESP mcc: 5691(TxnId: 9614676705) (259.87USD)",
      "source": "4349 **** **** 2263",
      "totalAmount": "259.87",
      "totalCurrency": "USD",
      "transactionDate": "1636298460000",
      "transactionDateStr": "07 Nov 2021, 15:21",
      "transactionId": "9614676705",
      "transactionType": "Сard payment",
      "userCardId": "9SbXGZMD3mokrk9pK",
      "userId": "2GaxTweXKDfn8aDNh",
      "date": "07 Nov 2021, 15:21",
      "creditText": "",
      "debitText": "232.42 EUR",
      "totalText": "259.87 USD",
      "key": "GNXKArz3xhWT8CGDc"
    }
  ]

  useEffect(() => {
    const keys = transactions.map((transaction) => (
      {
        key: transaction._id,
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
  // const handleSelect = (val) => {
  //   console.log('handleSelect', val);
  //   // setDatesRange(val);
  // };

  const handleViewDetail = id => {
    const temp = viewDetails.map(view => view.key === id ? {
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
        const format = viewDetails[viewDetails?.findIndex(detail => detail.key === record._id)]?.isDetail
        return <>
          <div className={`detail_btn ${format ? 'bg_red' : 'bg_light_blue'}`}
            onClick={() => handleViewDetail(record._id)}>
            {format ? 'Close' : 'View Details'}
          </div>
        </>
      }
    },
  )
  if (isAdmin) {
    columns.push(
      {
        title: 'Action',
        key: 'delete',
        render: (text, record) => {
          return <>
            <Popconfirm placement="top" title="Are you sure?" onConfirm={() => console.log(record.key)} okText="Yes" cancelText="No">
              <Button danger={true}> Delete </Button>
            </Popconfirm>
          </>
        }
      }
    )
  }

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
            return <CardAccordion obj={transaction} key={index} arrow />
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

