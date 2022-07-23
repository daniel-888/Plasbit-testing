import React from 'react';
import { DepositSteps, setDepositForm, setDepositStep } from '../../../redux/actions/index';
import { Button, Form, Input } from 'antd';

export const DepositFundsView = (props) => {
    const submitDeposit = (values) => {
        props.dispatch(setDepositForm(values));
        props.dispatch(setDepositStep(DepositSteps.DEPOSIT_CONFIRMATION));
    }

    return (
        <div>
            <Form
                name="deposit"
                initialValues={
                    {
                        amount: props.depositForm.amount ? props.depositForm.amount : 0,
                        type: props.depositForm.type ? props.depositForm.type : 'btc'
                    }
                }
                onFinish={submitDeposit}>
                <Form.Item
                    label="Amount:"
                    name="amount"
                    rules={[{required: true, message: 'Please input the amount!'}]}
                >
                    <Input type="number" step="any" min={"0"}/>
                </Form.Item>
                <Form.Item
                    label="Type:"
                    name="type"
                    rules={[{required: true, message: 'Please input the type!'}]}
                >
                    <Input type="text"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

