import './Trend.css'

import xrpGraph1 from 'assets/img/graph-1.png'
import xrpGraph2 from 'assets/img/graph-2.png'
import xrpGraph3 from 'assets/img/graph-1.png'
import xrpGraph4 from 'assets/img/graph-2.png'
import xrpGraph5 from 'assets/img/graph-1.png'
import xrpGraph6 from 'assets/img/graph-2.png'

const getImg = (img) => {
    return require(`assets/img/${img}`).default
}

const getGraphByCurrencyName = (graph) => {
    switch (graph) {
        case 'Neo': {
            return xrpGraph1;
        }
        case 'Bitcoin': {
            return xrpGraph2;
        }
        case 'Ether': {
            return xrpGraph3;
        }
        case 'Litecoin': {
            return xrpGraph4;
        }
        case 'XRP': {
            return xrpGraph5;
        }
        case 'Monero': {
            return xrpGraph6;
        }
    }
}

function Trend({ coinName, icon, date, price, precent, volume }) {
    return (
        <div className="trend">
            <div className="item">
                <div className="item_top">
                    <img src={getImg(icon)} alt="coin" />
                    <div className="item_top_inner">
                        <span>{coinName}</span>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="item_img">
                    <img src={getGraphByCurrencyName(coinName)} alt="graphic" />
                </div>
                <div className="info">
                    <p className="price">${price}</p>
                    <span>{precent}%</span>
                </div>
                <a href="/signup" className="btn slider_btn">Buy</a>
                <span className="volume">24h volume: {volume}</span>
            </div>
        </div>
    );
}

export { Trend };