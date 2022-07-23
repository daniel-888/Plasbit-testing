import React from 'react';
import { Form, Input } from 'antd';

export const DepositSuccess = (props) => {
    return (
        <div>
            <h1> Success </h1>
            <Form
                name="deposit"
                initialValues={
                    {
                        amount: props.depositForm.amount ? props.depositForm.amount : 0,
                        type: props.depositForm.type ? props.depositForm.type : 'btc'
                    }
                }
            >
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
            </Form>
        </div>
    );
}

