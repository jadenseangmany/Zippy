import { Home, ShoppingCart, Medal } from "lucide-react";

export default function Sidebar({
  onSelectHome,
  onOpenShop,
}: {
  onSelectHome?: () => void;
  onOpenShop?: () => void;
}) {
  return (
    <div className="w-16 bg-white flex flex-col items-center py-4 shadow-md">
      <SidebarIcon icon={<Home />} onClick={onSelectHome} />
      <SidebarIcon icon={<ShoppingCart />} onClick={onOpenShop} />
      <SidebarIcon icon={<Medal />} />
    </div>
  );
}

function SidebarIcon({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className="my-4 text-gray-600 hover:text-blue-500 cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </div>
  );
}