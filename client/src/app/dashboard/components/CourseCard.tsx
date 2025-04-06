// client/src/app/dashboard/components/CourseCard.tsx
"use client";

import React from "react";

export interface Course {
  _id: string;
  title: string;
  points?: number;
  rank?: number;
  imageUrl?: string;
}

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      {course.imageUrl ? (
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-32 object-cover rounded mb-2"
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <h3 className="font-semibold text-lg">{course.title}</h3>
      {course.points !== undefined && (
        <p className="text-sm text-gray-500">Points: {course.points}</p>
      )}
      {course.rank !== undefined && (
        <p className="text-sm text-gray-500">Rank: {course.rank}</p>
      )}
    </div>
  );
};

export default CourseCard;
