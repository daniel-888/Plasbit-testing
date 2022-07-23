import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Select } from 'antd';

import { Dropdown } from '../Dropdown'
import logo from 'assets/img/logo.svg'
import logoWhite from 'assets/img/logo-card.svg'
import lang from 'assets/img/lang.svg'
import btc from 'assets/img/btc.svg'
import { useResize } from 'hook/useCustomHook'
import { Accordion } from 'components/Accordion'
import './Header.css'

const { Option } = Select;
const menus = [
    {
        'title': 'Products',
        'subMenus': [
            { 'title': 'Card', 'icon': 'card.svg', 'link': '/card' },
            { 'title': 'Wallet', 'icon': 'wallet.svg', 'link': '/wallet' },
            { 'title': 'Calculator', 'icon': 'calculator.svg', 'link': '/calculator' },
            { 'title': 'Transfers', 'icon': 'navbar/transfers.svg', 'link': '/transfers' },
        ]
    },
    {
        'title': 'Company',
        'subMenus': [
            { 'title': 'About', 'icon': 'about.svg', 'link': '/about' },
            { 'title': 'Careers', 'icon': 'careers.svg', 'link': '/careers' },
            { 'title': 'Privacy', 'icon': 'privacy.svg', 'link': '/privacy/notice' },
            { 'title': 'Cardholder Agreement', 'icon': 'cardholder_agreement.svg', 'link': '/card' },
            { 'title': 'Legal', 'icon': 'legal.svg', 'link': '/legal/term' },
            { 'title': 'Contact Us', 'icon': 'contact_us.svg', 'link': '/contact' },
        ]
    }
]

function Header() {
    const pathName = window.location.pathname;
    const [isActive, setActive] = useState(false);
    const [burger, setburger] = useState(false);
    const [logoImg, setLogoImg] = useState(logo);
    const [color, setColor] = useState('var(--darkBlue)');
    const [menuColor, setMenuColor] = useState('white');
    const [isDark, setIsDark] = useState(true)
    const { isResponsive, isMobile } = useResize();

    useEffect(() => {
        if (pathName == '/card' || pathName == '/contact' || pathName == '/calculator' || pathName == '/transfers') {
            setLogoImg(logoWhite)
            setColor('white')
            setMenuColor('white')
            setIsDark(false)
        } else {
            setLogoImg(logo)
            setColor('var(--darkBlue)')
            setMenuColor('var(--darkBlue)')
            setIsDark(true)
        }
        if (pathName == '/') {
            setMenuColor('white')
        }
    })

    const toggleClass = () => {
        setActive(!isActive);
    };
    const toggleBurger = () => {
        setburger(!burger);
    };
    return (
        <header className="header">
            <div className={burger ? "shadow_active" : "shadow"} onClick={toggleBurger}></div>
            <div className="container-fluid">
                <div className="header_inner">
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="logo" />
                    </Link>
                    <div className="lang" style={{ color: color }}>
                        <li onClick={toggleClass}>
                            <img src={lang} alt="" />
                            EN
                        </li>
                        {/* <ul className={isActive ? "lang_toggle_active" : "lang_toggle"}>
                            <li>
                                <img src={lang}></img>
                                FR
                            </li>
                            <li>
                                <img src={lang}></img>
                                RU
                            </li>
                        </ul> */}
                    </div>
                    <div className="btc" style={{ color: color }}>
                        {/* <span>btc/usd — 45 514.00 $</span> */}
                        {/* <select>
                            <option>BTC/USD — 45 514.00 $</option>
                            <option>ETH/USD — 45 514.00 $</option>
                            <option>ADA/USD — 45 514.00 $</option>
                            <option>LTC/USD — 45 514.00 $</option>
                            <option>USDC/USD — 45 514.00 $</option>
                        </select> */}
                        <Select defaultValue="BTC" style={{ width: "auto" }}>
                            <Option value="BTC"><img src={btc} style={{ width: 25 }} /> BTC/USD - 45 514.00 $</Option>
                            <Option value="ETH"><img src={btc} style={{ width: 25 }} /> ETH/USD - 3 514.00 $</Option>
                            <Option value="ADA"><img src={btc} style={{ width: 25 }} /> ADA/USD - 0.23 $</Option>
                            <Option value="LTC"><img src={btc} style={{ width: 25 }} /> LTC/USD - 2.00 $</Option>
                            <Option value="USDC"><img src={btc} style={{ width: 25 }} /> USDC/USD - 1.00 $</Option>
                        </Select>
                    </div>
                    <nav className={burger ? "nav_active" : "nav"}>
                        {isMobile && <img onClick={toggleBurger} alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTE0LjcgMS4zYy0uNC0uNC0xLS40LTEuNCAwTDggNi42IDIuNyAxLjNjLS40LS40LTEtLjQtMS40IDBzLS40IDEgMCAxLjRMNi42IDhsLTUuMyA1LjNjLS40LjQtLjQgMSAwIDEuNC4yLjIuNC4zLjcuM3MuNS0uMS43LS4zTDggOS40bDUuMyA1LjNjLjIuMi41LjMuNy4zcy41LS4xLjctLjNjLjQtLjQuNC0xIDAtMS40TDkuNCA4bDUuMy01LjNjLjQtLjQuNC0xIDAtMS40eiIgZmlsbD0iIzU2NWQ2ZCIvPjwvc3ZnPg==" />}
                        {!isResponsive && menus.map((menu, index) => (
                            <Dropdown menu={menu} key={index} color={menuColor} />
                        ))}
                        {isResponsive && menus.map((menu, index) => (
                            <Accordion menu={menu} key={index} />
                        ))}
                        <ul className="header_menu">
                            <li>
                                <Link to="/card" style={{ color: menuColor }}>Login</Link>
                            </li>
                        </ul>
                        {/* <div className="lang_mob">
                            <li onClick={toggleClass}>
                                <img src={lang} alt="language" />
                                EN
                            </li>
                            <ul className={isActive ? "lang_toggle_active" : "lang_toggle"}>
                                <li>
                                    <img src={lang}></img>
                                    FR
                                </li>
                                <li>
                                    <img src={lang}></img>
                                    RU
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="btc_mob">
                            <select>
                                <option>btc/usd — 45 514.00 $</option>
                                <option>btc/usd — 45 514.00 $</option>
                                <option>btc/usd — 45 514.00 $</option>
                            </select>
                        </div> */}
                        <Link to="/home" className={`btn active $"header_btn"`}>Get Started</Link>
                    </nav>
                    <span className="nav_toggle" onClick={toggleBurger}>
                        <span className={`nav_toggle-item ${isDark ? 'dark' : ''}`}></span>
                    </span>
                </div>
            </div>
        </header>
    );
}

export { Header };