import React from 'react'

import './Help.css'

const getImg = (img) => {
    return require(`assets/img/card/${img}`).default
}

export const CardHelp = () => {
    return (
        <section className="card_fifth" style={{ backgroundImage: `url(${getImg('fifth-bg.png')})` }}>
            <div className="card_container">
                <div className="left_content">
                    <div className="help_title">
                        Order your virtual or <br />
                        plastic card right now
                    </div>
                    <a href="/signup" className="btn bg_white text_blue">Order Now</a>
                </div>
                <img className="mobile_none" src={getImg('hand.png')} alt="" />
            </div>
        </section>
    )
}