import { BarChartData } from "../chart/bar-chart"
import HeadingBox from "../heading-box"

const calculateAverageAppsUsedByGender = (data) => {
    const genderGroups = data.reduce((acc, curr) => {
      const gender = curr.Gender;
      const appsUsed = parseInt(curr.Number_of_Apps_Used, 10);
  
      if (!acc[gender]) {
        acc[gender] = { totalApps: 0, count: 0 };
      }
  
      acc[gender].totalApps += appsUsed;
      acc[gender].count += 1;
  
      return acc;
    }, {});
  
    const averages = {};
    for (const gender in genderGroups) {
      averages[gender] = genderGroups[gender].totalApps / genderGroups[gender].count;
    }
  
    return averages;
  };


const DatasetUsageGender = ({data}) => {
    const averageAppsUsedByGender = calculateAverageAppsUsedByGender(data);
    console.log("Average Apps Used by Gender:", averageAppsUsedByGender);

  return (
    <section>
      <HeadingBox title="Data Penggunaan Berdasarkan Gender" />
      <div className="p-4">
        {/* <BarChartData data={averageAppsUsedByGender}/> */}
      </div>
    </section>
  )
}

export default DatasetUsageGender