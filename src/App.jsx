import ContainerSection from "./components/container-section"
import Footer from "./components/footer"
import MainLayout from "./components/main-layout"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <ContainerSection>
        <MainLayout />
      </ContainerSection>
      <Footer />
    </>
  )
}

export default App