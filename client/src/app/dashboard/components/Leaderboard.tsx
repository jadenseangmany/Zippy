// client/src/app/dashboard/components/Leaderboard.tsx
"use client";

import React, { useEffect, useState } from "react";

interface Student {
  _id: string;
  name: string;
  points: number;
  rank: number;
}

const Leaderboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  // Simulate fetching leaderboard data
  useEffect(() => {
    const dummyStudents: Student[] = [
      { _id: "1", name: "Alice", points: 120, rank: 1 },
      { _id: "2", name: "Bob", points: 110, rank: 2 },
      { _id: "3", name: "Charlie", points: 100, rank: 3 },
    ];
    setStudents(dummyStudents);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id} className="flex justify-between mb-2">
            <span className="font-medium">{student.name}</span>
            <span className="text-sm text-gray-500">
              Points: {student.points}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
