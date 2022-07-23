
import React from 'react'

import { useResize } from '../../../hook/useCustomHook'
import './Third.css'

export const CareerThird = () => {

    const { isMobile } = useResize()

    return (
        <section className="career_third">
            <div className="card">
                <div className="font_25 font_600">TOTAL RAISED</div>
                <div className="title mt_20 mb_10">
                    <span>$72</span>
                </div>
                <div className="font_30 light_blue">
                    Million
                </div>
            </div>
            <div className="card">
                <div className="font_25 font_600">TOTAL EMPLOYEES</div>
                <div className="title mt_20 mb_10">
                    <span>85</span>
                </div>
                <div className="font_30 light_blue">
                    People
                </div>
            </div>
            <div className="card">
                <div className="font_25 font_600">COMPANY AGE</div>
                <div className="title mt_20 mb_10">
                    <span>10</span>
                </div>
                <div className="font_30 light_blue">
                    Years
                </div>
            </div>
        </section>
    )
}