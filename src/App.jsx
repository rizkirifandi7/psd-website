import { useState } from "react";
import ContainerSection from "./components/container-section";
import Footer from "./components/footer";
import MainLayout from "./components/main-layout";
import Navbar from "./components/navbar";

const App = () => {
	const [dark, setDark] = useState(false);

	return (
		<div className="dark:bg-[#0D0E12] dark:text-white">
			<Navbar setDark={setDark} dark={dark} />
			<ContainerSection>
				<MainLayout />
			</ContainerSection>
			<Footer />
		</div>
	);
};

export default App;

