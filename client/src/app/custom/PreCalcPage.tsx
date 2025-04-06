'use client';

import { motion } from 'framer-motion';

interface PrecalcPageProps {
  onBack: () => void;
}

export default function PrecalcPage({ onBack }: PrecalcPageProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-xl shadow-md p-6 mt-6 mx-4 lg:mx-16"
    >
      <button onClick={onBack} className="text-blue-500 hover:underline mb-4">
        ← Back to Course List
      </button>

      <h2 className="text-2xl font-bold text-black mb-4">Pre-Calculus</h2>

      <div className="mb-6">
        <p className="text-sm text-black mb-1">Assignments Progress - 40%</p>
        <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
          <div className="h-full w-[40%] bg-green-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-black mb-2">Assignments</h3>
          {["Trig Review", "Limits Practice", "Quiz Prep"].map((hw, i) => (
            <div
              key={hw}
              className="flex justify-between items-center bg-green-50 rounded-lg px-4 py-2 mb-2"
            >
              <div>
                <p className="font-medium text-black">{hw}</p>
                <p className="text-xs text-gray-600">
                  Due {['Apr 6', 'Apr 13', 'Apr 18'][i]} · {['30%', '50%', '40%'][i]} Complete
                </p>
              </div>
              <button className="bg-white border border-green-300 text-green-500 text-sm px-3 py-1 rounded-md">
                Start
              </button>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Leaderboard</h3>
          <div className="text-black space-y-2">
            {[{ name: "You", score: 63, rank: 8 }, { name: "Daniel S.", score: 130, rank: 1 }, { name: "Maya B.", score: 120, rank: 2 }].map(entry => (
              <div
                key={entry.name}
                className={`flex justify-between items-center px-4 py-2 rounded-lg ${entry.name === "You" ? "border-2 border-green-300 bg-green-50" : "bg-green-100"}`}
              >
                <span>{entry.name}</span>
                <span>{entry.score}</span>
                <span>#{entry.rank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-black mb-1">Course Support</h3>
        <p className="text-sm text-black">Instructor: Mr. Rivera</p>
        <div className="mt-2 flex gap-3">
          <button className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-md">
            Email
          </button>
          <button className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-md">
            Tutoring
          </button>
        </div>
      </div>
    </motion.div>
  );
}
