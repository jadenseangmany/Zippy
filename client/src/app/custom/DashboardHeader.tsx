"use client";

import { useState } from "react";

interface ClassInfo {
  className: string;
  points: number;
  rank: number;
}

interface DashboardHeaderProps {
  userName?: string;
  classes: ClassInfo[];
}

export default function DashboardHeader({
  userName,
  classes,
}: DashboardHeaderProps) {
  const pets = [
    { name: "Mochi", base: "/petBunny.png", accessories: ["/scarf.png"] },
    { name: "Lil Pupper", base: "/petPuppy.png", accessories: ["/scarf.png"] },
    { name: "Soonie", base: "/petCat.png", accessories: ["/scarf.png"] },
  ];

  const totalPoints = classes.reduce((sum, cls) => sum + cls.points, 0);

  const [isPetHouseOpen, setPetHouseOpen] = useState(false);
  const [isCarouselOpen, setCarouselOpen] = useState(false);
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const selectedPet = pets[selectedPetIndex];
  const previewPet = pets[carouselIndex];

  const nextPet = () => setCarouselIndex((prev) => (prev + 1) % pets.length);
  const prevPet = () =>
    setCarouselIndex((prev) => (prev - 1 + pets.length) % pets.length);

  const handleChangePet = () => {
    setSelectedPetIndex(carouselIndex);
    setCarouselOpen(false);
  };

  return (
    <>
      <div className="px-4 lg:px-16 pt-0 mt-0">
        <div className="bg-white pt-20 px-6 pb-6 rounded-2xl shadow-md mb-6 -mt-4 flex justify-between items-stretch gap-4">
          {/* Left: Name + Table + Total */}
          <div className="bg-blue-50 p-6 rounded-xl flex-1 max-w-md">
            <h1 className="text-black text-3xl font-bold mb-4">
              Hi, {userName || "Student"}!
            </h1>
            <div className="bg-white rounded-lg p-3 shadow flex">
              <div className="w-3/4">
                <table className="table-auto text-left text-sm w-full">
                  <thead>
                    <tr className="text-black">
                      <th className="pb-1">Class</th>
                      <th className="pb-1">Points</th>
                      <th className="pb-1">Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map(({ className, points, rank }) => (
                      <tr
                        key={className}
                        className="border-t text-black text-sm"
                      >
                        <td className="py-1">{className}</td>
                        <td>{points}</td>
                        <td>{rank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-1/4 flex items-center justify-end pl-2">
                <div className="text-right text-black text-sm font-semibold">
                  <p>Total</p>
                  <p className="text-xl font-bold">{totalPoints}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Pet (unchanged) */}
          <div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 mb-4">
              <img
                src={selectedPet.base}
                alt={selectedPet.name}
                className="absolute w-full h-full"
              />
              {selectedPet.accessories.map((acc, i) => (
                <img
                  key={i}
                  src={acc}
                  alt="Accessory"
                  className="absolute w-full h-full pointer-events-none"
                />
              ))}
            </div>
            <button
              onClick={() => {
                setCarouselIndex(selectedPetIndex);
                setPetHouseOpen(true);
              }}
              className="bg-blue-200 hover:bg-blue-300 transition px-6 py-2 rounded-lg text-sm font-semibold text-black"
            >
              Visit {selectedPet.name}
            </button>
          </div>

          {/* Right: Assignments (keep as-is or dynamic later) */}
          <div className="bg-blue-50 p-6 rounded-xl w-64">
            <h3 className="text-black font-bold text-lg mb-4">
              Upcoming Assignments
            </h3>
            <ul className="text-black space-y-3">
              {[
                ["AP Physics HW #1", "Due 11:59 PM"],
                ["AP Biology HW 4", "Due Apr 8"],
                ["English 3-4 Reading", "Due Apr 8"],
              ].map(([title, due]) => (
                <li
                  key={title}
                  className="bg-white rounded-lg px-3 py-2 shadow text-sm flex justify-between items-center"
                >
                  <span>{title}</span>
                  <span className="text-gray-500 text-xs">{due}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pet Modals (no changes) */}
      {isPetHouseOpen && /*...existing modal code...*/ null}
      {isCarouselOpen && /*...existing modal code...*/ null}
    </>
  );
}
