import HeadingBox from "../heading-box";
import { BarChartUsageGender } from "../chart/bar-chart-usageGender";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardFooter } from "@/components/ui/card";

const DatasetUsageGender = ({ data }) => {
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

    data.forEach((entry) => {
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

    return Object.keys(usageByGender).map((gender) => ({
      category: gender === "Male" ? "Laki-laki" : "Perempuan",
      total: (usageByGender[gender] / countByGender[gender]).toFixed(2),
      fill: gender === "Male" ? "var(--color-male)" : "var(--color-female)",
    }));
  };

  const socialMedia = calculateUsage(data, "Social_Media_Usage_Hours");
  const gaming = calculateUsage(data, "Gaming_App_Usage_Hours");
  const productivity = calculateUsage(data, "Productivity_App_Usage_Hours");

  return (
    <section>
      <HeadingBox title="Data Penggunaan Jenis Aplikasi Berdasarkan Gender" />
      <Tabs defaultValue="social" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="social">Sosial Media</TabsTrigger>
          <TabsTrigger value="gaming">Permainan</TabsTrigger>
          <TabsTrigger value="prod">Produktivitas</TabsTrigger>
        </TabsList>

        <TabsContent value="social">
          <Card className="shadow-none rounded-md">
            <BarChartUsageGender
              data={socialMedia}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
              judul={"Sosial Media"}
            />

            <CardFooter className="flex-col items-start gap-2 text-sm mt-4">
              <div className="flex gap-2 font-semibold">Kesimpulan:</div>
              <div className="">
                <p className="mb-2">
                  Penggunaan aplikasi sosial media lebih sering dipakai oleh
                  Perempuan dibanding Laki-laki.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Laki-laki</span>{" "}
                    menghabiskan waktu rata-rata 2.40 Jam atau 140 Menit per
                    hari dalam penggunaan aplikasi sosial media.
                  </li>
                  <li>
                    <span className="font-semibold">Perempuan</span>{" "}
                    menghabiskan waktu rata-rata 2.52 Jam atau 151.2 Menit per
                    hari dalam penggunaan aplikasi sosial media.
                  </li>
                </ul>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="gaming">
          <Card className="shadow-none rounded-md">
            <BarChartUsageGender
              data={gaming}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
              judul={"Permaianan"}
            />

            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-semibold">Kesimpulan:</div>
              <div className="">
                <p className="mb-2">
                  Penggunaan aplikasi Permainan cenderung disukai oleh Laki-laki
                  maupun Perempuan dengan rata-rata penggunaan yang tidak jauh
                  berbeda.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Laki-laki</span>{" "}
                    menghabiskan waktu rata-rata 2.46 Jam atau 147.6 Menit per
                    hari dalam penggunaan aplikasi permainan.
                  </li>
                  <li>
                    <span className="font-semibold">Perempuan</span>{" "}
                    menghabiskan waktu rata-rata 2.49 Jam atau 149.4 Menit per
                    hari dalam penggunaan aplikasi permainan.
                  </li>
                </ul>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="prod">
          <Card className="shadow-none rounded-md">
            <BarChartUsageGender
              data={productivity}
              chartConfig={chartConfig}
              dataKey="category"
              barData="total"
              judul={"Produktivitas"}
            />

            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-semibold">Kesimpulan:</div>
              <div className="">
                <p className="mb-2">
                  Penggunaan aplikasi Produktivitas disukai oleh Laki-laki
                  maupun Perempuan dengan rata-rata penggunaan yang tidak jauh
                  berbeda.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Laki-laki</span>{" "}
                    menghabiskan waktu rata-rata 2.52 Jam atau 151.2 Menit per
                    hari dalam penggunaan aplikasi produktivitas.
                  </li>
                  <li>
                    <span className="font-semibold">Perempuan</span>{" "}
                    menghabiskan waktu rata-rata 2.47 Jam atau 148.2 Menit per
                    hari dalam penggunaan aplikasi produktivitas.
                  </li>
                </ul>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="p-4"></div>
    </section>
  );
};

export default DatasetUsageGender;
