import { BarChartData } from "../chart/bar-chart";
import { BarMultpleChartData } from "../chart/bar-multiple-chart";
import HeadingBox from "../heading-box";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DatasetUsage = ({ data }) => {
  const ageGroups = [
    { min: 18, max: 24, category: "remaja", fill: "var(--color-remaja)" },
    { min: 25, max: 44, category: "dewasa", fill: "var(--color-dewasa)" },
    { min: 45, max: 64, category: "lansia", fill: "var(--color-lansia)" },
  ];

  const chartConfig = {
    remaja: { label: "Remaja", color: "hsl(var(--chart-1))" },
    dewasa: { label: "Dewasa", color: "hsl(var(--chart-2))" },
    lansia: { label: "Lansia", color: "hsl(var(--chart-4))" },
  };

  const chartConfigMultiple = {
    totalAppUsage: { label: "Total App Usage", color: "hsl(var(--chart-4))" },
    totalSocialMediaUsage: { label: "Total Social Media Usage", color: "hsl(var(--chart-1))" },
    totalGamingUsage: { label: "Total Gaming Usage", color: "hsl(var(--chart-2))" },
    totalProductivityUsage: { label: "Total Productivity Usage", color: "hsl(var(--chart-4))" },
  };

  const processData = (data, keys) => {
    return ageGroups.map((group) => {
      const filteredData = data.filter(item => item.Age >= group.min && item.Age <= group.max);
      const result = { age: `${group.min}-${group.max}`, category: group.category };
      keys.forEach(key => {
        result[key] = filteredData.reduce((sum, item) => sum + parseFloat(item[key]), 0).toFixed(2);
      });
      return result;
    });
  };

  const TotalWaktuAplikasi = processData(data, ["Total_App_Usage_Hours"]).map(item => ({
    ...item,
    total: item.Total_App_Usage_Hours,
    fill: ageGroups.find(group => group.category === item.category).fill,
  }));

  const TotalJenisAplikasi = processData(data, [
    "Total_App_Usage_Hours",
    "Social_Media_Usage_Hours",
    "Gaming_App_Usage_Hours",
    "Productivity_App_Usage_Hours",
  ]);

	console.log("Total Waktu Penggunaan Aplikasi:", TotalWaktuAplikasi);

  return (
    <section>
      <HeadingBox title="Analisis Hubungan Antara Kelompok Usia dan Pola Penggunaan Aplikasi" />
      <Tabs defaultValue="account" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Total Waktu Penggunaan Aplikasi</TabsTrigger>
          <TabsTrigger value="password">Total Waktu Berdasarkan Jenis Aplikasi</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="shadow-none rounded-md">
            <BarChartData
              data={TotalWaktuAplikasi}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
            />
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
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DatasetUsage;