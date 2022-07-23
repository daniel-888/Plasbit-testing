
import React, { useRef, useEffect, useState } from 'react'
import axios from "axios";
import SelectCurrency from 'react-select-currency'
import './First.css'
import { getImg, useResize } from '../../../hook/useCustomHook'
import { CurrencyList } from './CurrencyList'


const setInputFilter = (textbox, inputFilter) => {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

export const CalculatorFirst = () => {

    const img = useRef(null);
    const { isMobile } = useResize();
    const inputBtc = useRef(null);
    const input = useRef(null);
    const [btcPrice, setBtcPrice] = useState(0);
    const [timePrice, setTimePrice] = useState(0);
    const [currency, setCurrency] = useState('USD');
    const baseURL = `https://api.coingecko.com/api/v3/coins/bitcoin`;

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setInputFilter(inputBtc.current, function (value) {
            return /^-?\d*[.,]?\d*$/.test(value);
        });
    })

    useEffect(() => {
        // axios.get(baseURL).then((response) => {
        //     setTimePrice(response.data.market_data);
        // });
        handleBtcAmount();

        img.current.style.marginLeft = `-${window.innerWidth / 2 + (window.innerWidth < 1650 ? 230 : 10)}px`;

        // document.querySelector('.react-autosuggest__container input').style.visibility = "hidden"
        // document.querySelector('.react-autosuggest__input').placeholder = "Search for your currency"
        // document.querySelector('.react-autosuggest__input').style.width = document.querySelector('div.currency').clientWidth + "px";
    });

    const handleCurrency = () => {
        // document.querySelector('.react-autosuggest__container input').style.visibility = "visible"
        // document.querySelector('.react-autosuggest__container input').value = ""
        // document.querySelector('.react-autosuggest__container input').focus();
        // document.querySelector('.react-autosuggest__container input').addEventListener('blur', function () {
        //     this.style.visibility = "hidden"
        // })
    }

    const handleBtcAmount = () => {
        const amount = inputBtc.current.value;
        setBtcPrice(parseFloat(amount * timePrice?.current_price?.currency).toFixed(2));
    }

    const onSelectedCurrency = e => {
        console.log(e.target.value)
        // document.querySelector('.react-autosuggest__container input').style.visibility = "hidden"
    }

    return (
        <section className="calculator_first container">
            <img src={getImg('calculator/first_bg.png')} ref={img} />
            <div className="calculator_container">
                <div className="main_title text_white">
                    Bitcoin <span>Calculator</span>
                </div>
                <div className="text text_white">
                    Use PlasBit's Bitcoin calculator to find out exactly how much your Bitcoin is worth in any of the {!isMobile && <br />}
                    supported global currencies, using accurate, up-to-date exchange rates. Get real-time and {!isMobile && <br />}
                    historical trends in the BTC value for your selected currency.
                </div>
                <div className="card">
                    <div className="bitcoin">
                        <div className="text label text_blue">
                            Amount in bitcoin
                        </div>
                        <div className="input">
                            <input type="text" defaultValue="1" ref={inputBtc} onChange={handleBtcAmount} />
                            <div className="text suffix">BTC</div>
                            {isMobile && <div className="text_white">=</div>}
                        </div>
                    </div>
                    {!isMobile && <div className="text_white">=</div>}
                    <div className="currency currency_width">
                        <div className="text label text_blue">
                            Amount in selected currency
                        </div>
                        <div className="input">
                            <input type="text" value={btcPrice} disabled />
                            <p className="text suffix" onClick={() => setIsActive(!isActive)}><span>{currency} &#9660;</span></p>
                        </div>
                        <CurrencyList setCurrency={setCurrency} isActive={isActive} setIsActive={setIsActive} />
                        {/* <SelectCurrency onChange={onSelectedCurrency} /> */}
                        <div className="text bottom">
                            <span className={(currency == "usd") ? "active" : ""}>USD</span>
                            <span className={(currency == "eur") ? "active" : ""}>EUR</span>
                            <span className={(currency == "gbp") ? "active" : ""}>GBP</span>
                            <span className={(currency == "ngn") ? "active" : ""}>NGN</span>
                            <span className={(currency == "cny") ? "active" : ""}>CNY</span>
                            <span className={(currency == "jpy") ? "active" : ""}>JPY</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}