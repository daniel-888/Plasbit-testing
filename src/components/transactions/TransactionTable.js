import React from 'react';
import { Table, Typography } from 'antd';
import { useTracker } from 'meteor/react-meteor-data';
import { isCreditCardTransaction, Transactions } from '../../../api/transactions/transactions';
import { asNumber, getDateString, isMobile } from '../../../api/helpers';

const {Title, Text} = Typography;

const columns = [
    {
        title: 'Coin',
        dataIndex: 'currency',
        key: 'currency'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        // responsive: ['l'],
    },
    {
        title: 'Amount',
        dataIndex: 'transactionAmount',
        key: 'transactionAmount',
        // responsive: ['l'],
    },
    {
        title: 'Date',
        dataIndex: 'dateStr',
        key: 'dateStr',
        // responsive: ["sm"],
    },
    {
        title: 'Information',
        key: 'action',
        render: (text, record) => (
          <>
              {record.tranId ? <div>TxiD: {record.tranId}</div> : ''}
              {record.network && record.network.transaction_url ?
                <div><a title={record.network.hash} href={record.network.transaction_url}
                           target="_blank">{record.network.hash && record.network.hash.length > 12 ? record.network.hash.substring(0, 12) + '...' : 'Transaction'}</a>
                </div> : ''}
              {isCreditCardTransaction(record) && <div>{record.native_amount?.amount} {record.native_amount?.currency}</div>}
          </>
        )
    },
];

export const TransactionTable = (props) => {
    const {transactions} = useTracker(() => {
        Meteor.subscribe('transactions');
        let query = props.query || {};
        if (props.userId) {
            query.user = props.userId;
        }
        return {
            transactions: Transactions.find( query, { sort: { time: -1 } })
              .fetch()
              .map(transaction => ({
                  ...transaction,
                  dateStr: getDateString(transaction.created_at || transaction.time),
                  status: transaction.status || transaction.type || '',
                  //message: isCreditCardTransaction(transaction) && transaction.cardNumber ? transaction.cardName + ' ' + transaction.cardNumber : null,
                  tranId: isCreditCardTransaction(transaction) ? transaction._id : transaction.tranId,
                  transactionAmount: transaction.transactionAmount ? asNumber(transaction.transactionAmount) : '',
                  key: transaction['_id']
              })) || []
        }
    }, [props.userId])

    if (transactions)
        return (
            <>
                <Table dataSource={transactions} columns={columns} scroll={isMobile() ? { x: 900 } : {}}/>
            </>
        );
};

