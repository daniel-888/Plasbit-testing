import React, { useState } from 'react';
import { CardTransactionTable } from './CardTransactionTable';
import { TransferTransactionTable } from './TransferTransactionTable';
import './CardTransactions.css'

export const CardTransactionView = (props) => {
  const [mode, setMode] = useState("card");

  const handleChange = (val) => {
    setMode(val);
  }

  return (
    <div className='card_transactions'>
      <div className="font_30 font_bold">Card Transactions</div>
      {mode == 'card' &&
        <CardTransactionTable mode={mode} setMode={setMode} handleChange={handleChange} />
      }

      {mode != 'card' &&
        <TransferTransactionTable mode={mode} setMode={setMode} handleChange={handleChange} />
      }

    </div>
  );
};
