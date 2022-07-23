import React, { useState } from 'react';
import './AccordionFooter.css'

export const AccordionFooter = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion-footer">
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>{props.menu.title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content">{props.menu.subMenus.map((subMenu, index) => (
                    <p key={index}>{subMenu.title}</p>
                ))}</div>}
            </div>
        </div>
    );
};