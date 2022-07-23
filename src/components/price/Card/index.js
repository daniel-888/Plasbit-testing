
import xrpGraph1 from 'assets/img/graph-1.png'
import xrpGraph2 from 'assets/img/graph-2.png'
import xrpGraph3 from 'assets/img/graph-1.png'
import xrpGraph4 from 'assets/img/graph-2.png'

import './Card.css'

const getImg = (img) => {
    return require(`assets/img/${img}`).default
}

const getGraphByCurrencyName = (graph) => {
    switch (graph) {
        case 'Bitcoin Cash': {
            return xrpGraph1;
        }
        case 'Bitcoin': {
            return xrpGraph2;
        }
        case 'Ethereum': {
            return xrpGraph3;
        }
        case 'Litecoin': {
            return xrpGraph4;
        }
    }
}

const getPercent = (percent) => {
    if (parseInt(percent) > 0) return <span className="up_down up"><img src={getImg('dashboard/dashboard/up.png')} />&nbsp;<span> {percent} %</span></span>
    return <span className="up_down down"><img src={getImg('dashboard/dashboard/down.png')} />&nbsp;<span> {percent} %</span></span>
}

export const Card = ({ icon, coinName, price, percent }) => {
    return (
        <div className="coin_card">
            <div className="top">
                <div className="icon">
                    <img src={getImg(icon)} alt="coin" />
                    <div className="font_20 font_bold">{coinName}</div>
                </div>
                <div className="font_28 font_bold">${price}</div>
            </div>
            <div className="item_img">
                <img src={getGraphByCurrencyName(coinName)} alt="graphic" />
            </div>
            <div className="info">
                <div className="font_20 font_bold">{getPercent(percent)}</div>
                <div className="font_15 font_bold">24Hours</div>
            </div>
        </div>
    );
}
