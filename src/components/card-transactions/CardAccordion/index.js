import React, { useState, useRef } from "react";

import '../Accordion.css';

export const CardAccordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    const formatStr = (str, len) => {
        if (len >= str.length) return str
        else return str.substr(0, len) + '...'
    }

    return (
        <div className="accordion_card_transaction">
            <div className={`accordion ${setActive}`}>
                <div className="accordion_title">
                    <div className="d_flex">
                        <div className="request_date">{formatStr(props.obj.transactionDateStr, 10)}</div>
                        <div className="sent_fiat">{formatStr(props.obj.debitAmount, 12)}</div>
                        <div className="details">
                            <div className={`${setActive === "active" ? "bg_red" : "bg_light_blue"}`} onClick={toggleAccordion}>
                                {setActive === "active" ? "Close" : "View Details"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion_content text_white"
            >
                <div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Date</div>
                        <div className='right_text'>{props.obj.transactionDateStr}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Credit</div>
                        <div className='right_text'>{props.obj.creditText}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Debit</div>
                        <div className='right_text'>{props.obj.debitText}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Transaction</div>
                        <div className='right_text'>{props.obj.transactionId}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Source</div>
                        <div className='right_text'>{props.obj.source}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Type</div>
                        <div className='right_text'>{props.obj.transactionType}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between' style={{ height: 60 }}>
                        <div className='left_text'>Description</div>
                        <div className='right_text' style={{ fontSize: 11, letterSpacing: -1 }}>{props.obj.description}</div>
                    </div>
                </div>
            </div>
        </div >
    );
}
