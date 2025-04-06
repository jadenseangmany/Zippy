'use client';
import { X } from "lucide-react";


import { useState } from "react";
import { Sparkles, PawPrint, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GachaPage({ onBack }: { onBack: () => void }) {
  const [isRolling, setIsRolling] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const pets = [
    { name: "Ducky", image: "/petDuck.png" },
    { name: "Lil Pupper", image: "/petPuppy.png" },
    { name: "Mochi", image: "/petBunny.png" },
    { name: "Sleepy Snorlax", image: "/Snorlax.png" },
    { name: "Soonie", image: "/petCat.png" },
    { name: "Smoll Shaymin", image: "/Shaymin.png" },
  ];

  const handleRoll = () => {
    setIsRolling(true);
    setResult(null);
    setBoxOpen(false);

    // Shake the box for 1 second
    setTimeout(() => {
      setBoxOpen(true); // open box
    }, 1000);

    // Show pet result 0.8s after box opens
    setTimeout(() => {
      const newPet = pets[Math.floor(Math.random() * pets.length)];
      setResult(newPet.name);
      setIsRolling(false);
    }, 1800);
  };

  const getPetImage = (name: string | null) => {
    return pets.find((pet) => pet.name === name)?.image || "";
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="absolute top-0 left-16 w-[calc(100%-4rem)] h-full bg-white shadow-xl z-50 flex flex-col items-center justify-center p-8"
    >
<button
  onClick={onBack}
  className="absolute top-4 left-4 text-gray-600 hover:text-black transition"
  aria-label="Close"
>
  <X className="w-5 h-5" />
</button>

      <h1 className="text-3xl font-bold text-[#B7CEDE] pb-20 flex items-center gap-2">
      <PawPrint className="w-8 h-8 text-[#B7CEDE]" />
        Pet Summoning
      </h1>

      <div className="relative w-64 h-64 mb-10">
        {/* Closed or Open Box */}
        {!boxOpen ? (
          <motion.img
            key="box-closed"
            src="/Closed_box.png"
            alt="Closed Box"
            className="absolute w-full h-full object-contain"
            animate={isRolling ? { rotate: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ) : (
          <motion.img
            key="box-open"
            src="/Open_box.png"
            alt="Open Box"
            className="absolute w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Pet Reveal */}
        <AnimatePresence>
          {result && (
            <motion.img
              key="pet"
              src={getPetImage(result)}
              alt={result}
              className="absolute w-full h-full object-contain z-10"
              initial={{ y: 40, opacity: 0, scale: 0.7 }}
              animate={{ y: -60, opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={handleRoll}
        disabled={isRolling}
        className="bg-[#B7CEDE] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#A5BFCF] transition text-lg flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        {isRolling ? "Summoning..." : "2000 Points to Summon a Pet"}
      </button>

      {result && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold text-black">😮 You got: <span className="text-[#A5BFCF]">{result}</span>!</h2>
          <p className="text-sm text-gray-600 mt-5"><span className="text-[#A5BFCF] font-bold">{result}</span> now part of your collection!</p>
        </div>
      )}
    </motion.div>
  );
}
