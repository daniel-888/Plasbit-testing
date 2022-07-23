
import React from 'react'

import { useResize, getImg } from '../../../hook/useCustomHook'
import './Fourth.css'

export const AboutFourth = () => {

    const { isMobile } = useResize()

    return (
        <section className="about_fourth">
            <div className="card">
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/operating.png')} />
                    </div>
                    <div className="title">
                        <span>8</span>
                    </div>
                    <div className="text">
                        Years operating
                    </div>
                </div>
                <div className="divider"></div>
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/users.png')} />
                    </div>
                    <div className="title">
                        <span>Over 1M+</span>
                    </div>
                    <div className="text">
                        Users
                    </div>
                </div>
                <div className="divider"></div>
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/members.png')} />
                    </div>
                    <div className="title">
                        <span>100+</span>
                    </div>
                    <div className="text">
                        Team members
                    </div>
                </div>
                <div className="divider"></div>
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/support.png')} />
                    </div>
                    <div className="title">
                        <span>24/7</span>
                    </div>
                    <div className="text">
                        Support
                    </div>
                </div>
            </div>
        </section>
    )
}