import { useResize } from '../../../hook/useCustomHook'

import './Shop.css'
import shop from 'assets/img/shop.png'
import check from 'assets/img/check.svg'
function Shop() {
    const { isMobile } = useResize()
    return (
        <section className="shop">
            <div className="container">
                <div className="shop_inner">
                    <div className="shop_img">
                        <img src={shop} alt="woman" />
                    </div>
                    <div className="shop_content">
                        <h2 className="title">
                            <span>Shop with PlasBit </span>{isMobile ? <br /> : ' '}
                            online & in-person {isMobile ? <br /> : ' '}
                            around the world
                        </h2>
                        <p className="text">
                            <li>
                                <img src={check} alt="check" />
                                Designed for people who want to live life on crypto.
                                View your balance, request a new PIN and reload instantly.
                            </li>
                            <li>
                                <img src={check} alt="check" />
                                Turn your crypto into fiat for spending it with our Virtual or Plastic Card.
                            </li>
                        </p>
                        <a href="/card" className="btn">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Shop };