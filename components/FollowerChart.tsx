"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function FollowerChart({ data }: { data: number[] }) {
  const chartData = data.map((v, i) => ({ day: `Day ${i + 1}`, followers: v }));

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-xl shadow">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            stroke="currentColor"
            tick={{ fill: "currentColor" }}
          />
          <YAxis stroke="currentColor" tick={{ fill: "currentColor" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              color: "#fff",
              border: "none",
            }}
          />
          <Line dataKey="followers" stroke="#3b82f6" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
