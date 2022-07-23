import React, { useState, useRef } from "react";

import '../Accordion.css';

export const TransferAccordion = (props) => {
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
                        <div className="request_date">{formatStr(props.obj.updated_at.replace('T', ' ').replace('Z', ''), 10)}</div>
                        <div className="sent_fiat">{formatStr(props.obj.amountFiat, 12)}</div>
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
                        <div className='left_text'>Request Date</div>
                        <div className='right_text'>{props.obj.created_at}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Account Type</div>
                        <div className='right_text'>{props.obj.accountType}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Account Name</div>
                        <div className='right_text'>{props.obj.accountName}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Account Number</div>
                        <div className='right_text'>{props.obj.accountNumber}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Bank Name</div>
                        <div className='right_text'>{props.obj.bankName}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Bank Code</div>
                        <div className='right_text'>{props.obj.bankCode}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Notes</div>
                        <div className='right_text'>{props.obj.notes}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Sent in fiat</div>
                        <div className='right_text'>{props.obj.amountFiat}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Currency</div>
                        <div className='right_text'>{props.obj.fiatName}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Amount in Crypto</div>
                        <div className='right_text'>{props.obj.amountCrypto}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Coin</div>
                        <div className='right_text'>{props.obj.coin}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Status</div>
                        <div className='right_text'>{props.obj.status}</div>
                    </div>
                    <div className="d_flex align_items_center justify_content_between">
                        <div className='left_text'>Action</div>
                        <div className='right_text mt_5'>Handled at: {props.obj.updated_at}</div>
                    </div>
                    <div className='d_flex align_items_center justify_content_between'>
                        <div className='left_text'>Confirmation Doc</div>
                        <div className='right_text'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
