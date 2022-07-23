
import React from 'react'

import { useResize } from '../../../hook/useCustomHook'
import './First.css'

export const CareerFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="career_first text_center">
            <div className="main_title">
                We never {isMobile && <br />}dream about success. <br />
                <span>We work for it.</span>
            </div>
            <div className="font_38 mt_50 font_600 dark_blue">
                Help build the {isMobile && <br />}future of payments
            </div>
            <button className="btn active">
                View Open Positions
            </button>
        </section>
    )
}