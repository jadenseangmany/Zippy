'use client';
import { Gem } from "lucide-react";
import { useState } from 'react';

export default function DashboardHeader() {
  const pets = [
    { name: 'Mochi', base: '/petBunny.png', accessories: ['/scarf.png'] },
    { name: 'Lil Pupper', base: '/petPuppy.png', accessories: ['/scarf.png'] },
    { name: 'Soonie', base: '/petCat.png', accessories: ['/scarf.png'] },
  ];

  const classes: [string, number, number][] = [
    ['AP Physics A', 94, 5],
    ['AP Biology', 42, 12],
    ['English 3-4', 12, 19],
    ['Pre-Calculus', 68, 2],
  ];

  const totalPoints = classes.reduce((sum, [_cls, pts]) => sum + pts, 0);

  const [isPetHouseOpen, setPetHouseOpen] = useState(false);
  const [isCarouselOpen, setCarouselOpen] = useState(false);
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const selectedPet = pets[selectedPetIndex];
  const previewPet = pets[carouselIndex];

  const nextPet = () => setCarouselIndex((prev) => (prev + 1) % pets.length);
  const prevPet = () => setCarouselIndex((prev) => (prev - 1 + pets.length) % pets.length);

  const handleChangePet = () => {
    setSelectedPetIndex(carouselIndex);
    setCarouselOpen(false);
  };

  return (
    <>
<div className="px-4 lg:px-16 pt-0 mt-0 relative">
<div className="absolute top-9 left-1/2 transform -translate-x-1/2 z-10">
    <img src="/ZippyIconText.png" alt="Zippy Medal" className="w-40 h-12 " />
  </div>
  <div className="bg-white pt-32 px-6 pb-6 rounded-2xl shadow-md mb-6 -mt-4 flex items-stretch gap-6">
          
          {/* Left: Name + Table + Total */}
          <div className="bg-blue-50 p-6 rounded-xl flex-1 max-w-md">
            <h1 className="text-black text-3xl font-bold mb-4">Hi, Jaden!</h1>
            <div className="bg-white rounded-lg p-3 shadow flex">
              <div className="w-3/4">
                <table className="table-auto text-left text-sm w-full">
                  <thead>
                    <tr className="text-black">
                      <th className="pb-1">Class</th>
                      <th className="pb-1">Gems</th>
                      <th className="pb-1">Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map(([cls, pts, rank]) => (
                      <tr key={cls} className="border-t text-black text-sm">
                        <td className="py-1">{cls}</td>
                        <td>{pts}</td>
                        <td>{rank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="w-1/4 flex items-center justify-end pl-2">
                <div className="text-right text-black text-sm font-semibold">
                <div className="flex items-center justify-end gap-1">
                <p className="text-sm font-semibold text-black">Total</p>
                <Gem className="w-4 h-4 text-[#B7CEDE]" />
              </div>
              <p className="text-xl font-bold text-black -ml-7">{totalPoints}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Pet */}
          <div className="bg-blue-50 p-6 rounded-xl w-60 flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 mb-4">
              <img
                src={selectedPet.base}
                alt={selectedPet.name}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
              {selectedPet.accessories.map((acc, i) => (
                <img
                  key={i}
                  src={acc}
                  alt="Accessory"
                  className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
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

          {/* Right: Assignments */}
<div className="bg-blue-50 p-6 rounded-xl flex-1 min-w-[280px]">
            <h3 className="text-black font-bold text-lg mb-4">Upcoming Assignments</h3>
            <ul className="text-black space-y-3">
              {[
                ['AP Physics HW #1', 'Due 11:59 PM'],
                ['AP Biology HW 4', 'Due Apr 8'],
                ['English 3-4 Reading', 'Due Apr 8'],
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

      {/* Pet House Modal */}
      {isPetHouseOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-2xl shadow-xl relative">
            <button
              onClick={() => setPetHouseOpen(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>
            <div className="bg-[#eee6e9] rounded-xl p-8 flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-black mb-4">{selectedPet.name}</h2>
              <div className="relative w-40 h-40 mb-6">
                <img
                  src={selectedPet.base}
                  alt={selectedPet.name}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
                {selectedPet.accessories.map((acc, i) => (
                  <img
                    key={i}
                    src={acc}
                    alt="Accessory"
                    className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
                  />
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => {
                    setCarouselIndex(selectedPetIndex);
                    setPetHouseOpen(false);
                    setCarouselOpen(true);
                  }}
                  className="bg-red-300 hover:bg-red-400 transition text-white px-6 py-2 rounded-md text-sm font-semibold"
                >
                  Change Pet
                </button>
                <button className="bg-red-300 hover:bg-red-400 transition text-white px-6 py-2 rounded-md text-sm font-semibold">
                  Shop/Equip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pet Carousel Modal */}
      {isCarouselOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-3xl shadow-xl relative">
            <button
              onClick={() => setCarouselOpen(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>
            <div className="bg-[#eee6e9] rounded-xl p-8 flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-black mb-4">Choose Your Pet</h2>
              <div className="flex items-center justify-center gap-4">
                <button onClick={prevPet} className="text-3xl text-red-400 hover:text-red-600">
                  ◀
                </button>
                <div className="relative w-40 h-40">
                  <img
                    src={previewPet.base}
                    alt={previewPet.name}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                  {previewPet.accessories.map((acc, i) => (
                    <img
                      key={i}
                      src={acc}
                      alt="Accessory"
                      className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
                    />
                  ))}
                </div>
                <button onClick={nextPet} className="text-3xl text-red-400 hover:text-red-600">
                  ▶
                </button>
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleChangePet}
                  className="bg-red-300 hover:bg-red-500 transition text-white px-6 py-2 rounded-md text-sm font-semibold"
                >
                  Confirm Change
                </button>
                <button className="bg-red-300 text-white px-6 py-2 rounded-md text-sm font-semibold">
                  Shop/Equip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
