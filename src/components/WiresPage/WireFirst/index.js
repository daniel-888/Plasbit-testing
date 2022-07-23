import React from 'react'
import { Form, Button, Select, Input, Divider } from 'antd';

import './First.css'

const { Option } = Select;

const layout = {
    wrapperCol: { span: 16 },
    layout: 'vertical'
};

const tailLayout = {
    wrapperCol: { span: 16 },
};

export const WireFrist = () => {

    return (
        <div>
            <div className="text">
                Transfer Completion: 0-3 business days
            </div>
            <div className="text mt_10">
                Transfer Fee: 5% of the amount transferred
            </div>
            <div className="text mt_10">
                Min amount EUR 1,000.00 per transaction.<br />
                Max amount EUR 50,000.00 per transaction.<br />
                Max amount EUR 50,000.00 per day.<br />
                Max amount EUR 300,000.00 for the last 30 days.
            </div>
            <div className="d_flex mt_10 align_items_center">
                <div className="font_25 font_bold red">ATTENTION:</div>
                <div className="text ml_10">
                    please make sure all your bank details are correct.
                </div>
            </div>
            <div className="text">
                A fee of 50 EUR is charged for a transfer confirmation.
            </div>

            <div className="font_30 font_bold mt_50">
                Receiving account bank details:
            </div>
            <div className="text mt_20">
                Recipient Account type:
            </div>
            <Select defaultValue="private" style={{ width: 500 }} onChange={() => console.log("account type changed.")}>
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
            </Select>
            <div className="text">
                Recipient Account Name:
            </div>
            <Input style={{ width: 500 }} placeholder="Full name of the account" />
            <div className="text">
                Bank name:
            </div>
            <Input style={{ width: 500 }} placeholder="Full bank name" />
            <div className="text">
                Account number or IBAN:
            </div>
            <Input style={{ width: 500 }} placeholder="For example: GB29 NWBK 6000 1111 2222 33" />
            <div className="text">
                Receiver Bank Address:
            </div>
            <Input style={{ width: 500 }} placeholder="Full bank address - street, city, country and post code" />
            <div className="text">
                Receiver Bank BIC/SWIFT Code:
            </div>
            <Input style={{ width: 500 }} placeholder="For example- BARCUS3MXXX" />

            <Divider />

            <Form {...layout} name="control-ref" onFinish={() => console.log('called onFinish')}>
                <Form.Item name="wallet" label="Choose wallet">
                    <Select
                        style={{ width: 350 }}
                        onChange={() => console.log("account type changed.")}
                    >
                        <Option value="btc">BITCOIN (0 BTC)</Option>
                        <Option value="eth">ETHEREUM (0 ETH)</Option>
                        <Option value="ada">CARDANO (0 ADA)</Option>
                        <Option value="LTC">LITECOIN (0 LTC)</Option>
                        <Option value="usdc">USDC (0 USDC)</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="currency" label="Choose currency">
                    <Select
                        style={{ width: 350 }}
                        onChange={() => console.log("currency changed.")}
                    >
                        <Option value="usd">United States Dollar (USD)</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="gdp">GBP</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="amount" label="AMOUNT OF TRANSFER" rules={[{ required: true }]}>
                    <Input suffix="USD" style={{ width: 200 }} />
                </Form.Item>
                <Form.Item name="fee" label="Fee">
                    <Input suffix="USD" style={{ width: 200 }} disabled />
                </Form.Item>
                <Form.Item name="debitedAmount" label="Amount debited">
                    <Input suffix="USD" style={{ width: 200 }} disabled />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}