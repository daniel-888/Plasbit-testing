
import React from 'react'

import { getImg } from '../../../hook/useCustomHook'
import './Second.css'

export const CareerSecond = () => {


    return (
        <section className="career_second">
            <div className="left">
                <img src={getImg('career/second_bg.png')} />
            </div>
            <div className="right">
                <div className="title mb_20">
                    About Us
                </div>
                <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="title mb_20 mt_50">
                    Our Mission
                </div>
                <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                </div>
            </div>
        </section>
    )
}