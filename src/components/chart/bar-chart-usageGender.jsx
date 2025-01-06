import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export function BarChartUsageGender({ data, chartConfig, dataKey, barData, judul, deskripsi }) {
	return (
		<Card className="rounded-md border-none shadow-none">
			<CardHeader>
				<CardTitle> {judul} </CardTitle>
				<CardDescription> {deskripsi} </CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={data}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey={dataKey}
							tickLine={false}
							tickMargin={10}
							axisLine={true}
						/>
						<YAxis tickLine={true} tickMargin={10} axisLine={true} />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey={barData} radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
