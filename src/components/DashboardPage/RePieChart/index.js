import { useResize } from 'hook/useCustomHook';
import React from 'react';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = {
    'BTC': 'orange',
    'ETH': 'purple',
    'ADA': '#03a9f4',
    'LTC': 'gray',
    'USDC': 'blue'
}


export const RePieChart = (props) => {

    const { isMobile } = useResize()
    const width = !isMobile ? 530 : 300
    const height = !isMobile ? 250 : 500
    const cx = !isMobile ? 130 : 130
    const cy = !isMobile ? 120 : 1
    const align = !isMobile ? "right" : "top"
    const verticalAlign = !isMobile ? "top" : "bottom"
    let percent = 0
    const emptyData = [{ name: "", value: 100 }]
    const data = props.coins.map((coin, index) => {
        percent += parseFloat(coin.percent)
        return { name: coin.coinName, value: coin.percent }
    })

    return (
        <PieChart width={width} height={height}>
            {(percent !== 0) && <Pie
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={70}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
            </Pie>}
            {(percent === 0) && <Pie
                data={emptyData}
                cx={cx}
                cy={cy}
                innerRadius={70}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
            >
                <Cell fill={'lightgrey'} />
            </Pie>}
            <Legend
                layout="vertical"
                align={align}
                verticalAlign={verticalAlign}
                iconSize="19"
                payload={
                    data.map(
                        (item, index) => ({
                            id: item.name,
                            type: "square",
                            value: `${item.name} (${item.value.toFixed(2)}%)`,
                            color: COLORS[item.name]
                        })
                    )
                }
            />
        </PieChart>
    );
}