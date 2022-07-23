
import { StickyContainer, Sticky } from 'react-sticky';

export const PrivacyCookie = () => {

    return (
        <div className="tab_content active">
            <div className="text tab_title">COOKIE NOTICE</div>
            <div className="tab_text">Updated Oct 28 2021</div>
            <div className="index_content">
                <StickyContainer>
                    <div className="index">
                        <Sticky>
                            {({ style }) => (
                                <div style={{ ...style }}>
                                    <a href="#scope" className="text link">Scope and consent</a>
                                    <a href="#how" className="text link">How we use cookies</a>
                                </div>
                            )}
                        </Sticky>
                    </div>
                </StickyContainer>
                <div className="content">
                    <div className="text content_title" id="scope">Scope and consent</div>
                    <div className="content_text">
                        This Privacy Notice (“Notice”) describes the ways BitPay Inc. (“BitPay”, “we”, “us”, “our”) collects, stores, uses and protects information. BitPay’s services include merchant processing services, websites, mobile applications, products, and any other features, technologies or functionalities, including customer support (“Services”) offered by us. This Notice applies to www.bitpay.com and all other BitPay sites on which it appears (the “Sites”).
                    </div>
                    <div className="content_text">
                        We may process information from the following types of users:
                    </div>
                    <div className="content_text">
                        <ol>
                            <li>Visitors of our Sites</li>
                            <li>Merchants who sign up for our Services (“Merchants” means any business that uses our Services to process payments, including non-profits that use our Services to accept donations and “Aggregators” that use our Services as a payment services platform for their own Merchants);</li>
                            <li>Shoppers of Merchants (“Shoppers” means individuals who indirectly interface with BitPay when paying a Merchant’s invoice that is forwarded by BitPay to a Merchant during checkout, when requesting a refund from a Merchant, when creating a BitPay account, or when making a donation to a non-profit); BitPay card holders who have signed up for a BitPay debit card</li>
                            <li>BitPay wallet holders who have downloaded and installed the BitPay app on their mobile device; and</li>
                            <li>Payees (e.g., employees, contractors, vendors or exchange customers) who request a payment (“Payout”) via cryptocurrency from a Merchant and create a BitPay account.</li>
                        </ol>
                    </div>
                    <div className="text content_title" id="how">How we use cookies</div>
                    <div className="content_text">
                        We may collect information about your activities on our sites via first and third-party cookies, clear GIFs or web beacons, or through other identifiers or technologies, including similar technologies as they may evolve over time. We refer to these technologies collectively as cookies.
                    </div>
                    <div className="content_text">
                        We may allow third parties to use cookies on our sites. The information collected by cookies may be shared with and used by us, by others acting on our behalf, or by third parties subject to their own privacy policies. Information collected by cookies may be used on this site or on other websites or services, including those that may not be operated by us. Other parties may collect personally identifiable information about an individual consumer’s online activities over time and across different websites when a consumer uses our websites or online services. For more information about our use of cookies, please see our Cookie Policy.
                    </div>
                </div>
            </div>
        </div>
    );
}