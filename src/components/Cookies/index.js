import React, { useEffect, useState } from 'react';
import { Modal, Switch, Tabs, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

import './Cookies.css';

export const Cookies = (props) => {
    const [cookieVisible, setCookieVisible] = useState('hidden');
    const CookieBannerDisplayed = () => {
        setCookieVisible('hidden');
        localStorage.setItem('cookieBannerDisplayed', 'true');
    };
    const [isModalVisible, setIsModalVisible] = useState(false);

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    useEffect(() => {
        if (!localStorage.getItem('cookieBannerDisplayed')) {
            setCookieVisible('visible');
        }
    }, []);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const { TabPane } = Tabs;
    const buttonStyle = { margin: '1em auto', padding: '5px 20px', borderRadius: '10px', fontSize: '15px', height: 'auto' };
    const closeButtonStyle = { float: 'right', margin: '0.6em auto', padding: '5px 20px', border: 'none', fontSize: '20px', cursor: 'pointer' };
    return (
        <>
            <div style={{ visibility: cookieVisible }}>
                <div className="cookie-container" style={{ visibility: cookieVisible }}>
                    <Row>
                        <Col xs={{ span: 24 }}
                            md={{
                                span: 14,
                                offset: 1
                            }} style={{ alignSelf: 'center' }}>
                            <span>We use cookies to collect information about authentication, your device, browsing actions, and patterns. To learn more, view our </span>
                            <Link to="/">
                                <span>Privacy Notice</span>
                            </Link>
                            <span> and our </span>
                            <Link to="/">Cookie Policy.</Link>
                            <span> By clicking "I accept" or by using our website, you agree to our use of cookies. To manage our preferences click on </span><a onClick={showModal}> Manage
                                Cookies.</a>
                        </Col>
                        <Col xs={{ span: 12 }}
                            md={{
                                span: 3,
                                offset: 1
                            }}>
                            <Button ghost style={{
                                ...buttonStyle,
                                borderColor: '#0e204e'
                            }} onClick={showModal}>
                                Manage Cookies
                            </Button>
                        </Col>
                        <Col xs={{ span: 12 }}
                            md={{
                                span: 3,
                                offset: 2
                            }} style={{ display: 'flex' }}>
                            <Button ghost style={buttonStyle} onClick={CookieBannerDisplayed}>
                                I Accept
                            </Button>
                            <p style={closeButtonStyle} onClick={() => setCookieVisible('hidden')}>X</p>
                        </Col>
                    </Row>
                    <Modal title="Cookie Preference Center" visible={isModalVisible} onOk={handleOk}
                        onCancel={handleCancel}
                        width={625} cancelButtonProps={{ style: { display: 'none' } }}
                        okButtonProps={{ style: { backgroundColor: 'white', color: '#0e204e', border: '1px sold #0e204e', borderRadius: '5px', fontSize: '15px', fontWeight: 'bold' } }}
                        okText="Save Changes">
                        <Tabs tabPosition="left">
                            <TabPane style={{
                                backgroundColor: '#ebedf9',
                                height: '250px',
                                overflow: 'auto',
                                padding: '20px'
                            }}
                                tab="COKIE POOLICY" key="1">
                                <p>
                                    <span>When you visit a website, it may store or retrieve information on your browser, mostly in the form of cookies. Please review our </span><Link onClick={handleCancel}
                                        to="/"><span>Cookie Policy</span> </Link>
                                    <span>for information on the categories and specific cookies we use. You can click on the different category headings below to change our default settings. However, you should know that blocking some types of cookies may impact your experience on the site and the services we are able to offer you.</span></p>
                                <p>
                                    <b><span>Do Not Sell My Personal Information</span><br /><br /></b></p>
                                <p>
                                    <span>We do not sell information about you for monetary consideration to anyone. Please visit our </span><Link onClick={handleCancel}
                                        to="/"><span>Privacy Notice</span> </Link>
                                    <span>to learn about our privacy practices, including when and why we share information about you.</span>
                                </p>
                            </TabPane>
                            <TabPane style={{
                                backgroundColor: '#ebedf9',
                                height: '250px',
                                padding: '20px'
                            }}
                                tab="STRICTLY NECESSARY COOKIES" key="2">
                                <p><b>
                                    Strictly Necessary Cookies
                                </b>
                                </p>
                                <p>
                                    These cookies are necessary for the site to function:
                                </p>
                                <p>Cloudflare (_cfduid)</p>
                                <p>Connect_Sid</p>

                            </TabPane>
                            <TabPane style={{
                                backgroundColor: '#ebedf9',
                                height: '250px',
                                padding: '20px'
                            }}
                                tab="ANALYTICS COOKIES" key="3">
                                <p><b>
                                    Analytics Cookies
                                </b></p>
                                <Switch defaultChecked onChange={onChange} />
                                <p></p>
                                <p>These cookies enable us to measure and improve the performance of our site.</p>
                                <p>
                                    <b>
                                        Cookies Used
                                    </b>
                                </p>
                                <p>
                                    Google Analytics
                                </p>
                            </TabPane>
                            <TabPane style={{
                                backgroundColor: '#ebedf9',
                                height: '250px',
                                padding: '20px'
                            }}
                                tab="TARGETING COOKIES" key="4">
                                <p><b>Targeting Cookies</b></p>
                                <Switch> defaultChecked onChange={onChange}</Switch>
                                <p></p>
                                <p>These cookies enable us to understand how our site is of interest to visitors and/or show visitors relevant advertising.</p>
                                <p><b>Cookies Used</b></p>
                                <p>LinkedIn Advertising</p>
                                <p>Google AdWords</p>
                                <p>Facebook Advertising</p>
                                <p>Marketo Munchkin (_mkto_trk)</p>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </div>
            </div>
        </>
    );
};
