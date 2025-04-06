// components/Sidebar.tsx
import { Home, Gift, Medal } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-16 bg-white flex flex-col items-center py-4 shadow-md">
      <SidebarIcon icon={<Home />} />
      <SidebarIcon icon={<Gift />} />
      <SidebarIcon icon={<Medal />} />
    </div>
  );
}

function SidebarIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="my-4 text-gray-600 hover:text-blue-500 cursor-pointer">
      {icon}
    </div>
  );
}
