import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartConfig, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { AreaChart, CartesianGrid, XAxis, YAxis, Area, Line, ReferenceLine } from "recharts";
import { colors } from "../../../../theme";

interface YieldDataPoint {
  month: string;
  yield: number;
  average: number;
}

type TimeRange = '3m' | '6m' | '1y';

const extendedYieldData: YieldDataPoint[] = [
  { month: 'Jan', yield: 4.2, average: 4.0 },
  { month: 'Feb', yield: 3.8, average: 4.0 },
  { month: 'Mar', yield: 5.1, average: 4.2 },
  { month: 'Apr', yield: 4.6, average: 4.3 },
  { month: 'May', yield: 6.2, average: 4.5 },
  { month: 'Jun', yield: 5.4, average: 4.6 },
  { month: 'Jul', yield: 5.8, average: 4.7 },
  { month: 'Aug', yield: 5.2, average: 4.8 },
  { month: 'Sep', yield: 4.9, average: 4.8 },
  { month: 'Oct', yield: 5.5, average: 4.9 },
  { month: 'Nov', yield: 6.0, average: 5.0 },
  { month: 'Dec', yield: 5.7, average: 5.1 },
];

const getMonthsForTimeRange = (range: TimeRange): number => {
  switch (range) {
    case '3m': return 3;
    case '6m': return 6;
    case '1y': return 12;
  }
};

const chartConfig: ChartConfig = {
  yield: {
    label: "Yield",
    color: colors.primary.DEFAULT,
  },
  average: {
    label: "Average",
    color: "#ffffff",
  },
} satisfies ChartConfig;

export default function YieldsSection() {
  const [selectedDataPoint, setSelectedDataPoint] = useState<YieldDataPoint | null>(null);
  const [timeRange, setTimeRange] = useState<TimeRange>('1y');

  const filteredData = extendedYieldData.slice(-getMonthsForTimeRange(timeRange));

  const handleDataPointClick = (data: YieldDataPoint) => {
    setSelectedDataPoint(data);
  };

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Yield Performance</CardTitle>
        <CardDescription>Look at how your yields have performed compared to average trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 gap-3">
          <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full md:w-[180px]" size="sm" variant="outline" onClick={() => setSelectedDataPoint(null)}>Reset Selection</Button>
        </div>
        <ChartContainer config={chartConfig} className="min-h-[150px] max-h-[300px] w-full">
          <AreaChart
            data={filteredData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            onClick={(data) => handleDataPointClick(data.activePayload?.[0]?.payload)}
          >
            <defs>
              <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig.yield.color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartConfig.yield.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="yield" stroke={chartConfig.yield.color} fillOpacity={1} fill="url(#colorYield)" />
            <Line type="monotone" dataKey="average" stroke={chartConfig.average.color} strokeWidth={2} dot={false} />
            {selectedDataPoint && (
              <ReferenceLine x={selectedDataPoint.month} stroke="hsl(var(--chart-3))" strokeDasharray="3 3" />
            )}
          </AreaChart>
        </ChartContainer>
        {selectedDataPoint && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <h4 className="text-lg font-semibold mb-2">Selected Month: {selectedDataPoint.month}</h4>
            <p>Yield: {selectedDataPoint.yield}%</p>
            <p>Average: {selectedDataPoint.average}%</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
