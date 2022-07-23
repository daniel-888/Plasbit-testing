import React, { useState } from 'react'
import { Form, Button, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import './Apply.css'

const layout = {
    wrapperCol: { span: 16 },
    layout: 'vertical'
};

const tailLayout = {
    wrapperCol: { span: 16 },
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export const ApplyNow = () => {

    const [tab, setTab] = useState('description')

    return (
        <div className="apply mt_50">
            <div className="font_18">Plasbit</div>
            <div className="font_30 font_bold">Talent Acquistion Specialist</div>
            <div className="font_15">People Operations - Remotes - Full Time</div>
            <div className={`description ${tab === 'description' ? 'active' : ''}`}>
                <div className="font_20 font_600 mt_20">
                    BitPay, Inc., founded in 2011, is the world’s leading blockchain (cryptocurrency) payments company, serving industry-leading merchants on six continents by providing a seamless, secure cryptocurrency payments experience. BitPay builds powerful tools for accepting, storing, and spending cryptocurrency securely.
                </div>
                <div className="font_20 font_600 mt_20">
                    BitPay is looking for a forward-thinking and proactive Talent Acquisition Specialist to join our People Ops team!  Reporting to the Chief People Officer, the Talent Acquisition Specialist will work with hiring managers and external resources to manage the recruiting process to fulfill the hiring needs of the company.  The ideal candidate will have at least one year of experience managing full-cycle recruitment.  This is a remote opportunity.
                </div>
                <div className="font_20 font_600 mt_40">
                    Responsibilities:
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        Conduct full cycle recruiting including sourcing, scheduling, screening and presenting top talent
                    </li>
                    <li>
                        Build a strong pipeline of candidates and network of passive candidates
                    </li>
                    <li>
                        Develop and maintain close partnerships with hiring managers to gain a full understanding of their team’s recruitment needs
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    Required Skills
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        1-3 years of experience in full cycle recruitment, preferably in technical recruiting
                    </li>
                    <li>
                        Passion for employment branding and marketing activities
                    </li>
                    <li>
                        Ability to handle multiple priorities and achieve goals and objectives
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    What we Offer
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        Work with an extraordinary team of smart, fun, and highly motivated people
                    </li>
                    <li>
                        An exciting, fast-growing tech company with a global presence where you can solve complex problems and make an impact every day
                    </li>
                    <li>
                        Awesome learning and growth opportunities with professional development reimbursement
                    </li>
                </ul>
                <button className="btn active mt_50 ml_auto mr_auto" onClick={() => setTab('appy_form')}>Apply Now</button>
            </div>
            <div className={`appy_form ${tab === 'appy_form' ? 'active' : ''}`}>
                <div className="font_25 font_600">
                    Apply: Talent Acquisition Specialist
                </div>
                <div className="font_15 mt_10 mb_30">* Required fields</div>
                <Form {...layout} name="control-ref" onFinish={() => console.log('called onFinish')}>
                    <Form.Item name="firstName" label="First name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastName" label="Last name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email Address" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="location" label="Location">
                        <Input placeholder="Address" />
                        <Input placeholder="City" style={{ display: 'inline-block', width: '50%', marginTop: 10 }} />
                        <Input placeholder="State" style={{ display: 'inline-block', width: '23%', marginLeft: '1%', marginTop: 10 }} />
                        <Input placeholder="Postal" style={{ display: 'inline-block', width: '25%', marginLeft: '1%', marginTop: 10 }} />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone number" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="resume" label="Resume"
                        valuePropName="fileList"
                        rules={[{ required: true }]}
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/#" listType="pdf">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit Application
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}