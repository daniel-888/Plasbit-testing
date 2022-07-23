
import React from 'react'

import './First.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const WalletFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_first">
            <div className="left_side">
                <img src={getImg('wallet/first_left.png')} className="left_bg" />
                <div className="main_title">
                    {!isMobile && <>
                        The <span>secure</span> wallet to <br />
                        store crypto yourself
                    </>}
                    {isMobile && <>
                        The <span>secure</span> wallet <br />
                        to store crypto <br />
                        yourself
                    </>}
                </div>
                {!isMobile && <>
                    <div className="text">
                        <img src={getImg('wallet/check.png')} /> <div>All your digital assets in one place.</div>
                    </div>
                    <div className="text">
                        <img src={getImg('wallet/check.png')} /> <div>Fast, Secure and Easy to use. It suits the needs <br /> of a wide spectrum of users.</div>
                    </div>
                    <div className="text">
                        <img src={getImg('wallet/check.png')} /> <div>Be safe from malware Use two-factor <br /> authentication.</div>
                    </div>
                    <div className="wallet_btns">
                        <a href="/wallet" className="btn active">Open Wallet Now</a>
                        <a href="/wallet" className="btn">Learn More</a>
                    </div>
                </>}
            </div>
            <div className="right_side">
                {!isMobile && <img src={getImg('wallet/first_right.png')} />}
                {isMobile && <img src={getImg('wallet/first_mobile.png')} />}
            </div>
            {isMobile &&
                <a href="/wallet" className="btn active">Open Wallet Now</a>
            }
        </section>
    )
}