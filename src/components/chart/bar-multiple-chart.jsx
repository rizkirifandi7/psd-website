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

export function BarMultpleChartData({
	data,
	chartConfig,
	dataKey,
	barOne,
	barTwo,
	barThree,
}) {
	return (
		<Card className="border-none shadow-none">
			<CardContent className>
				<ChartContainer config={chartConfig} className="">
					<BarChart accessibilityLayer data={data} margin={{ top: 30 }}>
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
							domain={[0, 1300]}
						/>
						<ChartTooltip
							cursor={true}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar
							dataKey={barOne}
							fill="var(--color-totalSocialMediaUsage)"
							radius={4}
						>
							<LabelList
								position="top"
								offset={10}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
						<Bar
							dataKey={barTwo}
							fill="var(--color-totalGamingUsage)"
							radius={4}
						>
							<LabelList
								position="top"
								offset={10}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
						<Bar
							dataKey={barThree}
							fill="var(--color-totalProductivityUsage)"
							radius={4}
						>
							<LabelList
								position="top"
								offset={10}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
						<ChartLegend />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
