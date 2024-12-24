import HeadingBox from "../heading-box";

const teamMembers = [
  { name: "Rizki Rifani", id: "10121284", imgSrc: "https://dummyimage.com/250x200/f5f5f5/fff" },
  { name: "Rizki Rifani", id: "10121284", imgSrc: "https://dummyimage.com/250x200/f5f5f5/fff" },
  { name: "Rizki Rifani", id: "10121284", imgSrc: "https://dummyimage.com/250x200/f5f5f5/fff" },
  { name: "Rizki Rifani", id: "10121284", imgSrc: "https://dummyimage.com/250x200/f5f5f5/fff" }
];

const TeamMemberCard = ({ name, id, imgSrc }) => (
  <div className="flex flex-col h-full w-full border-x">
    <div className=" h-[200px]">
      <img src={imgSrc} alt="" className="object-cover w-full" />
    </div>
    <div className="flex justify-center items-center flex-col p-4">
      <h1>{name}</h1>
      <p>{id}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section>
      <HeadingBox title="Teams" />
      <div className="grid grid-cols-4">
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