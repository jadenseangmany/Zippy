"use client";

import Sidebar from "../../../custom/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HW1Page() {
  const router = useRouter();
  return (
    <div className="flex h-screen bg-[#e2ecf4]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-white rounded-xl shadow-md p-6 h-full relative">
          {/* Close Button */}
          <button
            onClick={() => router.push("../../")}
            className="absolute top-4 right-6 text-2xl text-black hover:text-black"
          >
            ×
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-black">
              Course: AP Physics A
            </h2>
            <h3 className="text-lg font-semibold text-black">
              AP Physics HW #1
            </h3>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Assignment Info */}
            <div className="bg-[#d4e3ed] rounded-lg p-6 text-black space-y-2">
              <p>
                <strong>Due:</strong> 11:59 PM Today
              </p>
              <p>
                <strong>Questions:</strong> 5
              </p>
              <p>
                <strong>Estimated Time to Complete:</strong> 4 Hours
              </p>
              <p>
                <strong>Released on:</strong> April 3
              </p>
              <p>
                <strong>Free Hints:</strong> 2
              </p>

              <Link href="/assignments/physics/hw1/problem1">
                <button className="mt-6 bg-[#d87B74] text-white px-6 py-2 rounded-md text-sm font-semibold">
                  Start
                </button>
              </Link>
            </div>

            {/* Right: Leaderboard */}
            <div>
              <h3 className="text-lg font-bold text-black mb-3">
                AP Physics HW #1 Leaderboard
              </h3>

              {/* Table Headers */}
              <div className="text-sm font-semibold text-black grid grid-cols-3 px-4 mb-1">
                <span>Name</span>
                <span>Points</span>
                <span>Rank</span>
              </div>

              {/* Your Entry */}
              <div className="bg-red-50 border-2 border-red-300 rounded-lg px-4 py-2 mb-2 grid grid-cols-3 items-center text-black text-sm">
                <span>You</span>
                <span>0</span>
                <span>#15</span>
              </div>

              {/* Leaderboard Entries */}
              {[
                { name: "Lina G.", score: 50, rank: 1 },
                { name: "Jane D.", score: 49, rank: 2 },
                { name: "Khang N.", score: 45, rank: 3 },
              ].map((entry) => (
                <div
                  key={`${entry.name}-${entry.rank}`}
                  className="bg-red-300 rounded-lg px-4 py-2 mb-2 grid grid-cols-3 items-center text-sm text-black"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/30" />
                    {entry.name}
                  </span>
                  <span>{entry.score}</span>
                  <span>#{entry.rank}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
