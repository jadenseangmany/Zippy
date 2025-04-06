"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "./components/CourseCard";
import CoursePopup from "./components/CoursePopup";
import AssignmentCard from "./components/AssignmentCard";
import Leaderboard from "./components/Leaderboard";

// Define TypeScript interfaces for your data
interface Course {
  _id: string;
  title: string;
  points?: number;
  rank?: number;
  imageUrl?: string;
  // Add any additional fields you need
}

interface Assignment {
  _id: string;
  title: string;
  deadline: string; // ISO string
  // Add any additional fields you need
}

export default function DashboardPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // Fetch all courses when the component mounts
  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    fetchCourses();
  }, []);

  // When a course is selected, fetch its assignments **BACKEND PORTION**
  useEffect(() => {
    if (selectedCourse) {
      async function fetchAssignments() {
        try {
          const res = await fetch(
            `http://localhost:5000/api/assignments/course/${selectedCourse._id}`
          );
          const data = await res.json();
          setAssignments(data);
        } catch (error) {
          console.error("Error fetching assignments:", error);
        }
      }
      fetchAssignments();
    } else {
      // Clear assignments if no course is selected
      setAssignments([]);
    }
  }, [selectedCourse]);

  return (
    <div className="p-4">
      {/* Top Panel: Greeting & Upcoming Assignments */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Greeting Card */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-bold">Hi, Jaden!</h1>
          <div className="mt-2">
            <p>Class: AP Physics A</p>
            <p>Points: 94</p>
            <p>Rank: 5</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Visit Pet
          </button>
        </div>
        {/* Upcoming Assignments */}
        <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Upcoming Assignments</h2>
          <ul className="mt-2 space-y-1">
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <li key={assignment._id}>
                  {assignment.title} - Due{" "}
                  {new Date(assignment.deadline).toLocaleDateString()}
                </li>
              ))
            ) : (
              <li>No assignments available.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Course List */}
      <h2 className="text-xl font-semibold mb-4">Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {/* Course Popup */}
      {selectedCourse && (
        <CoursePopup
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        >
          <div>
            <h3 className="text-lg font-bold mb-2">
              Assignments for {selectedCourse.title}
            </h3>
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <AssignmentCard key={assignment._id} assignment={assignment} />
              ))
            ) : (
              <p>No assignments available for this course.</p>
            )}
          </div>
        </CoursePopup>
      )}

      {/* Leaderboard Section */}
      <div className="mt-8">
        <Leaderboard />
      </div>
    </div>
  );
}
