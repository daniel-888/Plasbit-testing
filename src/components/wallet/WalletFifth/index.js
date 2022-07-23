
import React from 'react'

import './Fifth.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const WalletFifth = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_fifth text_center">
            {!isMobile && <div className="title">
                Get started in a <span>few minutes</span>
            </div>}
            <div className="step_container">
                <div className="step">
                    <img src={getImg('wallet/step-1.png')} alt="" />
                    <p className="text">Create an Account</p>
                </div>
                <div className="dot">
                    <img src={getImg('wallet/dot.png')} alt="" />
                </div>
                <div className="step">
                    <img src={getImg('wallet/step-2.png')} alt="" />
                    <p className="text">Find your account via bank <br />wire or credit card</p>
                </div>
                <div className="dot">
                    <img src={getImg('wallet/dot.png')} alt="" />
                </div>
                <div className="step">
                    <img src={getImg('wallet/step-3.png')} alt="" />
                    <p className="text">Start buying & selling</p>
                </div>
            </div>
            <a href="/wallet" className="btn active">Open a Wallet Now</a>
        </section>
    )
}