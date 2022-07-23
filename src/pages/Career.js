import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { CareerFirst } from '../components/career/CareerFirst';
import { CareerSecond } from '../components/career/CareerSecond';
import { CareerThird } from '../components/career/CareerThird';
import { CareerFourth } from '../components/career/CareerFourth';
import { CareerFifth } from '../components/career/CareerFifth';
import { WalletHelp } from '../components/wallet/WalletHelp';

export const Career = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <CareerFirst />
                <CareerSecond />
                <CareerThird />
                <CareerFourth />
                <CareerFifth />
                <WalletHelp />
            </main>
            <Footer />
        </div>
    );
}