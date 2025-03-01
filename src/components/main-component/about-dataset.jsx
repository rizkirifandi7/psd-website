import { useState } from "react";
import HeadingBox from "../heading-box";
import { Card } from "../ui/card";

const cardData = [
	{
		id: "tentang",
		title: "Tentang",
		content: (
			<>
				<h1 className="text-base font-semibold">Tentang Dataset</h1>
				<p>
					Dataset ini memberikan wawasan tentang pola penggunaan ponsel harian
					dari 1.000 pengguna, mencakup aspek seperti waktu layar, penggunaan
					aplikasi, dan keterlibatan pengguna di berbagai kategori aplikasi.
				</p>
				<p>
					Dataset ini mencakup beragam pengguna berdasarkan usia, dan jenis
					kelamin
				</p>
				<p>
					Data ini berfokus pada total penggunaan aplikasi, waktu yang
					dihabiskan untuk media sosial, aplikasi produktivitas, dan aplikasi
					gaming, serta keseluruhan waktu layar.
				</p>
				<p>
					Informasi ini sangat berguna untuk memahami tren perilaku dan
					preferensi penggunaan aplikasi, sehingga bermanfaat bagi pengembang
					aplikasi, pemasaran, dan peneliti UX.
				</p>
				<p>
					Dataset ini berguna untuk menganalisis keterlibatan pengguna ponsel,
					dan kebiasaan penggunaan aplikasi. Dataset ini dapat membantu
					mengidentifikasi tren untuk pemasaran, pengembangan aplikasi, dan
					optimalisasi pengalaman pengguna.
				</p>
			</>
		),
	},
	{
		id: "tujuan",
		title: "Tujuan",
		content: (
			<>
				<h1 className="text-base font-semibold">Tujuan Dataset</h1>
				<p>
					Dataset ini memungkinkan pemahaman yang lebih dalam tentang perilaku
					pengguna ponsel dan keterlibatan aplikasi di berbagai kelompok
					demografi.
				</p>
				<p>
					Hasil utama mencakup wawasan tentang preferensi penggunaan aplikasi,
					kebiasaan waktu layar harian, dampak usia, serta jenis kelamin
					terhadap perilaku penggunaan ponsel.
				</p>
				<p>
					Analisis ini dapat membantu mengidentifikasi pola untuk meningkatkan
					pengalaman pengguna, menyusun strategi pemasaran yang lebih tepat, dan
					mengoptimalkan pengembangan aplikasi untuk berbagai segmen pengguna.
				</p>
			</>
		),
	},
	{
		id: "attribute",
		title: "Attribute",
		content: (
			<>
				<h1 className="text-base font-semibold">Attribute Dataset</h1>
				<ul className="list-disc pl-4 space-y-1">
					<li>
						<b>id</b>: ID unik pengguna
					</li>
					<li>
						<b>age</b>: Usia pengguna
					</li>
					<li>
						<b>Gender</b>: Jenis kelamin pengguna
					</li>
					<li>
						<b>Number_of_Apps_Used</b>: Jumlah aplikasi yang digunakan oleh
						pengguna
					</li>
					<li>
						<b>Daily_Screen_Time_Hours</b>: Jumlah jam pengguna menghabiskan
						waktu di layar setiap hari
					</li>
					<li>
						<b>Gaming_App_Usage_Hours</b>: Jumlah jam pengguna menghabiskan
						waktu menggunakan aplikasi game setiap hari
					</li>
					<li>
						<b>Total_App_Usage_Hours</b>: Jumlah total jam pengguna menghabiskan
						waktu menggunakan aplikasi setiap hari
					</li>
					<li>
						<b>Social_Media_Usage_Hours</b>: Jumlah jam pengguna menghabiskan
						waktu menggunakan media sosial setiap hari
					</li>
					<li>
						<b>Productivity_App_Usage_Hours</b>: Jumlah jam pengguna
						menghabiskan waktu menggunakan aplikasi produktivitas setiap hari
					</li>
				</ul>
			</>
		),
	},
];

const AboutDataset = () => {
	const [selectedCard, setSelectedCard] = useState("tentang");

	return (
		<section id="informasi">
			<HeadingBox title="Informasi Dataset" />
			<div className="flex h-[400px]">
				<div className="basis-1/3 flex flex-col gap-4 p-4 border-r">
					{cardData.map((card) => (
						<Card
							key={card.id}
							className={
								selectedCard === card.id
									? "rounded-md font-bold text-sm"
									: "shadow-none rounded-md cursor-pointer text-sm"
							}
							onClick={() => setSelectedCard(card.id)}
						>
							<h1 className="p-3 ">{card.title}</h1>
						</Card>
					))}
				</div>
				<div className="w-full h-full overflow-y-auto p-4 flex flex-col gap-4 text-sm">
					{cardData.find((card) => card.id === selectedCard)?.content}
				</div>
			</div>
		</section>
	);
};

export default AboutDataset;
