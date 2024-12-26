import { TrendingUp } from "lucide-react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export function BarChartData({ data, chartConfig, dataKey, barData }) {
	return (
		<Card className="border-none shadow-none">
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={data}
						margin={{
							top: 30,
						}}
					>
						<CartesianGrid vertical={true} />
						<XAxis
							dataKey={dataKey}
							tickLine={true}
							tickMargin={10}
							axisLine={true}
						/>
						<YAxis
							tickLine={true}
							axisLine={true}
							tickMargin={10}
							tickCount={5}
							allowDecimals={false}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Bar dataKey={barData} radius={8}>
							<LabelList
								position="top"
								offset={12}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
