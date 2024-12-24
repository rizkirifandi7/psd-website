import { DataTable } from "../data-table"
import HeadingBox from "../heading-box"

const Dataset = ({ data }) => {
  return (
    <section>
      <HeadingBox title="Dataset" />
      <div className="p-4">
        <div className="border p-1 rounded-md">
          <DataTable data={data} />
        </div>
      </div>
    </section>
  )
}

export default Dataset