import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../../constants";

const TodosBarChart = ({ data }) => {
  const shorten = (s, max = 10) =>
    s && s.length > max ? s.slice(0, max) + "…" : s;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          tick={{ fontSize: 12 }}
          tickFormatter={shorten}
          angle={-45}
          textAnchor="end"
        />
        <YAxis allowDecimals={false} />
        <Tooltip contentStyle={{color: "black"}} />
        <Legend verticalAlign="bottom" height={36} />
        <Bar dataKey="completed" stackId="a" fill={COLORS[0]} />
        <Bar dataKey="pending" stackId="a" fill={COLORS[1]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TodosBarChart;
