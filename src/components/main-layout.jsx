import Hero from './main-component/hero'
import Dataset from './main-component/dataset'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import DatasetAge from './main-component/dataset-age'
import DatasetUsage from './main-component/dataset-usage'
import Team from './main-component/team'
import AboutDataset from './main-component/about-dataset'

const MainLayout = () => {
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('data.json');

      if (!response.ok) {
        toast.error("Failed to fetch data");
        return;
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [setData]);

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <Hero />
      <Team/>
      <Dataset data={data} />
      <AboutDataset />
      <DatasetAge data={data} />
      <DatasetUsage data={data} />
    </>
  )
}

export default MainLayout