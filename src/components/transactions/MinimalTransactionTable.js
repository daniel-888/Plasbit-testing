import React from 'react';
import { Table, Typography } from 'antd';
import { useTracker } from 'meteor/react-meteor-data';
import { isCreditCardTransaction, Transactions } from '../../../api/transactions/transactions';
import { asNumber, getDateString, isMobile } from '../../../api/helpers';
import { Link } from 'react-router-dom';
import './minimalTransactionTable.css';

const {
  Title,
  Text
} = Typography;

const columns = [
  {
    title: 'Date',
    dataIndex: 'dateStr',
    key: 'dateStr',
    className: 'minimalTableColumn dateColumn'
  },
  {
    title: 'Coin',
    dataIndex: 'currency',
    key: 'currency',
    className: 'minimalTableColumn coinColumn'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className: 'minimalTableColumn statusColumn'
  },
  {
    title: 'Amount',
    dataIndex: 'transactionAmount',
    key: 'transactionAmount',
    className: 'minimalTableColumn amountColumn'
  },

];

export const MinimalTransactionTable = () => {
  const { transactions } = useTracker(() => {
    Meteor.subscribe('transactions');
    return {
      transactions: Transactions.find({}, {
        sort: { time: -1 },
        limit: 5
      })
        .fetch()
        .map(transaction => ({
          ...transaction,
          dateStr: getDateString(transaction.created_at || transaction.time),
          status: transaction.status || transaction.type || '',
          tranId: isCreditCardTransaction(transaction) ? transaction._id : transaction.tranId,
          transactionAmount: transaction.transactionAmount ? asNumber(transaction.transactionAmount) : '',
          key: transaction['_id']
        })) || []
    };
  }, []);

  if (transactions) {
    return (
      <div className="minimalTableContainer">
        <Table dataSource={transactions}
               columns={columns}
               pagination={false}/>
        <Link to={'/home/wallet'}>Full Transaction History</Link>
      </div>
    );
  }
};

