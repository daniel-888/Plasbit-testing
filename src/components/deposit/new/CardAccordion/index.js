import React, { useState, useRef } from "react";

import { RowAccordion } from '../RowAccordion'
import { Chevron } from "./Chevron";
import './Accordion.css';

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

  return (
    <div className="new_card_accordion">
      <div className={`accordion_title ${setActive}`} onClick={toggleAccordion}>
        <p className="font_20 font_bold">{props.title}</p>
        {props.arrow && <Chevron className={`${setRotate}`} width={10} fill={"var(--darkBlue)"} />}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion_content"
      >
        <div className="text">
          {props.obj.map((row, index) => (
            <RowAccordion
              key={index}
              obj={row}
              inputDeposit={props.inputDeposit}
              createDeposit={props.createDeposit}
              checkNegative={props.checkNegative}
              inputValidation={props.inputValidation}
              setHeight={setHeight}
              setHeightState={setHeightState}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
