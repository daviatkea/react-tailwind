import { HiOutlineUserGroup } from "react-icons/hi";

export default function Header() {
  return (
    <header className="text-center">
      <HiOutlineUserGroup
        strokeWidth={1}
        className="mx-auto h-12 w-12 text-gray-400"
      />
      <h1 className="text-md mt-2 font-semibold">Add team members</h1>
      <p className="mt-1 text-sm font-light text-gray-500">
        You haven’t added any team members to your project yet. As the owner of
        this project, you can manage team member permissions.
      </p>
    </header>
  );
}
