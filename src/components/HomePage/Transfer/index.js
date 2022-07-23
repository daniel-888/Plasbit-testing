import React, { useEffect, useState } from 'react'
import { useResize, getImg } from '../../../hook/useCustomHook'

import './Transfer.css'
import check from 'assets/img/check.svg'

export const Transfer = () => {
    const [offsetY, setoffsetY] = useState()
    const { isMobile } = useResize()
    const handleScroll = () => setoffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    console.log(offsetY * 0.001)

    return (
        <section className="transfer" style={{ backgroundImage: `url(${isMobile ? getImg('home/transfer/bg_mob.jpg') : getImg('home/transfer/bg.jpg')})` }}>
            <div className="container">
                <div className="transfer_inner">
                    <div className="transfer_img">
                        <img className="coin_1" style={{ left: `${22 - offsetY * 0.01}%`, top: `${40 - offsetY * 0.02}%` }} src={getImg('home/transfer/coin_1.png')} alt="coin" />
                        <img className="coin_2" style={{ right: `${73 - offsetY * 0.02}%`, top: `${37 - offsetY * 0.01}%` }} src={getImg('home/transfer/coin_2.png')} alt="coin" />
                        <img className="coin_3" style={{ right: `${55 - offsetY * 0.02}%`, bottom: `${50 - offsetY * 0.01}%` }} src={getImg('home/transfer/coin_3.png')} alt="coin" />
                        <img className="coin_4" style={{ left: `${70 - offsetY * 0.01}%`, bottom: `${55 - offsetY * 0.03}%` }} src={getImg('home/transfer/coin_4.png')} alt="coin" />
                        <img className="coin_5" style={{ left: `${-10 - offsetY * 0.01}%`, bottom: `${30 - offsetY * 0.01}%` }} src={getImg('home/transfer/coin_5.png')} alt="coin" />
                        <img className="coin_6" style={{ left: `${37 - offsetY * 0.01}%`, bottom: `${54 - offsetY * 0.01}%` }} src={getImg('home/transfer/coin_6.png')} alt="coin" />

                        <div className="bank_img">
                            <img src={getImg('home/transfer/bank.png')} alt="cards" />
                            <span className="circle_bg" style={{ background: `center/cover url(${getImg('home/transfer/circle.png')})` }}></span>
                        </div>
                    </div>
                    <div className="transfer_content">
                        <h2 className="title">
                            Welcome to the future of banking with our <span>Online Wire Transfer Services.</span>
                        </h2>
                        <p className="text">
                            <li>
                                <img src={check} alt="check" />
                                We offer domestic and international wire transfer options to meet your needs.
                            </li>
                            <li>
                                <img src={check} alt="check" />
                                you can initiate, schedule, and check the status of wire transfers all from the convenience of your computer.
                            </li>
                        </p>
                        <div className="btn_group">
                            <a href="/signup" className="btn active">Open Account</a>
                            <a href="/transfers" className="btn">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}