import "slick-carousel/slick/slick.css";
// import { useResize } from '../hook/useCustomHook'

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CardFirst } from '../components/card/CardFirst';
import { CardSecond } from '../components/card/CardSecond';
import { CardThird } from '../components/card/CardThird';
import { CardFourth } from '../components/card/CardFourth';
import { CardHelp } from '../components/card/CardHelp';
import { Cookies } from '../components/Cookies';

export const Card = () => {

    // const { isMobile } = useResize()

    return (
        <div className="App">
            <Header />
            <main>
                <CardFirst />
                <CardSecond />
                <CardThird />
                <CardFourth />
                <CardHelp />
            </main>
            <Footer />
            <Cookies />
        </div>
    );
}