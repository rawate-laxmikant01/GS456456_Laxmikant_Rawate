"use client";

import { useState } from "react";
import {
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import SelectDropdown from "./SelectDropdown";
import {baseWeeklyData} from '../data/charts_data'

const generateLocationData = () => {
  const northData = baseWeeklyData.map((week) => ({
    ...week,
    gmDollars: Math.round(week.gmDollars * (0.85 + Math.random() * 0.3)),
    salesDollars: Math.round(week.salesDollars * (0.85 + Math.random() * 0.3)),
    gmPercent: Math.min(
      70,
      Math.max(20, Math.round(week.gmPercent * (0.9 + Math.random() * 0.2)))
    ),
  }));

  const southData = baseWeeklyData.map((week) => ({
    ...week,
    gmDollars: Math.round(week.gmDollars * (0.9 + Math.random() * 0.4)),
    salesDollars: Math.round(week.salesDollars * (0.9 + Math.random() * 0.3)),
    gmPercent: Math.min(
      70,
      Math.max(20, Math.round(week.gmPercent * (0.95 + Math.random() * 0.25)))
    ),
  }));

  const eastData = baseWeeklyData.map((week) => ({
    ...week,
    gmDollars: Math.round(week.gmDollars * (0.7 + Math.random() * 0.4)),
    salesDollars: Math.round(week.salesDollars * (0.8 + Math.random() * 0.3)),
    gmPercent: Math.min(
      70,
      Math.max(20, Math.round(week.gmPercent * (0.85 + Math.random() * 0.3)))
    ),
  }));

  return {
    all: baseWeeklyData,
    north: northData,
    south: southData,
    east: eastData,
  };
};

const locationData = generateLocationData();

const locationOptions = [
  { value: "all", label: "San Francisco Bay Trends" },
  { value: "north", label: "North Bay" },
  { value: "south", label: "South Bay" },
  { value: "east", label: "East Bay" },
];

export default function GrossMarginChart() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [chartTitle, setChartTitle] = useState("Gross Margin");

  const filteredData =
    locationData[selectedLocation as keyof typeof locationData];

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);

    const locationLabel =
      locationOptions.find((option) => option.value === value)?.label ||
      "Gross Margin";
    setChartTitle(`Gross Margin - ${locationLabel}`);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length && payload[0].value) {
    return (
      <div className="bg-white border border-border p-3 rounded-md shadow-md">
        <p className="font-semibold">{label}</p>
        <p className="text-[#4299e1]">
          GM Dollars: {formatCurrency(payload[0].value)}
        </p>
        <p className="text-[#ed8936]">GM %: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

  const maxGmDollars =
    Math.ceil(Math.max(...filteredData.map((item) => item.gmDollars)) / 50000) *
    50000;

  return (
    <div className="w-full">
      <div className="mb-4 w-full max-w-xs">
        <SelectDropdown
          options={locationOptions}
          value={selectedLocation}
          onChange={handleLocationChange}
        />
      </div>

      <div className=" text-white pb-2">
        <h2 className="text-center text-xl">{chartTitle}</h2>
      </div>

      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#555"
              vertical={false}
            />
            <XAxis
              dataKey="week"
              tick={{ fill: "#fff", fontSize: 10 }}
              angle={-45}
              textAnchor="end"
              tickMargin={10}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => formatCurrency(value)}
              domain={[0, maxGmDollars]}
              tick={{ fill: "#fff" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
              domain={[0, 70]}
              tick={{ fill: "#fff" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ bottom: 0, left: 25 }}
              payload={[
                { value: "GM Dollars", type: "rect", color: "#4299e1" },
                { value: "GM %", type: "line", color: "#ed8936" },
              ]}
            />
            <Bar
              yAxisId="left"
              dataKey="gmDollars"
              name="GM Dollars"
              fill="#4299e1"
              radius={[2, 2, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="gmPercent"
              name="GM %"
              stroke="#ed8936"
              strokeWidth={3}
              dot={{ fill: "#ed8936", r: 1 }}
              activeDot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
