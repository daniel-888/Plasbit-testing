import React from 'react'

import { getImg } from '../../../hook/useCustomHook'
import './Fourth.css'

export const DashboardFourth = () => {
    return (
        <div className="dashboard_fourth">
            <div className="wallet card">
                <div className="font_25 font_bold light_blue mb_20 text_center">Recent Wallet Activity</div>
                <div className="row">
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:24:00
                        </div>
                    </div>
                    <div className="sent font_bold">
                        <div className="font_18">BTC Sent</div>
                        <div className="font_15">TXID: XXXX...</div>
                    </div>
                    <div className="money font_bold">
                        <div className="font_18">$39,908.83</div>
                        <div className="font_15 text_right">1.12345678</div>
                    </div>
                </div>
                <div className="row">
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:24:00
                        </div>
                    </div>
                    <div className="sent font_bold">
                        <div className="font_18">BTC Sent</div>
                        <div className="font_15">TXID: XXXX...</div>
                    </div>
                    <div className="money font_bold">
                        <div className="font_18">$3,690.83</div>
                        <div className="font_15 text_right">1.0000</div>
                    </div>
                </div>
                <div className="row">
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:24:00
                        </div>
                    </div>
                    <div className="sent font_bold">
                        <div className="font_18">BTC Sent</div>
                        <div className="font_15">TXID: XXXX...</div>
                    </div>
                    <div className="money font_bold">
                        <div className="font_18">$3,690.83</div>
                        <div className="font_15 text_right">1.0000</div>
                    </div>
                </div>
                <div className="row">
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:24:00
                        </div>
                    </div>
                    <div className="sent font_bold">
                        <div className="font_18">BTC Sent</div>
                        <div className="font_15">TXID: XXXX...</div>
                    </div>
                    <div className="money font_bold">
                        <div className="font_18">$3,690.83</div>
                        <div className="font_15 text_right">1.0000</div>
                    </div>
                </div>
                <div className="row">
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:24:00
                        </div>
                    </div>
                    <div className="sent font_bold">
                        <div className="font_18">BTC Sent</div>
                        <div className="font_15">TXID: XXXX...</div>
                    </div>
                    <div className="money font_bold">
                        <div className="font_18">$3,690.83</div>
                        <div className="font_15 text_right">1.0000</div>
                    </div>
                </div>
                <div className="row font_15 font_bold view_more">
                    View More Activities<span className="arrow ml_10"></span>
                </div>
            </div>
            <div className="transaction card">
                <div className="font_25 font_bold light_blue mb_20 text_center">Recent Card Transactions</div>
                <div className="row">
                    <div className="name font_bold">
                        <div className="font_18">Dropbox</div>
                        <div className="font_15">Accont renewal</div>
                    </div>
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:00:00
                        </div>
                    </div>
                    <div className="money font_18 font_bold">
                        <span className="down">-$99.00</span>
                    </div>
                </div>
                <div className="row">
                    <div className="name font_bold">
                        <div className="font_18">Dropbox</div>
                        <div className="font_15">Accont renewal</div>
                    </div>
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:00:00
                        </div>
                    </div>
                    <div className="money font_18 font_bold">
                        <span className="down">-$14,00</span>
                    </div>
                </div>
                <div className="row">
                    <div className="name font_bold">
                        <div className="font_18">Dropbox</div>
                        <div className="font_15">Accont renewal</div>
                    </div>
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:00:00
                        </div>
                    </div>
                    <div className="money font_18 font_bold">
                        <span className="up">+$35,00</span>
                    </div>
                </div>
                <div className="row">
                    <div className="name font_bold">
                        <div className="font_18">Dropbox</div>
                        <div className="font_15">Accont renewal</div>
                    </div>
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:00:00
                        </div>
                    </div>
                    <div className="money font_18 font_bold">
                        <span className="up">+$35,00</span>
                    </div>
                </div>
                <div className="row">
                    <div className="name font_bold">
                        <div className="font_18">Dropbox</div>
                        <div className="font_15">Accont renewal</div>
                    </div>
                    <div className="date_time font_bold text_center">
                        <div className="date font_18">
                            03/11/2021
                        </div>
                        <div className="time font_15">
                            11:00:00
                        </div>
                    </div>
                    <div className="money font_18 font_bold">
                        <span className="up">+$35,00</span>
                    </div>
                </div>
                <div className="row font_15 font_bold view_more">
                    View More Transactions<span className="arrow ml_10"></span>
                </div>
            </div>
            <div className="card verification">
                <div style={{ flexGrow: 1 }} className="font_25 font_bold light_blue mb_20 text_center">Account Verification</div>
                <div style={{ flexGrow: 999 }} className="steps">
                    <div className="step">
                        <div className="icon verified">
                            <div><img src={getImg('dashboard/dashboard/email_verified.png')} /></div>
                        </div>
                        <div className="description">
                            <div className="font_18 font_bold verified">Confirm your email address</div>
                            <div className="font_15 font_bold">Add basic account security</div>
                        </div>
                        <div className="check">
                            <img src={getImg('dashboard/dashboard/checked.png')} />
                        </div>
                    </div>
                    <div className="divider verified"></div>
                    <div className="step">
                        <div className="icon verified">
                            <div><img src={getImg('dashboard/dashboard/phone_verified.png')} /></div>
                        </div>
                        <div className="description">
                            <div className="font_18 font_bold verified">Add your phone number</div>
                            <div className="font_15 font_bold">Enable 2-factor authentication</div>
                        </div>
                        <div className="check">
                            <img src={getImg('dashboard/dashboard/checked.png')} />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="step">
                        <div className="icon">
                            <div><img src={getImg('dashboard/dashboard/identity.png')} /></div>
                        </div>
                        <div className="description">
                            <div className="font_18 font_bold">Verify your identity</div>
                            <div className="font_15 font_bold">It will enable to active higher withdrawal limits and card balances</div>
                        </div>
                        <div className="check">
                            <img src={getImg('dashboard/dashboard/check.png')} />
                        </div>
                    </div>
                </div>
                <div style={{ flexGrow: 1 }} className="row font_15 font_bold view_more">
                    Verify your account<span className="arrow ml_10"></span>
                </div>
            </div>
        </div>
    )
}