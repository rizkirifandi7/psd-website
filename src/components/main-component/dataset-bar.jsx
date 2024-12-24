import { BarChartData } from "../chart/bar-chart"
import HeadingBox from "../heading-box"

const DatasetBar = () => {
  return (
    <section>
      <HeadingBox title="Dataset Bar" />
      <div className="p-4">
        <BarChartData />
      </div>
    </section>
  )
}

export default DatasetBar