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
} from "recharts";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Replace the weeklyData array with this enhanced version that includes location data
const baseWeeklyData = [
  {
    week: "W01",
    weekLabel: "Week 01",
    month: "M01",
    monthLabel: "Feb",
    gmDollars: 140061.78,
    salesDollars: 239526.34,
    gmPercent: 58,
  },
  {
    week: "W02",
    weekLabel: "Week 02",
    month: "M01",
    monthLabel: "Feb",
    gmDollars: 110391.21,
    salesDollars: 258634.6,
    gmPercent: 43,
  },
  {
    week: "W03",
    weekLabel: "Week 03",
    month: "M01",
    monthLabel: "Feb",
    gmDollars: 101657.28,
    salesDollars: 263774.46,
    gmPercent: 39,
  },
  {
    week: "W04",
    weekLabel: "Week 04",
    month: "M01",
    monthLabel: "Feb",
    gmDollars: 134341.07,
    salesDollars: 332652.41,
    gmPercent: 40,
  },
  {
    week: "W05",
    weekLabel: "Week 05",
    month: "M02",
    monthLabel: "Mar",
    gmDollars: 130398.15,
    salesDollars: 275162.26,
    gmPercent: 47,
  },
  {
    week: "W06",
    weekLabel: "Week 06",
    month: "M02",
    monthLabel: "Mar",
    gmDollars: 137438.96,
    salesDollars: 319884.6,
    gmPercent: 43,
  },
  {
    week: "W07",
    weekLabel: "Week 07",
    month: "M02",
    monthLabel: "Mar",
    gmDollars: 116387.03,
    salesDollars: 252500.95,
    gmPercent: 46,
  },
  {
    week: "W08",
    weekLabel: "Week 08",
    month: "M02",
    monthLabel: "Mar",
    gmDollars: 159070.65,
    salesDollars: 335894.42,
    gmPercent: 47,
  },
  {
    week: "W09",
    weekLabel: "Week 09",
    month: "M02",
    monthLabel: "Mar",
    gmDollars: 88328.55,
    salesDollars: 174790.68,
    gmPercent: 51,
  },
  {
    week: "W10",
    weekLabel: "Week 10",
    month: "M03",
    monthLabel: "Apr",
    gmDollars: 119284.46,
    salesDollars: 261782.66,
    gmPercent: 46,
  },
  {
    week: "W11",
    weekLabel: "Week 11",
    month: "M03",
    monthLabel: "Apr",
    gmDollars: 130099.18,
    salesDollars: 292137.38,
    gmPercent: 45,
  },
  {
    week: "W12",
    weekLabel: "Week 12",
    month: "M03",
    monthLabel: "Apr",
    gmDollars: 139360.58,
    salesDollars: 284207.55,
    gmPercent: 49,
  },
  {
    week: "W13",
    weekLabel: "Week 13",
    month: "M03",
    monthLabel: "Apr",
    gmDollars: 128456.87,
    salesDollars: 294047.89,
    gmPercent: 44,
  },
  {
    week: "W14",
    weekLabel: "Week 14",
    month: "M04",
    monthLabel: "May",
    gmDollars: 86661.91,
    salesDollars: 189073.83,
    gmPercent: 46,
  },
  {
    week: "W15",
    weekLabel: "Week 15",
    month: "M04",
    monthLabel: "May",
    gmDollars: 151592.15,
    salesDollars: 271421.42,
    gmPercent: 56,
  },
  {
    week: "W16",
    weekLabel: "Week 16",
    month: "M04",
    monthLabel: "May",
    gmDollars: 151686.17,
    salesDollars: 347732.0,
    gmPercent: 44,
  },
  {
    week: "W17",
    weekLabel: "Week 17",
    month: "M04",
    monthLabel: "May",
    gmDollars: 88672.61,
    salesDollars: 206735.46,
    gmPercent: 43,
  },
  {
    week: "W18",
    weekLabel: "Week 18",
    month: "M05",
    monthLabel: "Jun",
    gmDollars: 81851.01,
    salesDollars: 175256.89,
    gmPercent: 47,
  },
  {
    week: "W19",
    weekLabel: "Week 19",
    month: "M05",
    monthLabel: "Jun",
    gmDollars: 117644.42,
    salesDollars: 257209.45,
    gmPercent: 46,
  },
  {
    week: "W20",
    weekLabel: "Week 20",
    month: "M05",
    monthLabel: "Jun",
    gmDollars: 75460.72,
    salesDollars: 196483.55,
    gmPercent: 38,
  },
  {
    week: "W21",
    weekLabel: "Week 21",
    month: "M05",
    monthLabel: "Jun",
    gmDollars: 89873.37,
    salesDollars: 232307.36,
    gmPercent: 39,
  },
  {
    week: "W22",
    weekLabel: "Week 22",
    month: "M05",
    monthLabel: "Jun",
    gmDollars: 217801.24,
    salesDollars: 400567.98,
    gmPercent: 54,
  },
  {
    week: "W23",
    weekLabel: "Week 23",
    month: "M06",
    monthLabel: "Jul",
    gmDollars: 80015.21,
    salesDollars: 187739.22,
    gmPercent: 43,
  },
  {
    week: "W24",
    weekLabel: "Week 24",
    month: "M06",
    monthLabel: "Jul",
    gmDollars: 99365.58,
    salesDollars: 233854.94,
    gmPercent: 42,
  },
  {
    week: "W25",
    weekLabel: "Week 25",
    month: "M06",
    monthLabel: "Jul",
    gmDollars: 146165.37,
    salesDollars: 338581.81,
    gmPercent: 43,
  },
  {
    week: "W26",
    weekLabel: "Week 26",
    month: "M06",
    monthLabel: "Jul",
    gmDollars: 90708.15,
    salesDollars: 281071.52,
    gmPercent: 32,
  },
  {
    week: "W27",
    weekLabel: "Week 27",
    month: "M07",
    monthLabel: "Aug",
    gmDollars: 180504.75,
    salesDollars: 276942.13,
    gmPercent: 65,
  },
  {
    week: "W28",
    weekLabel: "Week 28",
    month: "M07",
    monthLabel: "Aug",
    gmDollars: 139442.48,
    salesDollars: 303695.38,
    gmPercent: 46,
  },
  {
    week: "W29",
    weekLabel: "Week 29",
    month: "M07",
    monthLabel: "Aug",
    gmDollars: 139216.77,
    salesDollars: 314421.17,
    gmPercent: 44,
  },
  {
    week: "W30",
    weekLabel: "Week 30",
    month: "M07",
    monthLabel: "Aug",
    gmDollars: 100489.04,
    salesDollars: 262484.91,
    gmPercent: 38,
  },
  {
    week: "W31",
    weekLabel: "Week 31",
    month: "M08",
    monthLabel: "Sep",
    gmDollars: 152765.66,
    salesDollars: 316858.04,
    gmPercent: 48,
  },
  {
    week: "W32",
    weekLabel: "Week 32",
    month: "M08",
    monthLabel: "Sep",
    gmDollars: 75704.04,
    salesDollars: 169452.56,
    gmPercent: 45,
  },
  {
    week: "W33",
    weekLabel: "Week 33",
    month: "M08",
    monthLabel: "Sep",
    gmDollars: 167605.48,
    salesDollars: 340037.18,
    gmPercent: 49,
  },
  {
    week: "W34",
    weekLabel: "Week 34",
    month: "M08",
    monthLabel: "Sep",
    gmDollars: 79485.96,
    salesDollars: 234269.32,
    gmPercent: 34,
  },
  {
    week: "W35",
    weekLabel: "Week 35",
    month: "M08",
    monthLabel: "Sep",
    gmDollars: 119596.45,
    salesDollars: 256836.52,
    gmPercent: 47,
  },
  {
    week: "W36",
    weekLabel: "Week 36",
    month: "M09",
    monthLabel: "Oct",
    gmDollars: 120675.47,
    salesDollars: 260032.26,
    gmPercent: 46,
  },
  {
    week: "W37",
    weekLabel: "Week 37",
    month: "M09",
    monthLabel: "Oct",
    gmDollars: 97413.66,
    salesDollars: 257055.42,
    gmPercent: 38,
  },
  {
    week: "W38",
    weekLabel: "Week 38",
    month: "M09",
    monthLabel: "Oct",
    gmDollars: 155962.01,
    salesDollars: 340058.58,
    gmPercent: 46,
  },
  {
    week: "W39",
    weekLabel: "Week 39",
    month: "M09",
    monthLabel: "Oct",
    gmDollars: 37571.16,
    salesDollars: 161007.9,
    gmPercent: 23,
  },
  {
    week: "W40",
    weekLabel: "Week 40",
    month: "M10",
    monthLabel: "Nov",
    gmDollars: 121974.94,
    salesDollars: 242047.42,
    gmPercent: 50,
  },
  {
    week: "W41",
    weekLabel: "Week 41",
    month: "M10",
    monthLabel: "Nov",
    gmDollars: 128438.16,
    salesDollars: 196580.97,
    gmPercent: 65,
  },
  {
    week: "W42",
    weekLabel: "Week 42",
    month: "M10",
    monthLabel: "Nov",
    gmDollars: 71208.94,
    salesDollars: 201049.32,
    gmPercent: 35,
  },
  {
    week: "W43",
    weekLabel: "Week 43",
    month: "M10",
    monthLabel: "Nov",
    gmDollars: 128752.29,
    salesDollars: 293362.74,
    gmPercent: 44,
  },
  {
    week: "W44",
    weekLabel: "Week 44",
    month: "M11",
    monthLabel: "Dec",
    gmDollars: 55866.91,
    salesDollars: 259462.35,
    gmPercent: 22,
  },
  {
    week: "W45",
    weekLabel: "Week 45",
    month: "M11",
    monthLabel: "Dec",
    gmDollars: 134230.98,
    salesDollars: 358561.15,
    gmPercent: 37,
  },
  {
    week: "W46",
    weekLabel: "Week 46",
    month: "M11",
    monthLabel: "Dec",
    gmDollars: 146587.86,
    salesDollars: 281889.16,
    gmPercent: 52,
  },
  {
    week: "W47",
    weekLabel: "Week 47",
    month: "M11",
    monthLabel: "Dec",
    gmDollars: 73497.75,
    salesDollars: 209428.43,
    gmPercent: 35,
  },
  {
    week: "W48",
    weekLabel: "Week 48",
    month: "M11",
    monthLabel: "Dec",
    gmDollars: 133371.47,
    salesDollars: 233990.84,
    gmPercent: 57,
  },
  {
    week: "W49",
    weekLabel: "Week 49",
    month: "M12",
    monthLabel: "Jan",
    gmDollars: 73773.56,
    salesDollars: 225732.78,
    gmPercent: 33,
  },
  {
    week: "W50",
    weekLabel: "Week 50",
    month: "M12",
    monthLabel: "Jan",
    gmDollars: 110037.62,
    salesDollars: 244378.2,
    gmPercent: 45,
  },
  {
    week: "W51",
    weekLabel: "Week 51",
    month: "M12",
    monthLabel: "Jan",
    gmDollars: 96149.38,
    salesDollars: 266757.29,
    gmPercent: 36,
  },
  {
    week: "W52",
    weekLabel: "Week 52",
    month: "M12",
    monthLabel: "Jan",
    gmDollars: 138093.51,
    salesDollars: 245570.72,
    gmPercent: 56,
  }
];

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

const monthlyGroups = Array.from(
  new Set(baseWeeklyData.map((item) => item.month))
).map((month) => {
  const monthItem = baseWeeklyData.find((item) => item.month === month);
  return {
    value: month,
    label: `${monthItem?.monthLabel} (${month.replace("M", "")})`,
  };
});

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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
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

  // Calculate max value for Y axis based on current data
  const maxGmDollars =
    Math.ceil(Math.max(...filteredData.map((item) => item.gmDollars)) / 50000) *
    50000;

  return (
    <div className="w-full">
      {/* <div className="mb-4 w-full max-w-xs">
        <Select value={selectedLocation} onValueChange={handleLocationChange}>
          <SelectTrigger className="w-full border-2 border-gray-300 rounded">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}

      {/* <Card className="w-full">
        <CardHeader className="bg-[#333] text-white pb-2">
          <CardTitle className="text-center text-xl">{chartTitle}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 bg-[#333]">
         
        </CardContent>
      </Card> */}
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
