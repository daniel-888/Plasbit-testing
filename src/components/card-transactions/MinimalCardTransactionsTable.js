import { Table } from 'antd';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { CardTransactions } from '../../../api/card-transactions/card-transactions';
import { Link } from 'react-router-dom';
import "./minimalCardTransaction.css";

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    className: 'minimalTableColumn dateColumn'
  },
  {
    title: 'Total',
    dataIndex: 'totalText',
    key: 'totalText',
    className: 'minimalTableColumn totalColumn'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    className: 'minimalTableColumn descriptionColumn'
  },
];

export const MinimalCardTransactionsTable = () => {
  const { transactions } = useTracker(() => {

    Meteor.subscribe('cardtransactions');
    const res = CardTransactions.find({}, {limit: 5, sort: { transactionDate: -1 }})
      .fetch()
      .map(tr => ({
        ...tr,
        date: tr.transactionDate && new Date(tr.transactionDate).toLocaleString(),
        creditText: tr.creditAmount ? tr.creditAmount + ' ' + tr.creditCurrency : '',
        debitText: tr.debitAmount ? tr.debitAmount + ' ' + tr.debitCurrency : '',
        totalText: tr.totalAmount ? tr.totalAmount + ' ' + tr.totalCurrency : '',
        key: tr['_id'],
      }));
    return {
      transactions: res
    };
  }, []);
  return (
    <div className="minimalTableContainer">
      <Table dataSource={transactions} columns={columns} pagination={false}/>
      <Link to={"/home/transactions"}>Full Transaction History</Link>
    </div>
  );
};
