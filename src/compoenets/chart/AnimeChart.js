import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import "./AnimeChart.css";

const AnimeChart = ({ chartData }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-box">
          <b>{label}</b>
          {payload[0]?.payload?.title.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <AreaChart
        width={1500}
        height={350}
        data={chartData}
        margin={{ top: 60, right: 50, left: 80, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="40%" stopColor="#837fda" stopOpacity={1} />
            <stop offset="60%" stopColor="#7eca9a" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis dataKey="count" />
        <CartesianGrid horizontal={true} vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="count"
          stroke="url(#colorPv)"
          fillOpacity={0.5}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
};

export default AnimeChart;
