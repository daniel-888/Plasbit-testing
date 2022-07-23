import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { WalletFirst } from '../components/wallet/WalletFirst';
import { WalletSecond } from '../components/wallet/WalletSecond';
import { WalletThird } from '../components/wallet/WalletThird';
import { WalletFourth } from '../components/wallet/WalletFourth';
import { WalletFifth } from '../components/wallet/WalletFifth';
import { WalletHelp } from '../components/wallet/WalletHelp';
import { useResize } from 'hook/useCustomHook';

export const Wallet = () => {

    const { isMobile } = useResize()

    return (
        <div className="App">
            <Header />
            <main>
                <WalletFirst />
                <WalletSecond />
                <WalletThird />
                <WalletFourth />
                <WalletFifth />
                {!isMobile && <WalletHelp />}
            </main>
            <Footer />
        </div>
    );
}