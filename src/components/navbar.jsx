import { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
	const [selected, setSelected] = useState("beranda");

	const darkModeHandler = () => {
		setDark(!dark);
		document.body.classList.toggle("dark");
	};

	return (
		<nav className="border-b">
			<div className="max-w-5xl mx-auto flex justify-between items-center py-4">
				<h1 className="text-base font-bold">PSD</h1>
				<div className="flex items-center space-x-6">
					<a
						href="#beranda"
						className={
							selected === "beranda" ? "text-sm font-semibold" : "text-sm "
						}
						onClick={() => setSelected("beranda")}
					>
						Beranda
					</a>
					<a
						href="#anggota"
						className={
							selected === "anggota" ? "text-sm font-semibold" : "text-sm "
						}
						onClick={() => setSelected("anggota")}
					>
						Anggota
					</a>
					<a
						href="#informasi"
						className={
							selected === "informasi" ? "text-sm font-semibold" : "text-sm "
						}
						onClick={() => setSelected("informasi")}
					>
						Informasi
					</a>
					<a
						href="#analisa"
						className={
							selected === "analisa" ? "text-sm font-semibold" : "text-sm "
						}
						onClick={() => setSelected("analisa")}
					>
						Analisa
					</a>

					<div className="">
						<Button onClick={darkModeHandler} size="icon" variant="outline">
							{dark ? <Moon /> : <Sun />}
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
