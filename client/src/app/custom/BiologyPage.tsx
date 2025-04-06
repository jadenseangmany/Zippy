'use client';

import { motion } from 'framer-motion';

interface BiologyPageProps {
  onBack: () => void;
}

export default function BiologyPage({ onBack }: BiologyPageProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-xl shadow-md p-6 mt-6 mx-4 lg:mx-16"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-blue-500 hover:underline mb-4"
      >
        ← Back to Course List
      </button>

      {/* Header */}
      <h2 className="text-2xl font-bold text-black mb-4">AP Biology</h2>

      {/* Progress Bar */}
      <div className="mb-6">
        <p className="text-sm text-black mb-1">Assignments Progress - 0%</p>
        <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-green-500" />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assignments Section */}
        <div>
          <h3 className="font-semibold text-black mb-2">Assignments</h3>
          {["HW 1: Cell Structures", "HW 2: Photosynthesis", "HW 3: DNA Replication"].map((hw, i) => (
            <div
              key={hw}
              className="flex justify-between items-center bg-green-50 rounded-lg px-4 py-2 mb-2"
            >
              <div>
                <p className="font-medium text-black">{hw}</p>
                <p className="text-xs text-gray-600">
                  Due {["Apr 8", "Apr 12", "Apr 18"][i]} · 0% Complete
                </p>
              </div>
              <button className="bg-white border border-green-300 text-green-500 text-sm px-3 py-1 rounded-md">
                Start
              </button>
            </div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <div>
          <h3 className="font-semibold text-black mb-2">Leaderboard</h3>
          <div className="text-black space-y-2">
            {[
              { name: "You", score: 42, rank: 12 },
              { name: "Sophia W.", score: 88, rank: 1 },
              { name: "James L.", score: 74, rank: 2 },
              { name: "Jaden P.", score: 63, rank: 3 },
            ].map((entry) => (
              <div
                key={entry.name}
                className={`flex justify-between items-center px-4 py-2 rounded-lg ${
                  entry.name === "You"
                    ? "border-2 border-green-300 bg-green-50"
                    : "bg-green-100"
                }`}
              >
                <span>{entry.name}</span>
                <span>{entry.score}</span>
                <span>#{entry.rank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Support */}
      <div className="mt-6">
        <h3 className="font-semibold text-black mb-1">Course Support</h3>
        <p className="text-sm text-black">Instructor: Dr. Emily Carter</p>
        <div className="mt-2 flex gap-3">
          <button className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-md">
            Email
          </button>
          <button className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-md">
            Zippy Help
          </button>
        </div>
      </div>
    </motion.div>
  );
}
