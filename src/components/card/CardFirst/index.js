
import React, { useEffect } from 'react'

import { isMobile1 } from '../../../hook/useCustomHook'
import { Slider } from './Slider'
import './First.css'
import bgImg from 'assets/img/card/first-bg.png'
import check from 'assets/img/check.svg'

const detailsArray = [
    { detail_1: "Virtual Card", detail_2: "Visa", detail_3: "Multiple Currencies" },
    { detail_1: "Plastic Card", detail_2: "Visa or Mastercard", detail_3: "Enable ATM Withdrawals" },
    { detail_1: "Metal Card", detail_2: "Visa or Mastercard", detail_3: "High spending limits" },
]

export const CardFirst = () => {

    const isMobile = isMobile1()
    let index = 1
    let details = null
    let detail_1 = null
    let detail_2 = null
    let detail_3 = null

    useEffect(() => {
        details = document.querySelectorAll(".details")
        detail_1 = document.querySelector(".detail_1")
        detail_2 = document.querySelector(".detail_2")
        detail_3 = document.querySelector(".detail_3")
        setDetails(index)
    })

    const setDetails = (index) => {
        details[0].classList.add('show')
        details[1].classList.add('show')
        details[2].classList.add('show')
        setTimeout(() => { details[0].classList.remove('show'); details[1].classList.remove('show'); details[2].classList.remove('show'); }, 500)
        detail_1.innerHTML = detailsArray[index]['detail_1']
        detail_2.innerHTML = detailsArray[index]['detail_2']
        detail_3.innerHTML = detailsArray[index]['detail_3']
    }
    const clickHandler = (direction) => {
        if (direction === 'left') {
            index = (index + 2) % 3
            setDetails(index)
        }
        if (direction === 'right') {
            index = (index + 1) % 3
            setDetails(index)
        }
    }

    return (
        <section className="card_first text_center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="text_white main_title">
                Everything you {isMobile ? 'need' : 'ever wanted'} <br />
                is just a plastic {isMobile && <br />} swipe away
            </div>
            <div className="card_btns text_center mobile_none">
                <a href="#second" className="btn active">Learn about PlasBit Cards</a>
                <a href="#third" className="btn bg_white">Compare Card Tiers </a>
            </div>
            {isMobile && <Slider clickHandler={clickHandler} />}
            <div className="text text_white composite">
                <div className="details_container">
                    <span className="details details_first mobile_detail">
                        <img src={check} alt="check" />
                        <span className="detail_1"></span>
                    </span>
                    <span className="details details_middle mobile_none">
                        <img src={check} alt="check" />
                        <span className="detail_2"></span>
                    </span>
                    <span className="details mobile_none">
                        <img src={check} alt="check" />
                        <span className="detail_3"></span>
                    </span>
                </div>
            </div>
            {!isMobile && <Slider clickHandler={clickHandler} />}
            <div className="card_btns text_center order_card">
                <a href="/signup" className="btn bg_white">Order Card </a>
            </div>
        </section>
    )
}