
import React from 'react'

import './Second.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const WalletSecond = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_second" style={{ backgroundImage: `url(${getImg('wallet/second_bg.png')})` }}>
            <div className="wallet_container">
                <div className="left_side">
                    {!isMobile && <div className="head_title">
                        <img src={getImg('wallet/key.png')} /> <span className="text_blue">Security</span>
                    </div>}
                    <div className="title text_white mobile_title">
                        Multi-factor <span>security</span>
                    </div>
                    <div className="text mobile_text">
                        Websites and exchanges get hacked. {!isMobile && <>With BitPay’s open source,</>} <br />
                        non-custodial wallet, not even BitPay {!isMobile && <>can take your money.</>}
                    </div>
                    <div className="text">
                        Use milti-sig address to split payment {!isMobile && <>authorization across up to 12</>} <br />
                        devices or trusted copayers.
                    </div>
                    <div className="text">
                        Leverage private key encryption, PINs, {!isMobile && <>and biometric authentication for</>} <br />
                        enhanced security.
                    </div>
                    <a href="/wallet" className="btn text_white">Learn More</a>
                </div>
                <div className="right_side">
                    <img src={getImg('wallet/second_right.png')} />
                </div>
            </div>
        </section>
    )
}