'use client';

import { useState } from "react";
import Sidebar from "./custom/Sidebar";
import DashboardHeader from "./custom/DashboardHeader";
import CourseList from "./custom/CourseList";
import PhysicsPage from "./custom/PhysicsPage";
import PrecalcPage from "./custom/PreCalcPage";
import EnglishPage from "./custom/EnglishPage";
import BiologyPage from "./custom/BiologyPage";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  console.log("Selected course:", selectedCourse); // ✅ This goes inside the component

  return (
    <div className="flex h-screen bg-[#e2ecf4]">
      <Sidebar />
<div className="flex-1 pt-0 px-6 pb-6 overflow-y-auto">
        <DashboardHeader />

        {selectedCourse === null && (
          <CourseList onSelectCourse={setSelectedCourse} />
        )}

        {selectedCourse === "AP Physics A" && (
          <PhysicsPage onBack={() => setSelectedCourse(null)} />
          
        )}
        {selectedCourse === "English 3-4" && (
          <EnglishPage onBack={() => setSelectedCourse(null)} />
        )}

        {selectedCourse === "Pre-Calculus" && (
          <PrecalcPage onBack={() => setSelectedCourse(null)} />
        )}

        {selectedCourse === "AP Biology" && (
          <BiologyPage onBack={() => setSelectedCourse(null)} />
        )}
      </div>
    </div>
  );
}
