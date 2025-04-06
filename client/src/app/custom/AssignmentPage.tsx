'use client';

interface AssignmentPageProps {
  onClose: () => void;
}

export default function AssignmentPage({ onClose }: AssignmentPageProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 mx-4 lg:mx-16">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-black">Course: AP Physics A</h2>
          <h3 className="text-lg font-semibold text-black">AP Physics HW #1</h3>
        </div>
        <button onClick={onClose} className="text-2xl text-gray-500 hover:text-black">
          ×
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Info */}
        <div className="bg-blue-100 rounded-lg p-4 text-black">
          <p><strong>Due:</strong> 11:59 PM Today</p>
          <p><strong>Questions:</strong> 5</p>
          <p><strong>Estimated Time:</strong> 4 Hours</p>
          <p><strong>Released:</strong> April 3</p>
          <p><strong>Free Hints:</strong> 2</p>
          <button className="bg-red-300 text-white px-6 py-2 mt-4 rounded-md font-semibold">
            Start
          </button>
        </div>

        {/* Leaderboard */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">AP Physics HW #1 Leaderboard</h3>
          <div className="space-y-2">
            {[
              { name: 'You', score: 0, rank: 15 },
              { name: 'Lina G.', score: 50, rank: 1 },
              { name: 'Jane D.', score: 49, rank: 2 },
              { name: 'Khang N.', score: 45, rank: 3 },
            ].map(entry => (
              <div
                key={entry.name}
                className={`flex justify-between items-center px-4 py-2 rounded-lg ${
                  entry.name === 'You'
                    ? 'border-2 border-red-300 bg-red-50'
                    : 'bg-red-200'
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
    </div>
  );
}
