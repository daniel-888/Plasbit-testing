
import React from 'react'

import './First.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const ContactFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="contact_first" style={{ backgroundImage: `url(${getImg('contact_us/first_bg.png')})` }}>
            <div className="contact_container">
                <div className="main_title text_white">
                    Contact <span>Us</span>
                </div>
                <div className="text">
                    {!isMobile && <>Send us an email at <span className="text_blue">support@plasbit.com</span> or fill out the form below and a member of our team will be in<br />
                        touch within one business day.</>}
                    {isMobile && <>Send us an email at <span className="text_blue">support@plasbit.com</span> or<br />
                        fill out the form below and a member of our<br />
                        team will be in touch within one business day.</>}
                </div>
                <div className="text">
                    Already with plasbit and need a faster replay?
                </div>
                <div className="text">
                    {!isMobile && <>Reach out via telegram <span className="text_blue">@plasbit</span> or Whatsapp <span className="text_blue">+44 78 8215 1018</span> or log in to your plasbit dashboard and<br />
                        contact our support via live chat available 24/7.</>}
                    {isMobile && <>Reach out via telegram <span className="text_blue">@plasbit</span> or Whatsapp<br />
                        <span className="text_blue">+44 78 8215 1018</span> or log in to your plasbit<br />
                        dashboard and contact our support via live<br />
                        chat available 24/7.</>}
                </div>
            </div>
        </section>
    )
}