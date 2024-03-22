import MemberCard from "./MemberCard";

export default function MemberList() {
  const members = [
    {
      id: 1,
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imgUrl: "profile-1",
    },
    { id: 2, name: "Courtney Henry", role: "Designer", imgUrl: "profile-2" },
    {
      id: 3,
      name: "Tom Cook",
      role: "Director of Product",
      imgUrl: "profile-3",
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-sm text-gray-500">
        Team members previously added to projects
      </h3>
      <ul className="mt-4 divide-y border-y">
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </ul>
    </div>
  );
}
