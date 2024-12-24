import { PieChartData } from "../chart/pie-chart"
import HeadingBox from "../heading-box"

const DatasetAge = ({ data }) => {
  return (
    <section>
      <HeadingBox title="Dataset Age" />
      <div className="">
        <PieChartData data={data} />
      </div>
    </section>
  )
}

export default DatasetAge