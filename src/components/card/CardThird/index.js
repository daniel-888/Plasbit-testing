import React, { useState } from 'react'

import { useResize } from '../../../hook/useCustomHook'
import { Card } from './Card'
import { CardMobile } from './CardMobile'
import './Third.css'

const cards = [
    {
        "title": "PlasBit Virtual",
        "img": "card-grey.png",
        "limits": [
            {
                "text": "Load per day from Plasbit wallet",
                "value": "$25,000",
                "show": true
            },
            {
                "text": "POS purchases per day Limit",
                "value": "$5,000",
                "show": true
            },
            {
                "text": "Load per month from Plasbit wallet",
                "value": "$50,000",
                "show": true
            },
            {
                "text": "Load per year",
                "value": "$100,000",
                "show": false
            },
            {
                "text": "Max remaining card balance",
                "value": "$100,000",
                "show": false
            },
            {
                "text": "Single POS purchase",
                "value": "$20,000",
                "show": false
            },
            {
                "text": "POS purchase count per day",
                "value": "20",
                "show": false
            }
        ],
        "fees": [
            {
                "text": "Card Load from Plasbit Wallet",
                "value": "5 %",
                "show": true
            },
            {
                "text": "Currency exchange",
                "value": "3 %",
                "show": true
            },
            {
                "text": "Card monthly fee",
                "value": "$19.90 ",
                "show": true
            },
            {
                "text": "Card unload to Plasbit wallet",
                "value": "No fee",
                "show": false
            },
            {
                "text": "POS purchase in card currency",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Card load time",
                "value": "Instantly",
                "show": false
            },
            {
                "text": "Chargeback",
                "value": "$19.99",
                "show": false
            },
            {
                "text": "Card creation",
                "value": "$299",
                "show": false
            },
            {
                "text": "Valid for",
                "value": "3 Years",
                "show": false
            }
        ]
    },
    {
        "title": "PlasBit Pro",
        "img": "card-blue.png",
        "limits": [
            {
                "text": "Load per day from Plasbit wallet",
                "value": "$50, 000 ",
                "show": true
            },
            {
                "text": "POS purchases per day",
                "value": "$5, 000",
                "show": true
            },
            {
                "text": "Single ATM withdrawal",
                "value": "$500 ",
                "show": true
            },
            {
                "text": "Load per month from Plasbit wallet",
                "value": "$50, 000",
                "show": false
            },
            {
                "text": "Load per year from Plasbit wallet",
                "value": "$100, 000",
                "show": false
            },
            {
                "text": "Max remaining card balance",
                "value": "$100, 000",
                "show": false
            },
            {
                "text": "ATM withdrawals per day",
                "value": "$2, 500",
                "show": false
            },
            {
                "text": "ATM withdrawal count per day",
                "value": "5",
                "show": false
            },
            {
                "text": "ATM withdrawals per year",
                "value": "$100, 000 ",
                "show": false
            },
            {
                "text": "Single POS purchase",
                "value": "$20, 000",
                "show": false
            },
            {
                "text": "POS purchase count per day",
                "value": "20",
                "show": false
            }
        ],
        "fees": [
            {
                "text": "Card Load from Plasbit Wallet",
                "value": "5 %",
                "show": true
            },
            {
                "text": "Currency exchange",
                "value": "3 %",
                "show": true
            },
            {
                "text": "Card monthly fee",
                "value": "$29.90 ",
                "show": true
            },
            {
                "text": "Card unload to Plasbit wallet",
                "value": "No fee",
                "show": false
            },
            {
                "text": "POS purchase in card currency",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Card load time",
                "value": "Instantly",
                "show": false
            },
            {
                "text": "Chargeback",
                "value": "$19.99",
                "show": false
            },
            {
                "text": "Card creation ",
                "value": "$499",
                "show": false
            },
            {
                "text": "Valid for",
                "value": "3 Years",
                "show": false
            },
            {
                "text": "ATM withdrawal in USD",
                "value": "2.5",
                "show": false
            },
            {
                "text": "PIN change in ATM",
                "value": "$1",
                "show": false
            },
            {
                "text": "PIN view",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Balance check in ATM",
                "value": "$1",
                "show": false
            },
            {
                "text": "Card reissue",
                "value": "$49.99",
                "show": false
            }
        ]
    },
    {
        "title": "PlasBit Premium",
        "img": "card-black.png",
        "limits": [
            {
                "text": "Load per day from Plasbit wallet",
                "value": "$100, 000",
                "show": true
            },
            {
                "text": "POS purchases per day",
                "value": "$30, 000",
                "show": true
            },
            {
                "text": "Single ATM withdrawal",
                "value": "$10, 000",
                "show": true
            },
            {
                "text": "Load per month from Plasbit wallet",
                "value": "$300, 000",
                "show": false
            },
            {
                "text": "Load per year from Plasbit wallet",
                "value": "$1, 000, 000",
                "show": false
            },
            {
                "text": "Max remaining card balance",
                "value": "$500, 000",
                "show": false
            },
            {
                "text": "ATM withdrawals per day",
                "value": "$30, 000",
                "show": false
            },
            {
                "text": "ATM withdrawal count per day",
                "value": "3",
                "show": false
            },
            {
                "text": "ATM withdrawals per year",
                "value": "$300, 000 ",
                "show": false
            },
            {
                "text": "Single POS purchase",
                "value": "$30, 000",
                "show": false
            },
            {
                "text": "POS purchases per month",
                "value": "$300, 000",
                "show": false
            },
            {
                "text": "POS purchase count per day",
                "value": "10",
                "show": false
            }
        ],
        "fees": [
            {
                "text": "Card Load from Plasbit Wallet",
                "value": "8 %",
                "show": true
            },
            {
                "text": "Currency exchange",
                "value": "No fee(interbank rate)",
                "show": true
            },
            {
                "text": "Card monthly fee",
                "value": "$39.90 ",
                "show": true
            },
            {
                "text": "Card unload to Plasbit wallet",
                "value": "Not available",
                "show": false
            },
            {
                "text": "POS purchase in card currency",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Card load time",
                "value": "48 hours ",
                "show": false
            },
            {
                "text": "Chargeback",
                "value": "$19.99",
                "show": false
            },
            {
                "text": "Card creation",
                "value": "$999",
                "show": false
            },
            {
                "text": "Valid for",
                "value": "4 Years",
                "show": false
            },
            {
                "text": "ATM withdrawal in any currency",
                "value": "1 %",
                "show": false
            },
            {
                "text": "PIN change in ATM",
                "value": "$1",
                "show": false
            },
            {
                "text": "PIN view",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Balance check in ATM",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Card statement",
                "value": "No fee",
                "show": false
            },
            {
                "text": "Card reissue",
                "value": "$149.99",
                "show": false
            }
        ]
    }
]


const getImg = (img) => {
    return require(`assets/img/card/${img}`).default
}

export const CardThird = () => {

    const { isMobile } = useResize();
    const [isLimit, setIsLimit] = useState("limit")

    return (
        <section>
            <div className="card_third">
                <div className="title text_center" id="third">
                    <span> Choose the card</span>
                    <div> Aligned to your lifestyle </div>
                </div>
                <div className="btn_toggle">
                    <div className={`button text_center ${isLimit === "limit" ? "active" : ""}`} onClick={() => setIsLimit('limit')}>LIMIT</div>
                    <div className={`button text_center ${isLimit === "fee" ? "active" : ""}`} onClick={() => setIsLimit('fee')}>FEES</div>
                </div>
                {!isMobile &&
                    cards.map((card, index) => (
                        <Card card={card} key={index} isLimit={isLimit} />
                    ))
                }
                {isMobile &&
                    <CardMobile cards={cards} isLimit={isLimit} />}
                <div className="policy_container text_center mobile_none">
                    <div className="policy_title text_blue">
                        <span>Cardolder Agreement</span><span>Privacy Policy</span>
                    </div>
                    <div className="plicy_content">
                        BY USING THIS CARD YOU AGREE WITH THE TERMS AND CONDITIONS OF PLASBIT LTD CARDHOLDER AGREEMENT AND FEE SCHEDULE, IF ANY.<br />
                        Visa is a registered trademark and the Three Bands Design and It's Everywhere You Want To are registered Trademarks of Visa in the United States and other countries (trademark denotations on the Visa Site indicate federal registrations in the United States)..<br />
                        Mastercard is a registered trademark and the circles design is a trademark of Mastercard International Incorporated.<br />
                    </div>
                </div>
                <div className="step_container">
                    <div className="step">
                        <img src={getImg('step-1.png')} alt="" />
                        <p className="text">Create an Account</p>
                    </div>
                    <div className="dot">
                        <img src={getImg('dot.png')} alt="" />
                    </div>
                    <div className="step">
                        <img src={getImg('step-2.png')} alt="" />
                        <p className="text">Load your Wallet</p>
                    </div>
                    <div className="dot">
                        <img src={getImg('dot.png')} alt="" />
                    </div>
                    <div className="step">
                        <img src={getImg('step-3.png')} alt="" />
                        <p className="text">Order the Card</p>
                    </div>
                </div>
            </div>

        </section>
    )
}