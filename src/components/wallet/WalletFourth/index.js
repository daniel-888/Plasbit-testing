
import React from 'react'

import './Fourth.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const WalletFourth = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_fourth" style={{ backgroundImage: `url(${getImg('wallet/fourth_bg.png')})` }}>
            <div className="wallet_container">
                <div className="left_side">
                    <div className="title text_white mobile_center">
                        All your crypto in {isMobile && <br />}<span>One Place</span>
                    </div>
                    <div className="text mobile_center">
                        Tale full control of your crypto and more by {!isMobile && <>storing privately and</>} <br />
                        securely on your own device.
                    </div>
                    <div className="content_container">
                        <img src={getImg('check.svg')} />
                        <div className="sub_container">
                            <div className="sub_title text_blue">
                                Support for 500+ tokens
                            </div>
                            <div className="text">
                                {!isMobile && <>BTC, ETH, USDT, UNI, LINK, BCH, USDC, LTC, and <br />hundreds more</>}
                                {isMobile && <>BTC, ETH, USDT, UNI, LINK, BCH, USDC <br /> LTC, and hundreds more</>}
                            </div>
                        </div>
                    </div>
                    <div className="content_container">
                        <img src={getImg('check.svg')} />
                        <div className="sub_container">
                            <div className="sub_title text_blue">
                                Digital Collectibles
                            </div>
                            <div className="text">
                                {!isMobile && <>Punks, kitties, you name it.Buy, sell, and then store <br /> your NFTs in a single beautiful gallery.</>}
                                {isMobile && <>Punks, kitties, you name it.Buy, sell, and <br /> your NFTs in a single beautiful gallery.</>}
                            </div>
                        </div>
                    </div>
                    <div className="content_container">
                        <img src={getImg('check.svg')} />
                        <div className="sub_container">
                            <div className="sub_title text_blue">
                                Secure Storage
                            </div>
                            <div className="text">
                                {!isMobile && <>Your Keys are protected with Secure Enclave,<br /> biometric authentication & optional cloud backup</>}
                                {isMobile && <>Your Keys are protected with Secure<br /> biometric authentication & optional</>}
                            </div>
                        </div>
                    </div>
                </div>
                {!isMobile && <div className="right_side">
                    <img src={getImg('wallet/fourth_right.png')} />
                </div>}
            </div>
        </section>
    )
}