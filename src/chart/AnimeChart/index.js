import axios from 'axios';
import { useEffect, useState } from 'react';
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import "./AnimeChart.css"
import { BaseUrl } from '../api_constant';

const AnimeChart = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get(BaseUrl + "/top/anime", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result) => {
            var data = result.data.data
            // console.log("API ==>  get top anime ==> ", result.data.data);
            var yearArr = [];
            data.map((item, idx) => {
                if (item.year) yearArr.push(item.year)
            })

            var minYear = Math.min(...yearArr)
            var maxYear = Math.max(...yearArr);
            yearArr = [];
            for (var i = minYear; i <= maxYear; i++) {
                yearArr.push(i)
            }

            var count = 0;
            var titleArr = [];
            var dataArr = [];

            console.log(yearArr);
            yearArr.map((yearItem) => {
                data.map(data => {
                    if (data.year && yearItem && data.rank <= 20) {
                        if (yearItem.toString().includes(data.year.toString())) {
                            count = count + 1;
                            titleArr.push(data.title);
                        }
                    }
                })
                console.log(titleArr);
                if (count > 0)
                    dataArr.push({
                        year: yearItem,
                        count: count,
                        title: titleArr
                    })
                count = 0;
                titleArr = [];
            })
            console.log(dataArr);
            setChartData(dataArr);
        })
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log(payload[0]?.payload?.title);
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
                <Tooltip content={<CustomTooltip />} cursor={false} contentStyle={{ backgroundColor: 'red' }} />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={0.5} fill="#43CBFF" />
            </AreaChart>
        </>
    )
}

export default AnimeChart;