
import React from 'react'

import './Fifth.css'
import { getImg, useResize } from 'hook/useCustomHook'

const texts = [
    {
        title: "Bank statements",
        texts: [
            { text: "Name and account number" },
            { text: "The money going in and out of your account" }
        ]
    },
    {
        title: "Bank statements",
        texts: [
            { text: "Signature of both parties" },
            { text: "Property address and description" },
            { text: "Dates of ownership" }
        ]
    }
]

export const TransferFifth = () => {

    const { isMobile } = useResize()

    return (
        <section className="transfer_fifth text_center">
            <div className="transfer_container">
                <div className="title_container">
                    <div className="title white">
                        If your money comes from &nbsp;
                    </div>
                    <div className="select">a property sale <div className="arrow"></div></div>
                </div>
                <div className="text white info">
                    Depending on how much you send, we might ask for documents that show where your money comes from. Have these ready to speed up your transfer.
                </div>
                <div className="table">
                    <div className="thead">
                        <div className="left">Documents you may need</div>
                        {!isMobile && <div>Infomation we need to see</div>}
                    </div>
                    <div className="tbody">
                        {texts.map((text, index) => (
                            <div className="row mt_10" key={index}>
                                <div className="document left">
                                    <div>
                                        <img src={getImg('transfers/text.png')} alt="image" />
                                        <div className="font_18 font_bold ml_20">{text.title}</div>
                                    </div>
                                </div>
                                <div className="infomation">
                                    {text.texts.map((text, index) => (
                                        <div key={index} className={index > 0 ? 'mt_20' : ''}>
                                            <img src={getImg('transfers/arrow_right.png')} />
                                            <div className="ml_20 font_18 font_bold">{text.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="btn active">Learn more about documents</button>
            </div>
        </section>
    )
}