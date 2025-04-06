'use client';

import { motion } from 'framer-motion';

interface EnglishPageProps {
  onBack: () => void;
}

export default function EnglishPage({ onBack }: EnglishPageProps) {
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

      <h2 className="text-2xl font-bold text-black mb-4">English 3-4</h2>

      <div className="mb-6">
        <p className="text-sm text-black mb-1">Assignments Progress - 25%</p>
        <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
          <div className="h-full w-1/4 bg-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-black mb-2">Assignments</h3>
          {["Essay Draft", "Reading Quiz", "Peer Review"].map((hw, i) => (
            <div
              key={hw}
              className="flex justify-between items-center bg-blue-50 rounded-lg px-4 py-2 mb-2"
            >
              <div>
                <p className="font-medium text-black">{hw}</p>
                <p className="text-xs text-gray-600">
                  Due {['Apr 8', 'Apr 11', 'Apr 15'][i]} · {['10%', '50%', '15%'][i]} Complete
                </p>
              </div>
              <button className="bg-white border border-blue-300 text-blue-500 text-sm px-3 py-1 rounded-md">
                Start
              </button>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Leaderboard</h3>
          <div className="text-black space-y-2">
            {[{ name: "You", score: 12, rank: 19 }, { name: "Alice K.", score: 85, rank: 1 }, { name: "Evan D.", score: 74, rank: 2 }].map(entry => (
              <div
                key={entry.name}
                className={`flex justify-between items-center px-4 py-2 rounded-lg ${entry.name === "You" ? "border-2 border-blue-300 bg-blue-50" : "bg-blue-100"}`}
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
        <p className="text-sm text-black">Instructor: Ms. Chen</p>
        <div className="mt-2 flex gap-3">
          <button className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-md">
            Email
          </button>
          <button className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-md">
            Office Hours
          </button>
        </div>
      </div>
    </motion.div>
  );
}