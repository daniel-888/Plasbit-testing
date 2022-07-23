import React, { useState } from 'react'
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import './Details.css'

export const DepositDetails = () => {

    const [tab, setTab] = useState('inside')

    return (
        <div className="deposit_details">
            <div className="tabs">
                <div className={`tab ${tab === 'inside' ? 'active' : ''}`} onClick={() => setTab('inside')}>
                    &nbsp;&nbsp;&nbsp;<T>deposits.details.tab.0</T>&nbsp;&nbsp;&nbsp;
                </div>
                <div className={`tab ${tab === 'outside' ? 'active' : ''}`} onClick={() => setTab('outside')}>
                    &nbsp;&nbsp;&nbsp;<T>deposits.details.tab.0</T>&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <div className="content">
                {(tab === 'inside') && <div>
                    <div className="left">
                        <div className="font_18 font_600"><T>deposits.details.content.0.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.0.text</T></div>
                        <div className="font_18 font_600 mt_20"><T>deposits.details.content.1.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.1.text</T></div>
                        <div className="font_18 font_600 mt_20"><T>deposits.details.content.2.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.2.text</T></div>
                        <div className="font_18 font_600 mt_20"><T>deposits.details.content.3.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.0</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.1</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.2</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.3</T></div>
                    </div>
                    <div className="right">
                        <div className="font_20 font_600 mb_30">
                            <T>deposits.details.text.0</T>
                        </div>
                        <a href="#" className="font_20 font_bold light_blue">
                            <T>deposits.details.link.0</T>
                        </a>
                        <div className="font_20 font_bold mt_30">
                            <T>deposits.details.text.1</T>
                        </div>
                        <div className="font_20 font_bold mb_30">
                            <T>deposits.details.text.2</T>
                        </div>
                        <a href="#" className="font_20 font_bold light_blue">
                            <T>deposits.details.link.1</T>
                        </a>
                    </div>
                </div>}
                {(tab === 'outside') && <div>
                    <div className="left">
                        <div className="font_18 font_600"><T>deposits.details.content.0.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.0.text</T></div>
                        <div className="font_18 font_600 mt_20"><T>deposits.details.content.1.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.1.text</T></div>
                        <div className="font_18 font_600 mt_20"><T>deposits.details.content.2.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.2.text</T></div>
                        <div className="font_18 font_600 mt_20"><T>deposits.details.content.3.label</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.0</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.1</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.2</T></div>
                        <div className="font_20 font_bold"><T>deposits.details.content.3.text.3</T></div>
                    </div>
                    <div className="right">
                        <div className="font_20 font_600 mb_30">
                            <T>deposits.details.text.0</T>
                        </div>
                        <a href="#" className="font_20 font_bold light_blue">
                            <T>deposits.details.link.0</T>
                        </a>
                        <div className="font_20 font_bold mt_30">
                            <T>deposits.details.text.1</T>
                        </div>
                        <div className="font_20 font_bold mb_30">
                            <T>deposits.details.text.2</T>
                        </div>
                        <a href="#" className="font_20 font_bold light_blue">
                            <T>deposits.details.link.1</T>
                        </a>
                    </div>
                </div>}
            </div>
        </div>
    )
}