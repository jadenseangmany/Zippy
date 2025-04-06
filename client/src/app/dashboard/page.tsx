import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookOpen, Home, Medal } from "lucide-react";
import React from "react";

// Mock data for courses and assignments
const courses = [
  { id: 1, name: "AP Physics A", points: 94, rank: 5, image: "/image.png" },
  { id: 2, name: "AP Biology", points: 42, rank: 12, image: "/image-2.png" },
  { id: 3, name: "English 3-4", points: 12, rank: 19, image: "/image-3.png" },
  { id: 4, name: "Pre-Calculus", points: 68, rank: 2, image: "/image-4.png" },
];

const assignments = [
  { id: 1, name: "AP Physics HW #1", dueDate: "Due 11:59 PM" },
  { id: 2, name: "AP Biology HW 4", dueDate: "Due Apr 8" },
  { id: 3, name: "English 3-4 Reading", dueDate: "Due Apr 8" },
];

export default function Courses() {
  return (
    <div className="bg-[#d0e1e8] flex flex-row justify-center w-full min-h-screen">
      <div className="relative w-full max-w-[1512px]">
        {/* Sidebar Navigation */}
        <div className="fixed w-[97px] h-full top-0 left-0 bg-[#fafcfb] flex flex-col items-center py-4 gap-8">
          <div className="w-[70px] h-[65px] flex items-center justify-center">
            <Home size={32} />
          </div>
          <div className="w-[70px] h-[65px] flex items-center justify-center">
            <BookOpen size={32} />
          </div>
          <div className="w-[70px] h-[65px] flex items-center justify-center">
            <Medal size={32} />
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-[97px] p-8">
          {/* Top Section with User Info and Assignments */}
          <div className="w-full bg-[url(/rectangle-217.svg)] bg-[100%_100%] pt-16 pb-8 px-4">
            <div className="flex flex-wrap gap-8">
              {/* User Info Card */}
              <Card className="w-full max-w-[660px] bg-[#d0e1e8] rounded-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-wrap justify-between p-6">
                    <div>
                      <h1 className="font-bold text-4xl font-title mb-6">
                        Hi, Jaden!
                      </h1>

                      {/* Course Table */}
                      <Card className="w-full max-w-[353px] bg-[#fafcfb] rounded-lg">
                        <CardContent className="p-4">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="font-semibold text-2xl text-black">
                                  Class
                                </TableHead>
                                <TableHead className="font-semibold text-2xl text-black">
                                  Points
                                </TableHead>
                                <TableHead className="font-semibold text-2xl text-black">
                                  Rank
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {courses.map((course) => (
                                <TableRow key={course.id}>
                                  <TableCell className="font-normal text-base text-black">
                                    {course.name}
                                  </TableCell>
                                  <TableCell className="font-normal text-base text-black">
                                    {course.points}
                                  </TableCell>
                                  <TableCell className="font-normal text-base text-black">
                                    {course.rank}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative">
                      <div className="w-[170px] h-[170px] rounded-full bg-[#d0e1e8] overflow-hidden">
                        <img
                          src="/untitled-artwork-15-1.png"
                          alt="Virtual Pet"
                          className="w-[262px] h-[262px] object-cover absolute top-[-46px] left-[-46px]"
                        />
                      </div>
                      <Button className="w-[182px] h-[53px] mt-4 bg-[#b7cede] text-[#fafcfb] font-semibold text-xl rounded-[6.77px] hover:bg-[#a6bdcd]">
                        Visit Pet
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Assignments Card */}
              <Card className="w-full max-w-[324px] bg-[#d0e1e8] rounded-lg">
                <CardContent className="p-6">
                  <h2 className="font-bold text-base mb-4">
                    Upcoming Assignments
                  </h2>
                  <div className="flex flex-col gap-3">
                    {assignments.map((assignment) => (
                      <div
                        key={assignment.id}
                        className="w-full h-10 bg-[#fafcfb] rounded-lg flex items-center justify-between px-3"
                      >
                        <span className="font-normal text-base text-black">
                          {assignment.name}
                        </span>
                        <span className="font-normal text-base text-black whitespace-nowrap">
                          {assignment.dueDate}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course List Section */}
          <div className="mt-16">
            <h2 className="font-bold text-4xl font-title mb-8">Course List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="w-full max-w-[333px] bg-[#fafcfb] rounded-2xl overflow-hidden shadow-[0px_4px_4px_#00000040]"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardFooter className="p-5">
                    <h3 className="font-semibold text-2xl font-title">
                      {course.name}
                    </h3>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

















// "use client";

// import React, { useEffect, useState } from "react";
// import CourseCard from "./components/CourseCard";
// import CoursePopup from "./components/CoursePopup";
// import AssignmentCard from "./components/AssignmentCard";
// import Leaderboard from "./components/Leaderboard";

// // Define TypeScript interfaces for your data
// interface Course {
//   _id: string;
//   title: string;
//   points?: number;
//   rank?: number;
//   imageUrl?: string;
//   // Add any additional fields you need
// }

// interface Assignment {
//   _id: string;
//   title: string;
//   deadline: string; // ISO string
//   // Add any additional fields you need
// }

// export default function DashboardPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//   const [assignments, setAssignments] = useState<Assignment[]>([]);

//   // Fetch all courses when the component mounts
//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         const res = await fetch("http://localhost:5000/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     }
//     fetchCourses();
//   }, []);

//   // When a course is selected, fetch its assignments **BACKEND PORTION**
//   useEffect(() => {
//     if (selectedCourse) {
//       async function fetchAssignments() {
//         try {
//           const res = await fetch(
//             `http://localhost:5000/api/assignments/course/${selectedCourse._id}`
//           );
//           const data = await res.json();
//           setAssignments(data);
//         } catch (error) {
//           console.error("Error fetching assignments:", error);
//         }
//       }
//       fetchAssignments();
//     } else {
//       // Clear assignments if no course is selected
//       setAssignments([]);
//     }
//   }, [selectedCourse]);

//   return (
//     <div className="p-4">
//       {/* Top Panel: Greeting & Upcoming Assignments */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         {/* Greeting Card */}
//         <div className="flex-1 bg-white p-4 rounded shadow">
//           <h1 className="text-2xl font-bold">Hi, Jaden!</h1>
//           <div className="mt-2">
//             <p>Class: AP Physics A</p>
//             <p>Points: 94</p>
//             <p>Rank: 5</p>
//           </div>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//             Visit Pet
//           </button>
//         </div>
//         {/* Upcoming Assignments */}
//         <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-bold">Upcoming Assignments</h2>
//           <ul className="mt-2 space-y-1">
//             {assignments.length > 0 ? (
//               assignments.map((assignment) => (
//                 <li key={assignment._id}>
//                   {assignment.title} - Due{" "}
//                   {new Date(assignment.deadline).toLocaleDateString()}
//                 </li>
//               ))
//             ) : (
//               <li>No assignments available.</li>
//             )}
//           </ul>
//         </div>
//       </div>

//       {/* Course List */}
//       <h2 className="text-xl font-semibold mb-4">Courses</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {courses.map((course) => (
//           <CourseCard
//             key={course._id}
//             course={course}
//             onClick={() => setSelectedCourse(course)}
//           />
//         ))}
//       </div>

//       {/* Course Popup */}
//       {selectedCourse && (
//         <CoursePopup
//           course={selectedCourse}
//           onClose={() => setSelectedCourse(null)}
//         >
//           <div>
//             <h3 className="text-lg font-bold mb-2">
//               Assignments for {selectedCourse.title}
//             </h3>
//             {assignments.length > 0 ? (
//               assignments.map((assignment) => (
//                 <AssignmentCard key={assignment._id} assignment={assignment} />
//               ))
//             ) : (
//               <p>No assignments available for this course.</p>
//             )}
//           </div>
//         </CoursePopup>
//       )}

//       {/* Leaderboard Section */}
//       <div className="mt-8">
//         <Leaderboard />
//       </div>
//     </div>
//   );
// }
