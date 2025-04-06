// client/src/app/dashboard/components/AssignmentCard.tsx
"use client";

import React from "react";

export interface Assignment {
  _id: string;
  title: string;
  deadline: string; // ISO date string
}

interface AssignmentCardProps {
  assignment: Assignment;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  return (
    <div className="bg-gray-50 p-4 rounded shadow mb-2">
      <h3 className="font-semibold text-lg">{assignment.title}</h3>
      <p className="text-sm text-gray-500">
        Due: {new Date(assignment.deadline).toLocaleDateString()}
      </p>
      <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-600">
        Start Assignment
      </button>
    </div>
  );
};

export default AssignmentCard;
