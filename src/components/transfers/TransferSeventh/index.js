
import React from 'react'

import './Seventh.css'
import { Accordion } from '../Accordion'

const faqs = [
    {
        title: "Morbi eget nisl pulvinar, pharetra massa eu, laoreet dui.",
        text: "Morbi eget nisl pulvinar, pharetra massa eu, laoreet dui. Sed e, Morbi eget nisl pulvinar, pharetra massa eu, laoreet dui. Sed e"
    },
    {
        title: "Sed eget tellus eu justo efficitur pharetra.",
        text: "Sed eget tellus eu justo efficitur pharetra."
    },
    {
        title: "In sodales lorem ac congue interdum.",
        text: "In sodales lorem ac congue interdum. In sodales lorem ac congue interdum."
    },
    {
        title: "Fusce viverra ante id facilisis lobortis.",
        text: "Fusce viverra ante id facilisis lobortis. Fusce viverra ante id facilisis lobortis."
    },
    {
        title: "Proin mattis nisi eu congue ultricies.",
        text: "Proin mattis nisi eu congue ultricies. Proin mattis nisi eu congue ultricies."
    },
]

export const TransferSeventh = () => {

    return (
        <section className="transfer_seventh text_center">
            <div className="title">
                FAQs
            </div>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <Accordion obj={faq} key={index} arrow />
                ))}
            </div>
        </section>
    )
}