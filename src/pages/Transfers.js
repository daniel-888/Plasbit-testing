import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TransferFirst } from '../components/transfers/TransferFirst';
import { TransferSecond } from '../components/transfers/TransferSecond';
import { TransferThird } from '../components/transfers/TransferThird';
import { TransferFourth } from '../components/transfers/TransferFourth';
import { TransferFifth } from '../components/transfers/TransferFifth';
import { TransferSixth } from '../components/transfers/TransferSixth';
import { TransferSeventh } from '../components/transfers/TransferSeventh';
import { WalletHelp } from 'components/wallet/WalletHelp';

export const Transfers = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <TransferFirst />
                <TransferSecond />
                <TransferThird />
                <TransferFourth />
                <TransferFifth />
                <TransferSixth />
                <TransferSeventh />
                <WalletHelp />
            </main>
            <Footer />
        </div>
    );
}