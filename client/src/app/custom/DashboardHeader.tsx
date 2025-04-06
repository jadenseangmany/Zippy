'use client';
import { useState } from 'react';

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false); // Modal state

  return (
    <>
    <div className="px-4 lg:px-16 pt-0 mt-0"> {/* 👈 Added padding container */}
    <div className="bg-white pt-20 px-6 pb-6 rounded-2xl shadow-md mb-6 -mt-4 flex justify-between items-stretch gap-4">
    {/* Left: Name + Table */}
        <div className="bg-blue-50 p-6 rounded-xl flex-1">
          <h1 className="text-black text-3xl font-bold mb-4">Hi, Jaden!</h1>
          <div className="bg-white rounded-lg p-4 shadow mt-0">
            <table className="table-auto text-left text-sm w-full">
              <thead>
                <tr className="text-black">
                  <th className="pb-2">Class</th>
                  <th className="pb-2">Points</th>
                  <th className="pb-2">Rank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AP Physics A", 94, 5],
                  ["AP Biology", 42, 12],
                  ["English 3-4", 12, 19],
                  ["Pre-Calculus", 68, 2],
                ].map(([cls, pts, rank]) => (
                  <tr key={cls} className="border-t text-black">
                    <td className="py-2">{cls}</td>
                    <td>{pts}</td>
                    <td>{rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Middle: Pet */}
        <div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 mb-4">
            {/* Bunny base */}
            <img
              src="/petBunny.png"
              alt="Mochi"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
            {/* Scarf overlay */}
            <img
              src="/scarf.png"
              alt="Scarf"
            
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
            {/* Sparkle overlay */}
            <img
              src="/sparkle.png"
              alt="Sparkles"
              className="absolute top-[10%] left-[5%] w-full h-full object-contain pointer-events-none"
            />
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-200 hover:bg-blue-300 transition px-6 py-2 rounded-lg text-sm font-semibold text-black"
          >
            Visit Mochi
          </button>
        </div>

        {/* Right: Assignments */}
        <div className="bg-blue-50 p-6 rounded-xl w-64">
          <h3 className="text-black font-bold text-lg mb-4">Upcoming Assignments</h3>
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

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-3xl shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="bg-[#eee6e9] rounded-xl p-8 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 mb-4">
                <img
                  src="/petBunny.png"
                  alt="Mochi"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
                <img
                  src="/scarf.png"
                  alt="Scarf"
                 
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
                <img
                  src="/sparkle.png"
                  alt="Sparkles"
                  className="absolute top-[10%] left-[5%] w-full h-full object-contain pointer-events-none"
                />
              </div>
              <button className="bg-red-300 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Shop/Equip
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
