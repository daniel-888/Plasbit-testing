
import { Table } from 'antd'
import { TinyArea } from '@ant-design/charts'

import { getImg, asNumber, getReversedFilteredArray } from '../../../hook/useCustomHook'
import './Second.css'

const PriceGraph = ({ val }) => {
    if (!val) return ''
    return <TinyArea
        syncViewPadding={true}
        height={50}
        width={150}
        smooth={true}
        autoFit={false}
        yAxis={{
            min: parseFloat(val.latest) - (parseFloat(val.latest) *
                (Math.abs(parseFloat(val.percent_change * 100)) > 10 ? 0.22 : 0.075)),
            max: parseFloat(val.latest) + (parseFloat(val.latest) *
                (Math.abs(parseFloat(val.percent_change * 100)) > 10 ? 0.22 : 0.075))
        }}
        data={
            getReversedFilteredArray(val?.prices, 50)
                ?.map((v) =>
                    asNumber(parseFloat(v), parseInt(val.unit_price_scale || 5, 10))
                ) || []
        }
    />
}

const columns = [
    {
        title: '#',
        dataIndex: 'no',
        key: 'no',
        sorter: {
            compare: (a, b) => a.no - b.no,
        },
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (name, record) => (
            <div className='d_flex align_items_center'>
                <img src={getImg('btc.svg')} alt="icon" style={{ width: 25 }} />
                <div className='ml_10'>
                    <div className='font_15 font_bold'>{record.name}</div>
                    <div className='font_15 font_600 grey'>{record.base}</div>
                </div>
            </div>
        )
    },
    {
        title: 'Price',
        dataIndex: 'latest',
        key: 'latest',
        render: (price, record) => {
            const prceStr = (price >= 1) ? (Number(price).toFixed(2)) : price
            return <div className='font_15 font_bold'>${prceStr}</div>
        },
        sorter: {
            compare: (a, b) => a.latest - b.latest,
        },
    },
    {
        title: '24h Change',
        dataIndex: 'percent_change',
        key: 'percent_change',
        sorter: {
            compare: (a, b) => a.percent_change - b.percent_change,
        },
        render: (percent, record) => {
            const color = percent >= 0 ? 'green' : 'red'
            return <div className={`font_15 font_bold ${color}`}>{Number(percent * 100).toFixed(2)}%</div>
        },
    },
    {
        title: '24 Volume',
        dataIndex: 'percent_change',
        key: 'percent_change',
        sorter: {
            compare: (a, b) => a.percent_change - b.percent_change,
        },
    },
    {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        key: 'market_cap',
        sorter: {
            compare: (a, b) => a.market_cap - b.market_cap,
        },
        render: (market_cap, record) => (
            <div>${market_cap}</div>
        )
    },
    {
        title: '7 Days Chart',
        dataIndex: 'id',
        key: 'id',
        render: (value, record) => (
            <PriceGraph val={record} />
        )
    },
];

export const PriceSecond = (props) => {

    return (
        <section className="price_second">
            <Table columns={columns} rowKey="id" dataSource={props.prices} />
        </section>
    )
}