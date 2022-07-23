
import React from 'react'

import './Second.css'
import { Card } from '../Card'

const cards = [
    { img: 'transfers/bank.png', title: "Safeguarded with leading bank", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown." },
    { img: 'transfers/world.png', title: "Regulated around the world", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown." },
    { img: 'transfers/audited.png', title: "Audited regularly", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown." },
    { img: 'transfers/extra.png', title: "Extra-secure transactions", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown." },
    { img: 'transfers/data.png', title: "Data protection", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown." },
    { img: 'transfers/dedicated.png', title: "Dedicated anti-fraud team", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown." },
]

export const TransferSecond = () => {

    return (
        <section className="transfer_second">
            <div className="title text_center">
                Protecting you and your money
            </div>
            <div className="text text_center">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className="cards mt_50">
                {cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </div>
            <div className="font_25 font_600 mt_80 text_center">
                Online scams are the rise. Learn how to stay safe.
            </div>
            <button className="btn active">Learn how to say safe</button>
        </section>
    )
}