import React, { useState, useRef } from "react";
import { Button } from 'antd';

import { getImg } from '../../../../hook/useCustomHook'
import './Accordion.css';

export const RowAccordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    props.setHeightState(`${parseInt(props.setHeight) + content.current.scrollHeight}px`)
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="deposit_row_accordion">
      <div>
        <div className={`accordion_title ${setActive}`} onClick={toggleAccordion}>
          <img src={getImg(props.obj.img)} alt="icon" />
          <div className='font_15 font_bold'>{props.obj.name}</div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion_content"
        >
          <div>
            <div className='d_flex align_items_center justify_content_between mt_10 ml_10 mr_10'>
              <div className='font_15 grey'>deposits.tables.headers.0</div>
              <div className='font_15 font_bold'>{props.obj.fee.toFixed(2)}%</div>
            </div>
            <div className='d_flex align_items_center justify_content_between mt_10 ml_10 mr_10'>
              <div className='font_15 grey'>deposits.tables.headers.1</div>
              <div className='font_15 font_bold'>{props.checkNegative((props.obj.fee * props.inputValidation(props.inputDeposit || 0)) / 100)} USD</div>
            </div>
            <div className='d_flex align_items_center justify_content_between mt_10 ml_10 mr_10'>
              <div className='font_15 grey'>deposits.tables.headers.2</div>
              <div className='font_15 font_bold'><a>{props.obj.completion}</a></div>
            </div>
            <div className='d_flex align_items_center justify_content_between mt_10 ml_10 mr_10'>
              <div className='font_15 grey'>deposits.tables.headers.3</div>
              <div className='font_15 font_bold'>{" "}
                {props.checkNegative(
                  (props.obj.fee * props.inputValidation(props.inputDeposit || 0)) / 100 +
                  props.inputValidation(props.inputDeposit || 0)
                )}{" "}
                USD</div>
            </div>
            <div className='d_flex align_items_center justify_content_between mt_20 ml_10 mr_10'>
              <Button
                block
                type="primary"
                disabled={!props.inputDeposit}
                onClick={() => props.createDeposit("fiat")}
              >
                deposits.tables.button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
