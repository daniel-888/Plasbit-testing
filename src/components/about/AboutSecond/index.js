
import React from 'react'

import { useResize } from '../../../hook/useCustomHook'
import { Card } from './Card'
import './Second.css'

const cards = [
    { img: 'about/vission.png', title: 'Vission', content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { img: 'about/mission.png', title: 'Mission', content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { img: 'about/target.png', title: 'Target', content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
]

export const AboutSecond = () => {

    const { isMobile } = useResize()

    return (
        <section className="about_second text_center">
            <div className="card_container">
                {cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </div>
        </section>
    )
}