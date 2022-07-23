import React from 'react';
import { DepositSteps, setDepositStep } from '../../../redux/actions/index';

export const DepositBitcoinView = (props) => {
    const submit = (ev) => {
        ev.preventDefault();
        props.dispatch(setDepositStep(DepositSteps.DEPOSIT_SUCCESS));
    }

    return (
        <div>
            <h1> deposit bitcoins </h1>
            <button onClick={submit}> deposit </button>
        </div>
    );
}

