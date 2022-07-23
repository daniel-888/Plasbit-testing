import React from 'react'

import './Fifth.css'

export const CareerFifth = () => {

    const handleChange = (e) => {
        const tabElements = document.querySelectorAll(".tab")
        const rowElements = document.querySelectorAll(".row")
        const activeTab = document.querySelector(`.tab.${e}`)
        const activeRows = document.querySelectorAll(`.row.${e}`)

        for (let i in tabElements) {
            if (tabElements.hasOwnProperty(i)) {
                tabElements[i].classList.remove('active')
            }
        }
        activeTab.classList.add('active')

        for (let i in rowElements) {
            if (rowElements.hasOwnProperty(i)) {
                rowElements[i].style.display = "none"
            }
        }

        for (let i in activeRows) {
            if (activeRows.hasOwnProperty(i)) {
                activeRows[i].style.display = "flex"
            }
        }
    }

    return (
        <div className="career_fifth">
            <div className="tabs">
                <div className="tab_container">
                    <div className="tab all active" onClick={() => handleChange("all")}>&nbsp;&nbsp;&nbsp;&nbsp;ALL&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className="tab marketing" onClick={() => handleChange("marketing")}>&nbsp;&nbsp;MARKETING&nbsp;&nbsp;</div>
                    <div className="tab customer" onClick={() => handleChange("customer")}>CUSTOMER SUCCESS</div>
                    <div className="tab sales" onClick={() => handleChange("sales")}>&nbsp;&nbsp;SALES&nbsp;&nbsp;</div>
                    <div className="tab products" onClick={() => handleChange("products")}>&nbsp;&nbsp;PRODUCTS&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className="mt_50">
                <div className="row all marketing">
                    <div className="job">
                        <div className="font_25 font_bold">Senior Graphic Designer</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <a href="apply" target="_blank" className="btn active"> Apply Now </a>
                </div>
                <div className="row all marketing">
                    <div className="job">
                        <div className="font_25 font_bold">FrontEnd Developer</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
                <div className="row all customer">
                    <div className="job">
                        <div className="font_25 font_bold">Sale Executive</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
                <div className="row all customer">
                    <div className="job">
                        <div className="font_25 font_bold">Account Manager</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
                <div className="row all sales">
                    <div className="job">
                        <div className="font_25 font_bold">Business Manager</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
                <div className="row all sales">
                    <div className="job">
                        <div className="font_25 font_bold">Creative</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
                <div className="row all products">
                    <div className="job">
                        <div className="font_25 font_bold">PHP Developer</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
                <div className="row all products">
                    <div className="job">
                        <div className="font_25 font_bold">Digital Marketing</div>
                        <div className="font_15 font_bold">United States - Remotely</div>
                    </div>
                    <div className="btn active"> Apply Now </div>
                </div>
            </div>
        </div>
    )
}