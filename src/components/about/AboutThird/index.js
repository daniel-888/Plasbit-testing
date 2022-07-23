
import React from 'react'

import { useResize, getImg } from '../../../hook/useCustomHook'
import './Third.css'

export const AboutThird = () => {

    const { isMobile } = useResize()

    return (
        <section className="about_third">
            <div className="left">
                <img src={getImg('about/third_bg.png')} />
            </div>
            <div className="right">
                <div className="title">
                    <span>Who we are</span>
                </div>
                <div className="text">
                    We empower businesses and individuals to adapt, innovate and thrive with the connected payments they deserve.
                </div>
                <div className="text">
                    Our technology makes payments seamless. We provide the fastest, most reliable payments with in-country acquiring, world-class fraud filters and reporting, through one API.
                </div>
                <div className="text">
                    PlasBit launched in 2020, and we now have a team of 85 people across 3 international offices.To date, we have not raised any capital to maintain the ability to execute our long-term strategy and to not be subject to disclosure requirements.
                </div>
                <div className="text">
                    Our flexible payments solutions help global enterprises and individuals thrive financially And it's not just what we build that makes us different. It's how.
                </div>
            </div>
        </section>
    )
}