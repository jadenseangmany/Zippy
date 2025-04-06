// client/src/app/dashboard/components/CoursePopup.tsx
"use client";

import React from "react";
import { Course } from "./CourseCard";

interface CoursePopupProps {
  course: Course;
  onClose: () => void;
  children?: React.ReactNode;
}

const CoursePopup: React.FC<CoursePopupProps> = ({
  course,
  onClose,
  children,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">{course.title}</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            Points: {course.points !== undefined ? course.points : "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            Rank: {course.rank !== undefined ? course.rank : "N/A"}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CoursePopup;
