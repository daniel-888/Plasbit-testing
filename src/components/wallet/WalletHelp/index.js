import { getImg } from '../../../hook/useCustomHook'
import './Help.css'

function WalletHelp() {
    return (
        <section className="wallet_help">
            <img src={getImg('wallet/help_bg.png')} />
            <div className="help_inner">
                <h3 className="help_title">
                    We’re Here to Help
                </h3>
                <p className="text text_white">
                    Support is just a few taps away. You can also get your<br />
                    question answered by using our help library
                </p>
                <a href="#" className="btn bg_white">
                    Contact us
                </a>
            </div>
        </section>
    );
}

export { WalletHelp };