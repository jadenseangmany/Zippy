'use client';
import { motion } from "framer-motion";

export default function ShopItemDetail({
  item,
  onBack
}: {
  item: {
    name: string;
    points: number;
    description: string;
    imageSrc: string;
    imageClass?: string;
  };
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto"
    >
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-[#B7CEDE] text-black rounded-lg font-semibold hover:bg-[#A5BFCF]"
      >
        Back to Shop
      </button>

      <div className="flex flex-col items-center text-center space-y-6">
        <img
          src={item.imageSrc}
          alt={item.name}
          className={`max-h-[300px] ${item.imageClass}`}
        />
        <h2 className="text-3xl font-bold">{item.name}</h2>
        <div className="text-[#5E5E5E] text-xl font-medium">{item.points} points</div>
        <p className="max-w-xl text-lg">{item.description}</p>
        <button className="mt-6 bg-[#B7CEDE] text-black text-lg font-semibold px-6 py-2 rounded-xl hover:bg-[#A5BFCF]">
          Buy
        </button>
      </div>
    </motion.div>
  );
}
