
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import "./AnimeChart.css"
import { BaseUrl } from '../api_constant';
import { useEffect } from 'react';

const AnimeChart = ({ chartData }) => {

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip-box">
                    <b className="">{label}</b>
                    <p className='tooltip-title'>{`${payload[0]?.payload?.title}`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <>
            <AreaChart width={730} height={300} data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis dataKey="count" />
                <CartesianGrid horizontal={true} vertical={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={0.5} fill="#43CBFF" />
            </AreaChart>
        </>
    )
}

export default AnimeChart;