
import React from 'react'

import './First.css'
import { getImg, useResize } from 'hook/useCustomHook'

export const TransferFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="transfer_first"
            style={isMobile ? { backgroundImage: `url(${getImg('transfers/first_bg_mob.png')})` }
                : { backgroundImage: `url(${getImg('transfers/first_bg.png')})` }}>
            <div className="transfer_container">
                <div className="left mt_50">
                    <div className="text_white main_title mb_0">
                        Trusted all Over <span>World.</span>
                    </div>
                    <div className="text white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className="transfer_btns text_center mt_50">
                        <a href="#second" className="btn active">Track Your Money</a>
                        <a href="#third" className="btn bg_white ml_10">Learn More</a>
                    </div>
                </div>
                <img src={getImg('transfers/first_right.png')} alt="first_right" />
            </div>
        </section>
    )
}