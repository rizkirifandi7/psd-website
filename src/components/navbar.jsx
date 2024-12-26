import { useState } from "react";

const Navbar = () => {
	const [selected, setSelected] = useState("beranda");

	return (
		<nav className="border-b">
			<div className="max-w-5xl mx-auto flex justify-between items-center py-4">
				<h1 className="text-base font-bold">PSD</h1>
				<div className="flex space-x-6">
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
