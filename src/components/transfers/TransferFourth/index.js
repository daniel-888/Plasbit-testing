
import React from 'react'

import './Fourth.css'
import { getImg } from 'hook/useCustomHook'
import { Accordion } from '../Accordion'

const faqs = [
    { title: '1. Create a free Wise account', text: 'You need to create a free wise account You need to create a free wise account. You need to create a free wise account. You need to create a free wise account' },
    { title: '2. Check if you need to pay in-branch', text: 'Check if you need to pay in-branch' },
    { title: '3. Set up your transfer', text: 'Set up your transfer' },
    { title: '4. Send us verification documents', text: 'Send us verification documents' },
    { title: '5. Pay for your transfer', text: 'Pay for your transfer' },
    { title: '6. That’s it', text: 'That’s it' }
]

export const TransferFourth = () => {

    return (
        <section className="transfer_fourth text_center mt_30">
            <div className="font_25 font_bold light_blue">
                How it works
            </div>
            <div className="title">
                How to send large amounts
            </div>
            <div className="tansfer_container">
                <img className="mt_50" src={getImg('transfers/fourth_left.png')} alt="img" />
                <div className="faqs ml_50">
                    {faqs.map((faq, index) => (
                        <Accordion obj={faq} key={index} arrow />
                    ))}
                    <button className="btn active mt_30 ml_auto">Download the full guide</button>
                </div>
            </div>
        </section>
    )
}