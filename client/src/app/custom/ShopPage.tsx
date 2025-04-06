'use client';
import { Gift } from "lucide-react";
import { Gem } from "lucide-react";



import { motion } from "framer-motion";
import ShopCard from "./ShopCardComponent";
import { useState } from "react"; 
import ShopItemDetail from './ShopItemPage';



const items = [
    {
      id: 1,
      name: "Flower Clip",
      points: 200,
      description: "Add a touch of elegance to your pet’s look with our delightful flower clips! Perfect for every season, these cute and vibrant clips are designed to bring out your pet's natural charm while adding a splash of color. ",
      imageSrc: "/flower.png",
      imageClass: "scale-60 mt-45",
      category: "cosmetic",
    },
    {
      id: 2,
      name: "Cozy Scarf",
      points: 500,
      description: "Keep your furry friend warm and stylish with our adorable, soft scarves made just for pets! Whether it's a chilly day or you just want to add a little extra cuteness to their look, our scarves are the perfect accessory.",
      imageSrc: "/scarf.png",
      imageClass: "scale-50 -mt-18",
      category: "cosmetic",
    },
    {
        id: 3,
        name: "Sparkle and Shine",
        points: 250,
        description: "Add a little extra twinkle to your pet’s look with our sparkling glitter clips! These dazzling accessories are perfect for pets who love to shine, featuring eye-catching sparkles that catch the light with every move.",
        imageSrc: "/sparkle.png",
        imageClass: "scale-50 mt-40",
        category: "cosmetic",
      },
      {
        id: 4,
        name: "Dapper Top Hat",
        points: 1000,
        description: "Give your furry friend a touch of elegance with our charming Dapper Top Hats! Perfect for special occasions, photoshoots, or simply adding a bit of flair to your pet’s everyday look.",
        imageSrc: "/topHat.png",
        imageClass: "scale-75 mt-65",
        category: "cosmetic",
      },
      {
        id: 5,
        name: "Royal Crown",
        points: 800,
        description: "Make your pet feel like true royalty with our elegant and regal crowns! Perfect for special occasions, photoshoots, or simply giving your furry friend a royal touch, these crowns are designed to add a majestic flair to their look. Light, comfortable, and secure, they’ll have your pet feeling like the king or queen.",
        imageSrc: "/crown.png",
        imageClass: "scale-90 mt-75",
        category: "cosmetic",
      },
      {
        id: 6,
        name: "Baseball Cap",
        points: 400,
        description: "Get your pet ready for some fun in the sun with our sporty and stylish baseball hats! Perfect for those outdoor adventures or just showing off their team spirit, these hats offer both comfort and style. Made with breathable materials and a secure fit, your furry friend will stay cool while looking cool.",
        imageSrc: "/hat.png",
        imageClass: "scale-60 mt-50",
        category: "cosmetic",
      },
      {
        id: 7,
        name: "12-Hour Extension (Limit 1)",
        points: 3000,
        description: "Because sometimes, the best ideas come after a good nap. Use this to give yourself a little more time to perfect that masterpiece. But don’t get too comfy — it’s a one-time-only treat!",
        imageSrc: "/clock.png",
        imageClass: "scale-20 mt-0",
        category: "academic",
      },
      {
        id: 8,
        name: "Hint For the Win",
        points: 1000,
        description: "Stuck in a jam? No worries! Use this to unlock a hint that might just be your secret weapon. Think of it as your personal cheat code — but without the guilt!",
        imageSrc: "/Lightbulb.png",
        imageClass: "scale-20 mt-6",
        category: "academic",
      },
  ];

  export default function ShopPage({ onClose, onOpenGacha }: { onClose?: () => void; onOpenGacha?: () => void }) {
    const [filter, setFilter] = useState<"all" | "academic" | "cosmetic">("all");
    const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);
    const [purchasedItems, setPurchasedItems] = useState<number[]>([]);




    return selectedItem ? (
        <ShopItemDetail
        item={selectedItem}
        onBack={() => setSelectedItem(null)}
        onBuy={() => {
          setPurchasedItems((prev) => [...new Set([...prev, selectedItem.id])]);
        }}
        isPurchased={purchasedItems.includes(selectedItem.id)}
      />
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute top-0 left-16 w-[calc(100%-4rem)] h-full bg-white shadow-xl z-50"
        >
          <div className="p-6 h-full overflow-y-auto">
            {/* Top bar */}
            <div className="flex justify-end mb-4">
            <div className="flex justify-between items-center mb-4 w-full">
            {/* Left: Points */}
            <div className="bg-[#B7CEDE] text-black font-semibold px-4 py-2 rounded-xl">
            <div className="flex items-center space-x-1">
  <span>9,201</span>
  <Gem className="w-4 h-4 text-black" />
</div>
            </div>

            {/* Center: Gift Button */}
            <button
  onClick={onOpenGacha}
  className="flex items-center space-x-2 px-4 py-2 bg-[#B7CEDE] hover:bg-[#A5BFCF] text-black font-semibold rounded-xl transition"
>
  <Gift className="w-5 h-5" />
  <span>Summon a Pet!</span>
</button>

            {/* Right: Dropdown */}
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as "all" | "academic" | "cosmetic")}
                className="bg-[#B7CEDE] text-black font-semibold px-3 py-2 rounded-xl hover:bg-[#A5BFCF] focus:outline-none"
            >
                <option value="all">Show All</option>
                <option value="academic">Show Academic</option>
                <option value="cosmetic">Show Cosmetic</option>
            </select>
            </div>
            </div>
      
            {/* Shop grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items
                .filter((item) => filter === "all" || item.category === filter)
                .map((item) => (
                <ShopCard
                key={item.id}
                name={item.name}
                points={item.points}
                description={item.description}
                imageSrc={item.imageSrc}
                imageClass={item.imageClass}
                onClick={() => setSelectedItem(item)}
                isPurchased={purchasedItems.includes(item.id)} 
                />
                ))}
            </div>
          </div>
        </motion.div>
);
}