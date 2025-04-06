'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { Gem } from "lucide-react";


export default function ShopItemDetail({
    item,
    onBack,
    onBuy,
    isPurchased,
  }: {
    item: {
      name: string;
      points: number;
      description: string;
      imageSrc: string;
      imageClass?: string;
    };
    onBack: () => void;
    onBuy?: () => void;
    isPurchased?: boolean;
  }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-16 w-[calc(100%-4rem)] h-full bg-white z-50 p-6 overflow-y-auto"
    >
      <button
        onClick={onBack}
        className="mb-6 px-5 py-2 bg-[#B7CEDE] text-black rounded-xl font-semibold hover:bg-[#A5BFCF] transition"
      >
        ← Back to Shop
      </button>

      <div className="flex flex-col items-center text-center space-y-6 pb-20">
        <img
          src={item.imageSrc}
          alt={item.name}
          className={`max-h-[380px] ${item.imageClass?.replace(/mt-\d+|-mt-\d+/, '')} -mt-6`}
        />
        <h2 className="text-5xl font-extrabold text-[#B7CEDE]">{item.name}</h2>
        <div className="flex items-center text-[#5E5E5E] text-2xl font-semibold gap-1">
  {item.points}
  <Gem className="w-5 h-5 text-[#5E5E5E]" />
</div>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-700">{item.description}</p>

        <button
  onClick={() => {
    if (!isPurchased && onBuy) onBuy();
  }}
  className={`mt-6 text-black text-lg font-semibold px-8 py-3 rounded-xl transition ${
    isPurchased ? 'bg-[#EBDFE1] cursor-default' : 'bg-[#B7CEDE] hover:bg-[#A5BFCF]'
  }`}
  disabled={isPurchased}
>
  {isPurchased ? 'Equip' : 'Buy'}
</button>

      </div>
    </motion.div>
  );
}
