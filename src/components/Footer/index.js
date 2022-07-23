import { useResize } from 'hook/useCustomHook'

import logo from 'assets/img/logo-footer.svg'
import social_1 from 'assets/img/social-1.svg'
import social_3 from 'assets/img/social-3.svg'
import { AccordionFooter } from 'components/AccordionFooter'
import './Footer.css'

const menus = [
    {
        'title': 'Products',
        'subMenus': [
            { 'title': 'Card', 'icon': 'card.svg', 'link': '/card' },
            { 'title': 'Wallet', 'icon': 'wallet.svg', 'link': '/wallet' },
            { 'title': 'Calculator', 'icon': 'calculator.svg', 'link': '/card' }
        ]
    },
    {
        'title': 'Company',
        'subMenus': [
            { 'title': 'About', 'icon': 'about.svg', 'link': '/about' },
            { 'title': 'Careers', 'icon': 'careers.svg', 'link': '/careers' },
            { 'title': 'Privacy', 'icon': 'privacy.svg', 'link': '/privacy/notice' },
            { 'title': 'Cardholder Agreement', 'icon': 'cardholder_agreement.svg', 'link': '/card' },
            { 'title': 'Legal', 'icon': 'legal.svg', 'link': '/legal' },
            { 'title': 'Contact Us', 'icon': 'contact_us.svg', 'link': '/contact' },
        ]
    },
    {
        'title': 'Security',
        'subMenus': [
            { 'title': 'Our Security', 'icon': 'about.svg', 'link': '/' },
            { 'title': 'Certifications & Assessments', 'icon': 'careers.svg', 'link': '/' }
        ]
    },
    {
        'title': 'Starter guide',
        'subMenus': [
            { 'title': 'Cryptocurrency Basics', 'icon': 'about.svg', 'link': '/' },
            { 'title': 'Advanced Cryptocurrency', 'icon': 'careers.svg', 'link': '/' },
            { 'title': 'FAQ', 'icon': 'privacy.svg', 'link': '/' }
        ]
    }
]

function Footer() {

    const { isMobile } = useResize()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_top">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="footer_social">
                        <a href="https://telegram.me/plasbit" target="_blank">
                            <img src={social_1} alt="telegram" />
                        </a>
                        <a href="https://twitter.com/plasbit" target="_blank">
                            <img src={social_3} alt="twitter" />
                        </a>
                    </div>
                </div>
                <div className="footer_content">
                    {!isMobile && menus.map((menu, index) => (
                        <div className="footer_item" key={index}>
                            <h3 className="footer_title">
                                {menu.title}
                            </h3>
                            <nav>
                                <ul>
                                    {menu.subMenus.map((subMenu, index) => (
                                        <li key={index}>
                                            <a href={subMenu.link}>
                                                {subMenu.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    ))}
                    {isMobile && menus.map((menu, index) => (
                        <AccordionFooter menu={menu} key={index} />
                    ))}
                </div>
                <div className="policy">
                    PlasBit Payments Europe AG is authorised by the Financial Market Authority of Liechtenstein under the Electronic Money Act 2011, Firm Reference 252199, for the issuing of electronic money.
                    <br />
                    Terms & Conditions ( <a href="/">EU</a> | <a href="/">Non-EU</a> ) | Privacy Policy ( <a href="/">EU</a> | <a href="/">Non-EU</a> )
                    <br />
                    @copyright 2020 -2022 Plasbit LTD - All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export { Footer };