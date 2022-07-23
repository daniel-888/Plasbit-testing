
import { StickyContainer, Sticky } from "react-sticky";

import { useResize } from 'hook/useCustomHook';

export const LegalTerm = () => {

    const { isMobile } = useResize();

    return (
        <div className="tab_content active">
            <div className="text tab_title">TERMS OF USE</div>
            <div className="tab_text">Updated Oct 28 2021</div>
            <div className="index_content">
                {!isMobile && <StickyContainer>
                    <div className="index">
                        <Sticky>
                            {({ style }) => (
                                <div style={{ ...style }}>
                                    <a href="#scope" className="text link">Merchant Terms of Use</a>
                                    <a href="#collect" className="text link">Wallet Terms of Use</a>
                                </div>
                            )}
                        </Sticky>
                    </div>
                </StickyContainer>}
                {isMobile && <div className="index">
                    <div>
                        <a href="#scope" className="text link">Merchant Terms of Use</a>
                        <a href="#collect" className="text link">Wallet Terms of Use</a>
                    </div>
                </div>}
                <div className="content">
                    <div id="scope">
                        <div className="text content_title">Scope and consent</div>
                        <div className="content_text">
                            These Merchant Terms of Use (the “Terms”) govern the use of the products, services or any other features, technologies or functionalities related to merchant payment acceptance services (the "Acceptance Services") provided by BitPay, Inc. (“BitPay”, “we”, “our”, or “us”) through BitPay’s website, API or through any other means to you (“Merchant”, “you” or “your”). By using the Acceptance Services, you accept these Terms and agree to be bound by them, confirm that you have read, understood, and accepted all of the provisions contained herein, including, without limitation, Section 18.7, Governing Law; Arbitration; Waiver of Class Action.
                        </div>
                        <div className="content_subtitle">
                            1. Our Services
                        </div>
                        <div className="content_text">
                            BitPay is a blockchain/cryptocurrency payment processor that enables you to accept cryptocurrencies as a payment method in exchange for goods or services you sell to your customers (“Shoppers”).
                        </div>
                        <div className="content_text">
                            BitPay is not a cryptocurrency exchange, nor does it provide cryptocurrency custody as part of the Acceptance Services. The Acceptance Services are only available to businesses that sell products or services and registered charitable organizations that accept donations.
                        </div>
                        <div className="content_text">
                            By using the Acceptance Services, you authorize BitPay to act as your agent and to take any and all actions that we think are necessary or desirable to provide the Acceptance Services and to comply with applicable laws and regulations. Payment by a Shopper to BitPay is considered the same as payment made directly to you and limits the Shopper's outstanding obligations to the extent of the payment.
                        </div>
                        <div className="content_subtitle">
                            2. Our Regulatory Compliance
                        </div>
                        <div className="content_text">
                            BitPay is a U.S. legal entity and is subject to U.S. laws and regulations. This includes the Bank Secrecy Act, the economic and trade sanctions programs administered by the Office of Foreign Assets Control (OFAC) of the United States Department of the Treasury, the USA PATRIOT Act, and other anti-money laundering (AML) and anti-terrorist financing (ATF) laws. BitPay is also a registered Money Service Business with the Financial Crime Enforcement Network of the U.S. Department of the Treasury (FinCEN) and is a licensed money transmitter in the U.S. states where applicable law requires it to be licensed. As required by applicable laws and regulations, BitPay maintains a comprehensive AML/ATF/Sanctions compliance program.
                        </div>
                    </div>
                    <div id="collect">
                        <div className="text content_title">Wallet Terms of Use</div>
                        <div className="content_text">
                            This is a binding Agreement between BitPay Inc. (“BitPay” or “We”) and the person, persons, or entity (“You” or “Your”) using the service, Software, or application (“Software”).
                        </div>
                        <div className="content_subtitle">
                            1. Rights and Obligations
                        </div>
                        <div className="content_text">
                            BitPay provides the Software solely on the terms and conditions set forth in this Agreement and on the condition that You accept and comply with them. By using the Software You (a) accept this Agreement and agree that You are legally bound by its terms; and (b) represent and warrant that: (i) You are of legal age to enter into a binding agreement; and (ii) if You are a corporation, governmental organization or other legal entity, You have the right, power and authority to enter into this Agreement on behalf of the corporation, governmental organization or other legal entity and bind them to these terms.
                        </div>
                        <div className="content_text">
                            This Software functions as a free, open source, and multi-signature digital wallet. The Software does not constitute an account where We or other third parties serve as financial intermediaries or custodians of Your cryptocurrencies(s).
                        </div>
                        <div className="content_subtitle">
                            2. Gift Cards
                        </div>
                        <div className="content_text">
                            Gift Cards ("GCs") sold by BitPay Inc., an authorized and independent reseller of GCs, through the software are subject to the following terms. Except as required by law, GCs cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods or services at the merchant's website, physical location, or certain of its affiliated websites. For complete terms and conditions, please read the merchant's gift card terms and conditions. GCs trademarks and copyrights belong to the merchant owners or its affiliates. ALL SALES ARE FINAL, AND NO REFUNDS WILL BE PROVIDED FOR ANY GC. Please contact the GC merchant directly.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}