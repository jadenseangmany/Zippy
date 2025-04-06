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
    <div className="fixed top-0 left-0 h-screen w-16 bg-white flex flex-col items-center shadow-md pt-5 z-50">
      {/* Logo */}
      <img
        src="/ZippyIcon.png" // Replace this with your actual image path
        alt="Logo"
        className="w-6 h-6 mb-2"
      />

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
