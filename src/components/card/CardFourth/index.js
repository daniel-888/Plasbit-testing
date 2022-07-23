import React from 'react'

import { Accordion } from '../Accordion'
import './Fourth.css'

const faqs = [
    {
        title: 'Is Plasbit Card a credit or debit card?',
        content: ["Plasbit Visa Card is a prepaid card. Broadly speaking, prepaid cards are the same as debit cards. The difference is that debit cards are linked to your bank account, but prepaid cards need to be topped up. In our case, you can top up using only cryptocurrency from your plasbit wallet."]
    },
    {
        title: 'How do I apply for plasbit Visa Card?',
        content: [
            "To do so, first sign up for a plasbit.com account and open your  own secured wallet. <br />Next, go to the ‘Wallet’ tab in the dashboard and deposit crypto into your Wallet.",
            "Next, go to the ‘Cards’ tab in the dashboard, Choose the card tier you’re applying for, tap the ‘Get this Card’ button and follow the on-screen instructions.",
            "Finally, pay for the card from your wallet balance.",
            "Now, all you need to do is wait for us to notify you when your card has approved!"
        ]
    },
    {
        title: 'How do I Top-Up my card?',
        content: ["You can top up your card using your crypto from your plasbit  Wallet. <br />Go to the ‘Cards’ tab, tap ‘Funding’, and select your preferred crypto wallet to fund your card from."]
    },
    {
        title: "How long does shipping take?",
        content: ["It typically takes 10 to 14 business days for EU/EEA addresses and up to 4 weeks for APAC addresses."]
    },
    {
        title: "How do I pay using crypto?",
        content: ["Just tap, swipe, or use pin & chip with your plasbit Visa Card. <br />We take care of the crypto to fiat conversion for you automatically when you pay at any merchant."]
    },
    {
        title: "Which exchange rate will you use?",
        content: ["We have competitive exchange rates for both fiat and cryptocurrencies. <br />The exact rates depend on your jurisdiction and card tier. <br />You can read all these details in the plasbit Visa Card Terms and Conditions when you apply for your card."]
    },
    {
        title: "Are there any fees I should be aware of?",
        content: ["Information about fees and limits (i.e.ATM withdrawals, interbank exchange rates, top-ups, etc.) can be found in the ‘Fees & Limits’ section under in the Card page comparison table. <br />Fees vary by card tier, so be sure you’re checking the correct one."]
    },
    {
        title: "With which currencies I can load my card?",
        content: [
            "Plasbit debit card is denominated in USD/EURO and can be loaded with the cardholders’ plasbit wallet. <br />To top it up, you can use Bitcoin, Ethereum, Litecoin, Cardano and USDC that you receive in plasbit wallet, as the card can only be loaded with cryptocurrency."]
    },
]

export const CardFourth = () => {
    return (
        <section className="card_fourth text_center">
            <div className="contain">
                <div className="title fourth_title text_blue">
                    FAQs <span className="mobile_none">about the PlasBit Card</span>
                </div>
                {faqs.map((faq, index) => (
                    <Accordion obj={faq} key={index} arrow={true} />
                ))}
            </div>
        </section>
    )
}