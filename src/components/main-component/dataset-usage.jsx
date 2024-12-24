import { LineChartData } from "../chart/line-chart"
import HeadingBox from "../heading-box"

const DatasetUsage = () => {
  return (
    <section>
      <HeadingBox title="Dataset Usage" />
      <div className="p-4">
        <LineChartData />
      </div>
    </section>
  )
}

export default DatasetUsage