
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalculatorFirst } from '../components/calculator/CalculatorFirst';
import { CalculatorSecond } from '../components/calculator/CalculatorSecond';
import { WalletHelp } from 'components/wallet/WalletHelp';

export const Calculator = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <CalculatorFirst />
                <CalculatorSecond />
                <WalletHelp />
            </main>
            <Footer />
        </div>
    );
}