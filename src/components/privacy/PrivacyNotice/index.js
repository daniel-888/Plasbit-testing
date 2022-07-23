
import { StickyContainer, Sticky } from "react-sticky";

import { useResize } from 'hook/useCustomHook';

export const PrivacyNotice = () => {

    const { isMobile } = useResize();

    return (
        <div className="tab_content active">
            <div className="text tab_title">PRIVACY NOTICE</div>
            <div className="tab_text">Updated Oct 28 2021</div>
            <div className="index_content">
                {!isMobile && <StickyContainer>
                    <div className="index">
                        <Sticky>
                            {({ style }) => (
                                <div style={{ ...style }}>
                                    <a href="#scope" className="text link">Scope and consent</a>
                                    <a href="#collect" className="text link">What kind of information do we collect?</a>
                                </div>
                            )}
                        </Sticky>
                    </div>
                </StickyContainer>}
                {isMobile && <div className="index">
                    <div>
                        <a href="#scope" className="text link">Scope and consent</a>
                        <a href="#collect" className="text link">What kind of information do we collect?</a>
                    </div>
                </div>}
                <div className="content">
                    <div id="scope">
                        <div className="text content_title">Scope and consent</div>
                        <div className="content_text">
                            This Privacy Notice (“Notice”) describes the ways PlasBit Inc. (“PlasBit”, “we”, “us”, “our”) collects, stores, uses, and protects information. PlasBit’s services include merchant processing services, websites, mobile applications, products, and any other features, technologies, or functionalities, including customer support (“Services”) offered by us. This Notice applies to www.PlasBit.com and all other PlasBit sites on which it appears (the “Sites”).
                        </div>
                        <div className="content_text">
                            Our privacy practices may vary among the countries or territories in which we operate to reflect local practices and legal requirements. For EU residents, please review our EU Privacy Notice.
                        </div>
                        <div className="content_text">
                            We may process information from the following types of users:
                        </div>
                        <div className="content_text">
                            <ol>
                                <li>Visitors of our Sites;</li>
                                <li>Merchants who sign up for our Services (“Merchants” means any business that uses our Services to process payments, including non-profits that use our Services to accept donations and “Aggregators” that use our Services as a payment services platform for their own Merchants);</li>
                                <li>Shoppers of Merchants (“Shoppers” means individuals who indirectly interface with BitPay when paying a Merchant’s invoice that is forwarded by BitPay to a Merchant during checkout, when requesting a refund from a Merchant, when creating a BitPay account, or when making a donation to a non-profit); BitPay card holders who have signed up for a BitPay debit card</li>
                                <li>PlasBit wallet holders who have opened an account on PlasBit website;</li>
                            </ol>
                        </div>
                    </div>
                    <div id="collect">
                        <div className="text content_title">What kind of information do we collect?</div>
                        <div className="content_subtitle">
                            1. Visitors of our Sites:
                        </div>
                        <div className="content_text">
                            <ul>
                                <li>Technical information, including IP address; the type of browser, devices, and operating systems you use; identifiers associated with the device(s) you use to access our Sites; the pages you visit and the features you use; access dates and times; and if you navigated from or navigate to another website, the address of that website; and information regarding your internet service provider</li>
                                <li>Email address (e.g., when you subscribe to our blog or opt-in to receive other marketing materials)</li>
                                <li>Phone number (e.g., when you contact our sales or media team or opt into our media list)</li>
                                <li>Full name (e.g., when you submit a support request)</li>
                                <li>Country</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}