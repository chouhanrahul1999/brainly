import { ReactElement } from "react";

export function SidebarItems({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-purple-100 rounded max-w-60 pl-2 transition-all duration-150">
      <div className="pr-2">{icon}</div>
      <div className="">{text}</div>
    </div>
  );
}
