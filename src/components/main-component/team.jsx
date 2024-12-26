import HeadingBox from "../heading-box";

const teamMembers = [
  { name: "Ratih Komalasari", id: "10121288", imgSrc: "ratih.jpeg" },
  { name: "Aditya Suryana", id: "10121297", imgSrc: "adit.jpeg" },
  { name: "Rizki Rifani", id: "10121284", imgSrc: "rizki.jpeg" },
  { name: "Fujianti Azizah", id: "10121292", imgSrc: "fuji.jpeg" },
  { name: "Asri Rizka", id: "10121299", imgSrc: "asri.jpg" }
];

const TeamMemberCard = ({ name, id, imgSrc }) => (
  <div className="flex flex-col h-full w-full border-x">
    <div className=" h-[200px]">
      <img src={imgSrc} alt="" className="object-cover w-full h-[200px]" />
    </div>
    <div className="flex justify-center items-center flex-col p-4">
      <h1 className="font-semibold">{name}</h1>
      <p className="text-sm text-muted-foreground font-semibold">{id}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section>
      <HeadingBox title="Teams" />
      <div className="grid grid-cols-5">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            id={member.id}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;