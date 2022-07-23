import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { AboutFirst } from '../components/about/AboutFirst';
import { AboutSecond } from '../components/about/AboutSecond';
import { AboutThird } from '../components/about/AboutThird';
import { AboutFourth } from '../components/about/AboutFourth';
import { AboutFifth } from '../components/about/AboutFifth';
import { WalletHelp } from '../components/wallet/WalletHelp';

export const About = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <AboutFirst />
                <AboutSecond />
                <AboutThird />
                <AboutFourth />
                <AboutFifth />
                <WalletHelp />
            </main>
            <Footer />
        </div>
    );
}