import React from 'react';
import { DepositSteps, setDepositStep } from '../../../redux/actions/index';
import { Button, Form, Input } from 'antd';

export const DepositConfirmView = (props) => {
    const confirm = (values) => {
        props.dispatch(setDepositStep(DepositSteps.BITCOIN));
    }
    return (
        <div>
            <h1> Confirm </h1>
            <Form
                name="deposit"
                initialValues={
                    {
                        amount: props.depositForm.amount ? props.depositForm.amount : 0,
                        type: props.depositForm.type ? props.depositForm.type : 'btc'
                    }
                }
                onFinish={confirm}>
                <Form.Item
                    label="Amount:"
                    name="amount"
                    rules={[{required: true, message: 'Please input the amount!'}]}
                >
                    <Input type="number" step="any" min={"0"} disabled/>
                </Form.Item>
                <Form.Item
                    label="Type:"
                    name="type"
                    rules={[{required: true, message: 'Please input the type!'}]}
                >
                    <Input type="text" disabled/>
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

