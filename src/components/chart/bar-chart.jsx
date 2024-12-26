import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
	ChartContainer,
	ChartLegend,
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
						<ChartTooltip cursor={true} content={<ChartTooltipContent />} />
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
		</Card>
	);
}
