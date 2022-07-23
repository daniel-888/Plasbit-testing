import React from 'react'

export const Card = (props) => {
    return (
        <div className="box bg_white text_center">
            <img src={require(`assets/img/card/${props.card.img}`).default} alt="icon" />
            <div className="text box_title text_blue">
                {props.card.title}
            </div>
            <div className="box_content">
                {props.card.content}
            </div>
        </div>
    )
}