import Typewriter from 'typewriter-effect'
import { useResize } from '../../../hook/useCustomHook'

import './Store.css'
import store from 'assets/img/store.png'
import dots from 'assets/img/dots.svg'
import check from 'assets/img/check.svg'
function Store() {
    const { isMobile } = useResize()
    return (
        <section className="store">
            <div className="container">
                <div className="store_inner">
                    <div className="store_img">
                        <img src={store} alt="plasbit" />
                        <span className="store_bg" style={{ background: `center/cover url(${dots})` }}></span>
                    </div>
                    <div className="store_content">
                        <h2 className="title store_title">
                            Spend and Store{isMobile ? <br /> : ' '}
                            crypto on {' '}
                            <span>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString("your Wallet")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("your Card")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("your Terms")
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                />
                            </span>
                        </h2>
                        <p className="text">
                            <li>
                                <img src={check} alt="check" />
                                Multi-Coin Support - Manage BTC, ETH, LTC, ADA, USDC and all your tokens in one place.
                            </li>
                            <li>
                                <img src={check} alt="check" />
                                Secure storage - Your keys are protected with Secure Enclave and biometric authentication technology.
                            </li>
                        </p>
                        <div className="btn_group">
                            <a href="/signup" className="btn active">Open Account</a>
                            <a href="/wallet" className="btn">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Store };