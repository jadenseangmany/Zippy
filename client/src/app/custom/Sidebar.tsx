import { Home, ShoppingCart, Settings, Gift } from "lucide-react";

export default function Sidebar({
  onSelectHome,
  onOpenShop,
  onOpenGacha,
}: {
  onSelectHome?: () => void;
  onOpenShop?: () => void;
  onOpenGacha?: () => void;
}) {
  return (
    <div className="w-16 bg-white flex flex-col items-center py-4 shadow-md">
      <SidebarIcon icon={<Home />} onClick={onSelectHome} />
      <SidebarIcon icon={<ShoppingCart />} onClick={onOpenShop} />
      <SidebarIcon icon={<Gift />} onClick={onOpenGacha} />
      <SidebarIcon icon={<Settings />} />
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
