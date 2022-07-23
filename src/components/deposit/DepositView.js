import React from 'react';
import { DepositFundsView } from './steps/DepositFundsView';
import { DepositConfirmView } from './steps/DepositConfirmView';
import { DepositBitcoinView } from './steps/DepositBitcoinView';
import { DepositSuccess } from './steps/DepositSuccces';
import { DepositSteps } from './../../redux/actions/index';

const DepositView = ({dispatch, currentStep, depositForm}) => {
    const stepComponent = () => {
        switch (currentStep) {
            case DepositSteps.DEPOSIT_FUNDS:
                return <DepositFundsView dispatch={dispatch} depositForm={depositForm}/>;
            case DepositSteps.DEPOSIT_CONFIRMATION:
                return <DepositConfirmView dispatch={dispatch} depositForm={depositForm}/>;
            case DepositSteps.BITCOIN:
                return <DepositBitcoinView dispatch={dispatch} depositForm={depositForm}/>;
            case DepositSteps.DEPOSIT_SUCCESS:
                return <DepositSuccess dispatch={dispatch} depositForm={depositForm}/>;
            default:
                return <h1> default </h1>
        }
    }

    return (
        stepComponent()
    )
}

export default DepositView;
