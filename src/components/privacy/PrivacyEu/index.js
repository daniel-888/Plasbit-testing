
import { StickyContainer, Sticky } from 'react-sticky';

export const PrivacyEu = () => {

    return (
        <div className="tab_content active">
            <div className="text tab_title">EU PRIVACY NOTICE</div>
            <div className="tab_text">Updated Oct 28 2021</div>
            <div className="index_content">
                <StickyContainer>
                    <div className="index">
                        <Sticky>
                            {({ style }) => (
                                <div style={{ ...style }}>
                                    <a href="#cookie" className="text link">What are cookies?</a>
                                    <a href="#use" className="text link">What cookies do we use?</a>
                                </div>
                            )}
                        </Sticky>
                    </div>
                </StickyContainer>
                <div className="content">
                    <div className="content_text">
                        This Cookie Policy describes the different types of cookies that may be applied by PlasBit Inc. on its website (“Site”). We may change this Cookie Policy at any time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
                    </div>
                    <div className="content_text">
                        If you have questions regarding this Cookie Policy, please contact our Data Protection Officer (DPO) at dpo@PlasBit.com or write to us at PlasBit Inc.
                    </div>
                    <div id="cookie">
                        <div className="text content_title">What are cookies?</div>
                        <div className="content_text">
                            Cookies are a standard feature of websites that allow us to store small amounts of data on your computer about your visit to a website. Cookies help the website owner learn which areas of the website are useful and which areas need improvement. Cookies also improve your experience by, for example, remembering your preferences, such as your language preference or login information.
                        </div>
                        <div className="content_text">
                            Some cookies are required for technical reasons in order for a website to operate, also known as "Strictly Necessary" cookies. Some cookies allow a website to count visits and traffic sources so the site owner can measure and improve the performance of the site, also known as “Analytics” cookies. Some cookies enable a website owner to serve targeted advertisements, also known as “Targeting” cookies.
                        </div>
                    </div>
                    <div id="use">
                        <div className="text content_title">What cookies do we use?</div>
                        <div className="content_text">
                            Our Site uses both first party cookies (which are set by us) and third party cookies (which are set by a server located outside the domain of our Site) for several reasons. The specific types of first and third party cookies served through our Site and the purposes they perform are described in the tables below.
                        </div>
                        <div className="content_text">
                            Strictly Necessary Cookies. These are cookies that make our Site function when you take certain actions, whether you are logging in, managing email preferences, or filling out forms. Since they are essential for our Site to function, we cannot turn them off. You can set your browser to block or alert you about these cookies, but some parts of the Site will then not work. These cookies do not store any personal data.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}