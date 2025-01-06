import { BarChartData } from "../chart/bar-chart";
import { BarMultpleChartData } from "../chart/bar-multiple-chart";
import HeadingBox from "../heading-box";

import { Card, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LegendChart from "../legend";

const DatasetUsage = ({ data }) => {
	const ageGroups = [
		{ min: 18, max: 24, category: "Remaja", fill: "var(--color-remaja)" },
		{ min: 25, max: 44, category: "Dewasa", fill: "var(--color-dewasa)" },
		{ min: 45, max: 64, category: "Lansia", fill: "var(--color-lansia)" },
	];

	const LegendBar = [
		{ label: "Remaja", color: "bg-chart-1" },
		{ label: "Dewasa", color: "bg-chart-2" },
		{ label: "Lansia", color: "bg-chart-4" },
	];

	const LegendBarMultiple = [
		{ label: "Total Social Media Usage", color: "bg-chart-6" },
		{ label: "Total Gaming Usage", color: "bg-chart-7" },
		{ label: "Total Productivity Usage", color: "bg-chart-8" },
	];

	const chartConfig = {
		remaja: { label: "Remaja", color: "hsl(var(--chart-3))" },
		dewasa: { label: "Dewasa", color: "hsl(var(--chart-4))" },
		lansia: { label: "Lansia", color: "hsl(var(--chart-5))" },
	};

	const chartConfigMultiple = {
		totalAppUsage: { label: "Total App Usage", color: "hsl(var(--chart-4))" },
		totalSocialMediaUsage: {
			label: "Total Social Media Usage",
			color: "hsl(var(--chart-6))",
		},
		totalGamingUsage: {
			label: "Total Gaming Usage",
			color: "hsl(var(--chart-7))",
		},
		totalProductivityUsage: {
			label: "Total Productivity Usage",
			color: "hsl(var(--chart-8))",
		},
	};

	const processData = (data, keys) => {
		return ageGroups.map((group) => {
			const filteredData = data.filter(
				(item) => item.Age >= group.min && item.Age <= group.max
			);
			const result = {
				age: `${group.min}-${group.max}`,
				category: group.category,
			};
			keys.forEach((key) => {
				result[key] = filteredData
					.reduce((sum, item) => sum + parseFloat(item[key]), 0)
					.toFixed(0);
			});
			return result;
		});
	};

	const TotalWaktuAplikasi = processData(data, ["Total_App_Usage_Hours"]).map(
		(item) => ({
			...item,
			total: item.Total_App_Usage_Hours,
			fill: ageGroups.find((group) => group.category === item.category).fill,
		})
	);

	const TotalJenisAplikasi = processData(data, [
		"Total_App_Usage_Hours",
		"Social_Media_Usage_Hours",
		"Gaming_App_Usage_Hours",
		"Productivity_App_Usage_Hours",
	]);


	return (
		<section>
			<HeadingBox title="Analisis Hubungan Antara Kelompok Usia dan Pola Penggunaan Aplikasi" />
			<Tabs defaultValue="account" className="w-full p-4">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="account">
						Total Waktu Penggunaan Aplikasi
					</TabsTrigger>
					<TabsTrigger value="password">
						Total Waktu Berdasarkan Jenis Aplikasi
					</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<Card className="shadow-none rounded-md">
						<BarChartData
							data={TotalWaktuAplikasi}
							chartConfig={chartConfig}
							dataKey="category"
							barData="total"
						/>
						<LegendChart data={LegendBar} />

						<CardFooter className="flex-col items-start gap-2 text-sm">
							<div className="flex gap-2 font-semibold">Kesimpulan:</div>
							<div className="">
								<ul className="list-disc list-inside space-y-2">
									<li>
										<span className="font-semibold">Remaja:</span> memiliki
										total waktu penggunaan aplikasi yang paling rendah
										dibandingkan kelompok usia lainnya. Hal ini mungkin
										disebabkan oleh keterbatasan akses waktu karena kewajiban
										seperti sekolah atau aturan dari orang tua terkait
										penggunaan perangkat.
									</li>
									<li>
										<span className="font-semibold">Dewasa:</span> Kelompok
										dewasa memiliki total waktu penggunaan aplikasi tertinggi.
										Hal ini dapat dikaitkan dengan kebutuhan akan aplikasi dalam
										aktivitas sehari-hari, seperti pekerjaan, komunikasi, atau
										hiburan.
									</li>
									<li>
										<span className="font-semibold">Lansia:</span> menggunakan
										aplikasi dengan waktu yang cukup tinggi, meskipun lebih
										rendah daripada kelompok dewasa. Hal ini menunjukkan bahwa
										lansia tetap aktif menggunakan aplikasi, kemungkinan untuk
										tujuan sosial atau hiburan.
									</li>
								</ul>
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="password">
					<Card className="shadow-none rounded-md">
						<BarMultpleChartData
							data={TotalJenisAplikasi}
							chartConfig={chartConfigMultiple}
							barOne="Social_Media_Usage_Hours"
							barTwo="Gaming_App_Usage_Hours"
							barThree="Productivity_App_Usage_Hours"
							dataKey="category"
						/>
						<LegendChart data={LegendBarMultiple} />
						<CardFooter className="flex-col items-start gap-2 text-sm">
							<div className="flex gap-2 font-semibold">Kesimpulan:</div>
							<div className="">
								<ul className="list-disc list-inside space-y-2">
									<li>
										<span className="font-semibold">Remaja:</span> lebih fokus
										pada aplikasi game dan media sosial, mencerminkan kebutuhan
										hiburan dan interaksi sosial.
									</li>
									<li>
										<span className="font-semibold">Dewasa:</span> memiliki pola
										penggunaan yang lebih seimbang, dengan fokus utama pada
										media sosial dan produktivitas.
									</li>
									<li>
										<span className="font-semibold">Lansia:</span> menunjukkan
										pola penggunaan yang stabil dengan proporsi yang lebih
										merata di antara game, media sosial, dan produktivitas.
									</li>
								</ul>
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default DatasetUsage;
