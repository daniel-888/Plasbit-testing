
import { Route, NavLink } from 'react-router-dom';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PrivacyNotice } from '../components/privacy/PrivacyNotice';
import { PrivacyEu } from '../components/privacy/PrivacyEu';
import { PrivacyCookie } from '../components/privacy/PrivacyCookie';

import "./Privacy.css"

export const Privacy = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <section className="privacy">
                    <div className="tabs">
                        <NavLink to="/privacy/notice" className="tab text" activeClassName="active" >
                            PRIVACY NOTICE
                        </NavLink>
                        <NavLink to="/privacy/eu" className="tab text" activeClassName="active" >
                            EU PRIVACY NOTICE
                        </NavLink>
                        <NavLink to="/privacy/cookie" className="tab text" activeClassName="active" >
                            COOKIE NOTICE
                        </NavLink>
                    </div>
                    <div className="tabs_content">
                        <Route component={PrivacyNotice} path="/privacy/notice" />
                        <Route component={PrivacyEu} path="/privacy/eu" />
                        <Route component={PrivacyCookie} path="/privacy/cookie" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}