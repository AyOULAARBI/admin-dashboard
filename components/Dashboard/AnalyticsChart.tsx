'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { chartConfig, 
  ChartContainer , 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
   ChartLegendContent } from "@/components/ui/chart";


import { analytics } from '@/data/analytics'

const AnalyticsChart = () => {
  return (
    <>
    <h3 className="mt-10  mb-4 text-xl md:text-3xl">Analytics of visitor's devices :</h3>
    <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
      <BarChart accessibilityLayer data={analytics}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={true}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="phone"  fill="var(--color-phone)" radius={4} />
        <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
      </BarChart>
    </ChartContainer>
    </>
  )
}

export default AnalyticsChart