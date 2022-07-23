
import React from 'react'

import './Third.css'
import { getImg, useResize } from 'hook/useCustomHook'

export const TransferThird = () => {

    const { isMobile } = useResize()

    return (
        <section className="transfer_third"
            style={isMobile ? { backgroundImage: `url(${getImg('transfers/third_bg_mob.png')})` }
                : { backgroundImage: `url(${getImg('transfers/third_bg.png')})` }}>
            <div className="third_container">
                <div className="left">
                    <div className="title white">
                        Track your <span>transfer</span> at every step.
                    </div>
                    <div className="text white">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <button className="btn mt_50 white">Get Started</button>
                </div>
                {!isMobile && <img src={getImg('transfers/third_right.png')} />}
            </div>
            {isMobile && <img src={getImg('transfers/third_right_mob.png')} />}
        </section>
    )
}