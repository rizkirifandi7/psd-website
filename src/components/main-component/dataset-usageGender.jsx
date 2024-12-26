import HeadingBox from "../heading-box";
import { BarChartUsageGender } from "../chart/bar-chart-usageGender";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const DatasetUsageGender = ({data}) => {
  const chartConfig = {
    male: {
      label: "Laki-laki",
      color: "hsl(var(--chart-1))",
    },
    female: {
      label: "Perempuan",
      color: "hsl(var(--chart-2))",
    },
  };

  const calculateUsage = (data, usageKey) => {
    const usageByGender = {};
    const countByGender = {};

    data.forEach(entry => {
      const gender = entry.Gender;
      const usageHours = parseFloat(entry[usageKey]);

      if (usageByGender[gender]) {
        usageByGender[gender] += usageHours;
        countByGender[gender] += 1;
      } else {
        usageByGender[gender] = usageHours;
        countByGender[gender] = 1;
      }
    });

    return Object.keys(usageByGender).map(gender => ({
      category: gender === 'Male' ? 'Laki-laki' : 'Perempuan',
      total: (usageByGender[gender] / countByGender[gender]).toFixed(2),
      fill: gender === 'Male' ? 'var(--color-male)' : 'var(--color-female)'
    }));
  };

  const socialMedia = calculateUsage(data, 'Social_Media_Usage_Hours');
  const gaming = calculateUsage(data, 'Gaming_App_Usage_Hours');
  const productivity = calculateUsage(data, 'Productivity_App_Usage_Hours');

  return (
    <section>
      <HeadingBox title="Data Penggunaan Jenis Aplikasi Berdasarkan Gender" />
      <Tabs defaultValue="social" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="social">Sosial Media</TabsTrigger>
          <TabsTrigger value="gaming">Gaming</TabsTrigger>
          <TabsTrigger value="prod">Produktivitas</TabsTrigger>
        </TabsList>

        <TabsContent value="social">
          <Card className="shadow-none rounded-md">
            <BarChartUsageGender 
              data={socialMedia}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
            />
          </Card>
        </TabsContent>

        <TabsContent value="gaming">
          <Card className="shadow-none rounded-md">
            <BarChartUsageGender 
              data={gaming}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
            />
          </Card>
        </TabsContent>

        <TabsContent value="prod">
          <Card className="shadow-none rounded-md">
            <BarChartUsageGender 
              data={productivity}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
            />
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="p-4"></div>
    </section>
  );
};

export default DatasetUsageGender;