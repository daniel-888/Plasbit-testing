
import React from 'react'

import './Second.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const ContactSecond = () => {

    const { isMobile } = useResize()

    return (
        <section className="contact_second">
            <div className="contact_container">
                <img className="vector" src={getImg('contact_us/vector.png')} />
                <div className="left_side">
                    <div className="title">
                        Send Us a <span>Message</span>
                    </div>
                    <div className="control">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="control">
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div className="control">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="control">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="control">
                        <textarea placeholder="Message" />
                    </div>
                    <a href="/contactus" className="btn active">Send Us</a>
                </div>
                <div className="right_side" style={{ backgroundImage: `url(${getImg('contact_us/right_bg.png')})` }}>
                    <div className="title text_white">
                        {!isMobile && <>Contact <br />
                            Information</>}
                        {isMobile && <>Contact Information</>}
                    </div>
                    <div className="contact_detail">
                        <a href="https://goo.gl/maps/CKvFz86WBDTX2jbt6" target="_blank"><img src={getImg('contact_us/pin.png')} /></a>
                        <a href="https://goo.gl/maps/CKvFz86WBDTX2jbt6" target="_blank" className="text text_white">
                            Exchange House, Second Floor,<br />
                            Primrose Street, London EC2A 2EG<br />
                            United Kingdom
                        </a>
                    </div>
                    <div className="contact_detail">
                        <a href="tel:+44 78 8215 1018"><img src={getImg('contact_us/phone.png')} /></a>
                        <a href="tel:+44 78 8215 1018" className="text text_white">
                            +44 78 8215 1018
                        </a>
                    </div>
                    <div className="contact_detail">
                        <a href="mailto: support@plasbit.com"><img src={getImg('contact_us/email.png')} /></a>
                        <a href="mailto: support@plasbit.com" className="text text_white">
                            support@plasbit.com
                        </a>
                    </div>
                    <div className="contact_detail">
                        <a href='https://wa.me/+447882151018' target='_blank'><img src={getImg('contact_us/whatsapp.png')} /></a>
                        <a href='https://wa.me/+447882151018' target='_blank' className="text text_white">
                            +44 78 8215 1018
                        </a>
                    </div>
                    <div className="contact_detail">
                        <a href="https://telegram.me/plasbit" target='_blank'><img src={getImg('contact_us/telegram.png')} /></a>
                        <a href="https://telegram.me/plasbit" target='_blank' className="text text_white">
                            @plasbit
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}