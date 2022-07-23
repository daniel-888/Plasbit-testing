import { useResize } from '../../../hook/useCustomHook'

import './Manage.css'
import manage_bg from 'assets/img/manage.png'
import check from 'assets/img/check.svg'
function Manage() {
    const { isMobile } = useResize()
    return (
        <section className="manage" style={{ background: `url(${manage_bg})` }}>
            <div className="container">
                <div className="manage_inner">
                    <div className="manage_content">
                        <h2 className="title manage_title white manage_title">
                            PlasBit gives you a way {isMobile ? <br /> : ' '} to
                            <span> Hold </span> all your {isMobile ? <br /> : ' '}
                            crypto {!isMobile ? <br /> : ' '} in one place
                        </h2>
                        <p className="text white">
                            <li>
                                <img src={check} alt="check" />
                                Secure storage - 100% of user cryptocurrencies are held offline in cold storage.
                            </li>
                            <li>
                                <img src={check} alt="check" />
                                Plasbit has secured clients assets in cold storage insurance against physical damage or destruction, and third-party theft.
                            </li>
                        </p>
                        <a href="/wallet" className="btn">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Manage };