import HeadingBox from "../heading-box";

const teamMembers = [
	{ name: "Asri Rizka", id: "10121299", imgSrc: "asri.jpeg", role: "UIUX Designer" },
	{ name: "Aditya Suryana", id: "10121297", imgSrc: "adit.jpeg", role: "Software Developer " },
	{ name: "Ratih Komalasari", id: "10121288", imgSrc: "ratih.jpeg", role: "Business Analyst" },
	{ name: "Rizki Rifani", id: "10121284", imgSrc: "rizki.jpeg", role: "Software Developer " },
	{ name: "Fujianti Azizah", id: "10121292", imgSrc: "fuji.jpeg", role: "Business Analyst" },
];

const TeamMemberCard = ({ name, id, imgSrc, role }) => (
	<div className="flex flex-col h-full w-full border-x">
		<div className=" h-[200px]">
			<img src={imgSrc} alt="" className="object-cover w-full h-[200px]" />
		</div>
		<div className="flex justify-center items-center flex-col p-4">
			<h1 className="font-semibold">{name}</h1>
			<p className="text-sm text-muted-foreground font-semibold">{id}</p>
			<p className="text-sm text-muted-foreground font-semibold">{role}</p>
		</div>
	</div>
);

const Team = () => {
	return (
		<section id="anggota">
			<HeadingBox title="Anggota" />
			<div className="grid grid-cols-5">
				{teamMembers.map((member, index) => (
					<TeamMemberCard
						key={index}
						name={member.name}
						id={member.id}
						imgSrc={member.imgSrc}
						role={member.role}
					/>
				))}
			</div>
		</section>
	);
};

export default Team;
