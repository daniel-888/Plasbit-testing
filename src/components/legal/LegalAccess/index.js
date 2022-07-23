
import { StickyContainer, Sticky } from "react-sticky";

import { useResize } from 'hook/useCustomHook';

export const LegalAccess = () => {

    const { isMobile } = useResize();

    return (
        <div className="tab_content active">
            <div className="text tab_title">ACCESSIBILITY STATEMENT</div>
            <div className="tab_text">Updated Oct 28 2021</div>
            <div className="index_content">
                <div className="content_text">
                    BitPay is committed to making our website's content accessible and user friendly to everyone. If you have difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at support@plasbit.com with "Disabled Access" in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly.
                </div>
            </div>
        </div >
    );
}