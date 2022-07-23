
import { Route, NavLink } from 'react-router-dom';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { LegalTerm } from '../components/legal/LegalTerm';
import { LegalAccess } from '../components/legal/LegalAccess';

import "./Privacy.css"

export const Legal = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <section className="privacy">
                    <div className="tabs">
                        <NavLink to="/legal/term" className="tab text" activeClassName="active" >
                            TERMS OF USE
                        </NavLink>
                        <NavLink to="/privacy/notice" className="tab text" activeClassName="active" >
                            PRIVACY
                        </NavLink>
                        <NavLink to="/legal/access" className="tab text" activeClassName="active" >
                            ACCESSIBILITY STATEMENT
                        </NavLink>
                    </div>
                    <div className="tabs_content">
                        <Route component={LegalTerm} path="/legal/term" />
                        <Route component={LegalAccess} path="/legal/access" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}