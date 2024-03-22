import Avatar from "./Avatar";
import Button from "./Button";
import { HiPlusSmall } from "react-icons/hi2";

export default function MemberCard({ role, name, ...member }) {
  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Avatar {...member} />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <Button
        variant="secondary"
        text="Invite"
        icon={
          <HiPlusSmall strokeWidth={0.5} className="h-5 w-5 text-gray-400" />
        }
      />
    </li>
  );
}
