import React, { useState, useRef } from 'react'

export const Card = (props) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(
            active === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div className="card_container">
            <img src={require(`assets/img/card/${props.card.img}`).default} alt="" />
            <div className="right_container">
                <div className="card_title text_white">{props.card.title}</div>
                <div className="detail_container">
                    <div className="details">
                        {(props.isLimit == "limit") &&
                            props.card.limits.filter((limit) => limit.show === true)
                                .map((limit, index) => (
                                    <div className="detail text_white" key={index}>
                                        <span>{limit.text} </span>
                                        <span>{limit.value}</span>
                                    </div>
                                ))}
                        {(props.isLimit == "fee") &&
                            props.card.fees.filter((fee) => fee.show === true)
                                .map((fee, index) => (
                                    <div className="detail text_white" key={index}>
                                        <span>{fee.text} </span>
                                        <span>{fee.value}</span>
                                    </div>
                                ))}
                        <div className="detail_content" ref={content} style={{ maxHeight: `${height}` }}>
                            {(props.isLimit == "limit") &&
                                props.card.limits.filter((limit) => limit.show === false)
                                    .map((limit, index) => (
                                        <div className="detail" key={index}>
                                            <span>{limit.text} </span>
                                            <span>{limit.value}</span>
                                        </div>
                                    ))}
                            {(props.isLimit == "fee") &&
                                props.card.fees.filter((fee) => fee.show === false)
                                    .map((fee, index) => (
                                        <div className="detail" key={index}>
                                            <span>{fee.text} </span>
                                            <span>{fee.value}</span>
                                        </div>
                                    ))}
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn text_white" onClick={toggleAccordion}>Details</button>
                        <a href="signup" className="btn text_white active">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}