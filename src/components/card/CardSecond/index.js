import React from 'react'

import './Second.css'
import { Card } from './Card'
import bgImg from 'assets/img/card/second-bg.png'

const cards = [
    { img: 'box1-1.png', title: 'VARIOUS CURRENCIES', content: 'Freedom to pay in local currency all \n around the globe with the tap of the card \n and low fees.' },
    { img: 'box2-1.png', title: 'ENHANCED SECURITY', content: 'Our Card Includes EMV chip and a \n Designated pin Code for ATM\'s \n withdrawal.' },
    { img: 'box3-1.png', title: 'TRACK YOUR EXPENSES', content: 'Get instant notifications, access \n transaction history and swap currencies \n anytime.' },
    { img: 'box1-2.png', title: 'FLEXIBLE ACCESS', content: 'Provides you the Option to Lock and \n unlock your card instantly and control \n how you spend.' },
    { img: 'box2-2.png', title: 'USE IT WORLDWIDE', content: 'Ready to use in millions of locations \n around the world. Pay with contactless, \n PIN or simply withdraw cash from any \n compatible ATM.' },
    { img: 'box3-2.png', title: 'ONE STOP SHOP', content: 'Manage your crypto and fiat currencies in \n one place, and exchange between \n accounts in seconds.' }
]
export const CardSecond = () => {
    return (
        <section className="card_second" style={{ backgroundImage: `url(${bgImg})` }}>
            <div id="second" className="box_container">
                <div className="box_first">
                    <Card card={cards[0]} />
                    <Card card={cards[3]} />
                </div>
                <div className="box_second mobile_none">
                    <Card card={cards[1]} />
                    <Card card={cards[4]} />
                </div>
                <div className="box_third mobile_none">
                    <Card card={cards[2]} />
                    <Card card={cards[5]} />
                </div>
            </div>
        </section>
    )
}