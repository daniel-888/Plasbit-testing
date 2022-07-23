
import React from 'react'

import { useResize, getImg } from '../../../hook/useCustomHook'
import './Fourth.css'

export const CareerFourth = () => {

    const { isMobile } = useResize()

    return (
        <section className="career_fourth text_center">
            <div className="title mb_20">
                We support the revolution of money
            </div>
            <div className="text">
                Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </div>
            <div className="text mt_40">
                But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem lpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem lpsum.
            </div>
            <img src={getImg('career/fourth_bg.png')} alt="fourth_bg" />
            <div className="title mb_20">
                Steer the ship to the future
            </div>
            <div className="text">
                Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </div>
            <div className="text mt_40">
                But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem lpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem lpsum.
            </div>
        </section>
    )
}