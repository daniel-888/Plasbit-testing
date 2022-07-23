
import React from 'react'

import './Sixth.css'
import { getImg, useResize } from 'hook/useCustomHook'

export const TransferSixth = () => {

    const { isMobile } = useResize()

    return (
        <section className="transfer_sixth text_center mt_50"
            style={isMobile ? { backgroundImage: `url(${getImg('transfers/sixth_bg_mob.png')})` }
                : { backgroundImage: `url(${getImg('transfers/sixth_bg.png')})` }}>
            <div className="title">
                How to transfer money in 3 easy steps
            </div>
            <div className="steps">
                <div className="step text_center">
                    <img src={getImg('transfers/account.png')} alt="image" />
                    <div className="font_25 font_bold mt_50">
                        Create an Account
                    </div>
                    <div className="font_15 font_bold mt_30">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div className="mt_30">
                    <div className="myarrow">
                        <span className="arrow left"></span>
                        <span className="line"></span>
                        <span className="arrow right"></span>
                    </div>
                </div>
                <div className="step text_center">
                    <img src={getImg('transfers/details.png')} alt="image" />
                    <div className="font_25 font_bold mt_50">
                        Emter Details
                    </div>
                    <div className="font_15 font_bold mt_30">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div className="mt_30">
                    <div className="myarrow">
                        <span className="arrow left"></span>
                        <span className="line"></span>
                        <span className="arrow right"></span>
                    </div>
                </div>
                <div className="step text_center">
                    <img src={getImg('transfers/confirm.png')} alt="image" />
                    <div className="font_25 font_bold mt_50">
                        Confirm and Send
                    </div>
                    <div className="font_15 font_bold mt_30">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
            </div>
            <button className="btn active mt_50 ml_auto mr_auto">Get Started</button>
        </section>
    )
}