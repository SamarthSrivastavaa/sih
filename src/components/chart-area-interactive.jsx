"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", emissions: 3200, efficiency: 78 },
  { date: "2024-04-02", emissions: 2850, efficiency: 82 },
  { date: "2024-04-03", emissions: 3100, efficiency: 75 },
  { date: "2024-04-04", emissions: 2750, efficiency: 85 },
  { date: "2024-04-05", emissions: 2900, efficiency: 80 },
  { date: "2024-04-06", emissions: 2650, efficiency: 88 },
  { date: "2024-04-07", emissions: 3000, efficiency: 77 },
  { date: "2024-04-08", emissions: 2550, efficiency: 90 },
  { date: "2024-04-09", emissions: 2800, efficiency: 83 },
  { date: "2024-04-10", emissions: 2700, efficiency: 86 },
  { date: "2024-04-11", emissions: 2600, efficiency: 89 },
  { date: "2024-04-12", emissions: 2500, efficiency: 92 },
  { date: "2024-04-13", emissions: 2450, efficiency: 94 },
  { date: "2024-04-14", emissions: 2400, efficiency: 95 },
  { date: "2024-04-15", emissions: 2350, efficiency: 96 },
  { date: "2024-04-16", emissions: 2300, efficiency: 97 },
  { date: "2024-04-17", emissions: 2250, efficiency: 98 },
  { date: "2024-04-18", emissions: 2200, efficiency: 99 },
  { date: "2024-04-19", emissions: 2150, efficiency: 100 },
  { date: "2024-04-20", emissions: 2100, efficiency: 100 },
  { date: "2024-04-21", emissions: 2050, efficiency: 100 },
  { date: "2024-04-22", emissions: 2000, efficiency: 100 },
  { date: "2024-04-23", emissions: 1950, efficiency: 100 },
  { date: "2024-04-24", emissions: 1900, efficiency: 100 },
  { date: "2024-04-25", emissions: 1850, efficiency: 100 },
  { date: "2024-04-26", emissions: 1800, efficiency: 100 },
  { date: "2024-04-27", emissions: 1750, efficiency: 100 },
  { date: "2024-04-28", emissions: 1700, efficiency: 100 },
  { date: "2024-04-29", emissions: 1650, efficiency: 100 },
  { date: "2024-04-30", emissions: 1600, efficiency: 100 },
  { date: "2024-05-01", emissions: 1550, efficiency: 100 },
  { date: "2024-05-02", emissions: 1500, efficiency: 100 },
  { date: "2024-05-03", emissions: 1450, efficiency: 100 },
  { date: "2024-05-04", emissions: 1400, efficiency: 100 },
  { date: "2024-05-05", emissions: 1350, efficiency: 100 },
  { date: "2024-05-06", emissions: 1300, efficiency: 100 },
  { date: "2024-05-07", emissions: 1250, efficiency: 100 },
  { date: "2024-05-08", emissions: 1200, efficiency: 100 },
  { date: "2024-05-09", emissions: 1150, efficiency: 100 },
  { date: "2024-05-10", emissions: 1100, efficiency: 100 },
  { date: "2024-05-11", emissions: 1050, efficiency: 100 },
  { date: "2024-05-12", emissions: 1000, efficiency: 100 },
  { date: "2024-05-13", emissions: 950, efficiency: 100 },
  { date: "2024-05-14", emissions: 900, efficiency: 100 },
  { date: "2024-05-15", emissions: 850, efficiency: 100 },
  { date: "2024-05-16", emissions: 800, efficiency: 100 },
  { date: "2024-05-17", emissions: 750, efficiency: 100 },
  { date: "2024-05-18", emissions: 700, efficiency: 100 },
  { date: "2024-05-19", emissions: 650, efficiency: 100 },
  { date: "2024-05-20", emissions: 600, efficiency: 100 },
  { date: "2024-05-21", emissions: 550, efficiency: 100 },
  { date: "2024-05-22", emissions: 500, efficiency: 100 },
  { date: "2024-05-23", emissions: 450, efficiency: 100 },
  { date: "2024-05-24", emissions: 400, efficiency: 100 },
  { date: "2024-05-25", emissions: 350, efficiency: 100 },
  { date: "2024-05-26", emissions: 300, efficiency: 100 },
  { date: "2024-05-27", emissions: 250, efficiency: 100 },
  { date: "2024-05-28", emissions: 200, efficiency: 100 },
  { date: "2024-05-29", emissions: 150, efficiency: 100 },
  { date: "2024-05-30", emissions: 100, efficiency: 100 },
  { date: "2024-05-31", emissions: 50, efficiency: 100 },
  { date: "2024-06-01", emissions: 0, efficiency: 100 },
  { date: "2024-06-02", emissions: 0, efficiency: 100 },
  { date: "2024-06-03", emissions: 0, efficiency: 100 },
  { date: "2024-06-04", emissions: 0, efficiency: 100 },
  { date: "2024-06-05", emissions: 0, efficiency: 100 },
  { date: "2024-06-06", emissions: 0, efficiency: 100 },
  { date: "2024-06-07", emissions: 0, efficiency: 100 },
  { date: "2024-06-08", emissions: 0, efficiency: 100 },
  { date: "2024-06-09", emissions: 0, efficiency: 100 },
  { date: "2024-06-10", emissions: 0, efficiency: 100 },
  { date: "2024-06-11", emissions: 0, efficiency: 100 },
  { date: "2024-06-12", emissions: 0, efficiency: 100 },
  { date: "2024-06-13", emissions: 0, efficiency: 100 },
  { date: "2024-06-14", emissions: 0, efficiency: 100 },
  { date: "2024-06-15", emissions: 0, efficiency: 100 },
  { date: "2024-06-16", emissions: 0, efficiency: 100 },
  { date: "2024-06-17", emissions: 0, efficiency: 100 },
  { date: "2024-06-18", emissions: 0, efficiency: 100 },
  { date: "2024-06-19", emissions: 0, efficiency: 100 },
  { date: "2024-06-20", emissions: 0, efficiency: 100 },
  { date: "2024-06-21", emissions: 0, efficiency: 100 },
  { date: "2024-06-22", emissions: 0, efficiency: 100 },
  { date: "2024-06-23", emissions: 0, efficiency: 100 },
  { date: "2024-06-24", emissions: 0, efficiency: 100 },
  { date: "2024-06-25", emissions: 0, efficiency: 100 },
  { date: "2024-06-26", emissions: 0, efficiency: 100 },
  { date: "2024-06-27", emissions: 0, efficiency: 100 },
  { date: "2024-06-28", emissions: 0, efficiency: 100 },
  { date: "2024-06-29", emissions: 0, efficiency: 100 },
  { date: "2024-06-30", emissions: 0, efficiency: 100 },
]

const chartConfig = {
  emissions: {
    label: "CO₂ Emissions (tCO₂)",
    color: "hsl(var(--chart-1))",
  },
  efficiency: {
    label: "Process Efficiency (%)",
    color: "hsl(var(--chart-2))",
  }
}

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Environmental Impact Tracking</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Real-time emissions and efficiency monitoring
          </span>
          <span className="@[540px]/card:hidden">Live monitoring</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex">
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillEmissions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-emissions)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-emissions)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillEfficiency" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-efficiency)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-efficiency)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot" />
              } />
            <Area
              dataKey="efficiency"
              type="natural"
              fill="url(#fillEfficiency)"
              stroke="var(--color-efficiency)"
              stackId="a" />
            <Area
              dataKey="emissions"
              type="natural"
              fill="url(#fillEmissions)"
              stroke="var(--color-emissions)"
              stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
