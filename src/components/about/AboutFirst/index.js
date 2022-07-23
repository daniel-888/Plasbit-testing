
import React from 'react'

import { useResize } from '../../../hook/useCustomHook'
import './First.css'

export const AboutFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="about_first text_center">
            <div className="main_title">
                We <span>excellence </span> meets convenience
            </div>
            <div className="text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{!isMobile && <br />}
                when an unknown printer took a galley of type and scrambled it to make a type{!isMobile && <br />}
                specimen book.
            </div>
            <button className="btn active">
                Join Us
            </button>
        </section>
    )
}