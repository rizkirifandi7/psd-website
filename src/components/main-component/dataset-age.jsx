import { PieChartData } from "../chart/pie-chart";
import HeadingBox from "../heading-box";

const chartConfigAge = {
  remaja: {
    label: "Remaja",
    color: "hsl(var(--chart-1))",
  },
  dewasa: {
    label: "Dewasa",
    color: "hsl(var(--chart-2))",
  },
  lansia: {
    label: "Lansia",
    color: "hsl(var(--chart-3))",
  },
};

const chartConfigGender = {
  male: {
    label: "Laki-laki",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "Perempuan",
    color: "hsl(var(--chart-2))",
  },
};

const filterAndCountByAgeRange = (data, minAge, maxAge, category, fill) => {
  const filteredDataAge = data.filter(
    (item) => item.Age >= minAge && item.Age <= maxAge
  );
  return {
    category,
    age: `${minAge}-${maxAge}`,
    total: filteredDataAge.length,
    fill,
  };
};

const filterAndCountByGender = (data, gender, fill, category) => {
  const filteredDataGender = data.filter((item) => item.Gender === gender);
  const genderLabel = gender === "Male" ? "Laki-laki" : "Perempuan";
  return { gender: genderLabel, total: filteredDataGender.length, fill, category };
};

const DatasetAge = ({ data }) => {
  const ageRanges = [
    { min: 18, max: 24, category: "remaja", fill: "var(--color-remaja)" },
    { min: 25, max: 44, category: "dewasa", fill: "var(--color-dewasa)" },
    { min: 45, max: 64, category: "lansia", fill: "var(--color-lansia)" },
    // Add more ranges as needed
  ];

  const genderCategories = [
    { gender: "Male", fill: "var(--color-male)", category: "male" },
    { gender: "Female", fill: "var(--color-female)", category: "female" },
    // Add more categories as needed
  ];

  const filteredDataAge = ageRanges.map((range) =>
    filterAndCountByAgeRange(
      data,
      range.min,
      range.max,
      range.category,
      range.fill
    )
  );
  const filteredDataGender = genderCategories.map((category) =>
    filterAndCountByGender(data, category.gender, category.fill, category.category)
  );

  return (
    <section>
      <HeadingBox title="Data Umur & Jenis Kelamin" />
      <div className="flex">
        <div className="flex-1 p-4">
          <PieChartData
            data={filteredDataAge}
            config={chartConfigAge}
            legend={"category"}
            dataKey={"total"}
            nameKey={"age"}
            judul={"Umur"}
          />
        </div>
        <div className="flex-1 p-4">
          <PieChartData
            data={filteredDataGender}
            config={chartConfigGender}
            legend={"category"}
            dataKey={"total"}
            nameKey={"gender"}
            judul={"Jenis Kelamin"}
          />
        </div>
      </div>
    </section>
  );
};

export default DatasetAge;
