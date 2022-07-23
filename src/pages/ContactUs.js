
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactFirst } from '../components/contactUs/ContactFirst';
import { ContactSecond } from '../components/contactUs/ContactSecond';

export const ContactUs = () => {

    return (
        <div className="App">
            <Header />
            <main>
                <ContactFirst />
                <ContactSecond />
            </main>
            <Footer />
        </div>
    );
}