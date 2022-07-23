
import React from 'react'

import './Third.css'
import { getImg, useResize } from '../../../hook/useCustomHook'

export const WalletThird = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_third" style={{ backgroundImage: `url(${getImg('wallet/third_bg.png')})` }}>
            <div className="wallet_container">
                {!isMobile && <div className="left_side">
                    <img src={getImg('wallet/third_left_1.png')} />
                </div>}
                <div className="right_side">
                    <div className="title">
                        <span>Users Can Easily Manage</span> <br /> Assets on Multiple Chains
                    </div>
                    <div className="text">
                        Simultaneously support 20 wallet {!isMobile && <>types including: BTC, ETH, HECO, </>}<br />
                        DOGE, XRP, DOT, KSM, BCH, LTC, ETC, {!isMobile && <>TRX, XTZ, EOS, ATOM, BCH and more.</>}
                    </div>
                    <div className="text">
                        Multiple functionalities including {!isMobile && <>managing ERC721 NFTs, and </>}<br />
                        supporting 13 stable coins such as {!isMobile && <>assets on ERC20, TRC10, TRC20 EOS,</>}<br />
                        ONT tokens, and always more to {!isMobile && <>come.</>}
                    </div>
                </div>
                {isMobile && <div className="left_side mobile">
                    <img src={getImg('wallet/third_left_1.png')} />
                </div>}
            </div>
        </section>
    )
}