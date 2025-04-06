"use client";

import { useState } from "react";
import Sidebar from "../custom/Sidebar";
import DashboardHeader from "../custom/DashboardHeader";
import CourseList from "../custom/CourseList";
import PhysicsPage from "../custom/PhysicsPage";
import PrecalcPage from "../custom/PreCalcPage";
import EnglishPage from "../custom/EnglishPage";
import BiologyPage from "../custom/BiologyPage";
import ShopPage from "../custom/ShopPage";

export default function Dashboard() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showShop, setShowShop] = useState(false);

  const handleGoHome = () => {
    setSelectedCourse(null);
    setShowShop(false);
  };

  return (
    <div className="flex h-screen bg-[#e2ecf4]">
      <Sidebar
        onSelectHome={handleGoHome}
        onOpenShop={() => {
          setShowShop(true);
          setSelectedCourse(null);
        }}
      />

      <div className="flex-1 pt-0 px-6 pb-6 overflow-y-auto">
        {!showShop && <DashboardHeader />}

        {!showShop && selectedCourse === null && (
          <CourseList onSelectCourse={setSelectedCourse} />
        )}

        {selectedCourse === "AP Physics A" && (
          <PhysicsPage onBack={handleGoHome} />
        )}
        {selectedCourse === "English 3-4" && (
          <EnglishPage onBack={handleGoHome} />
        )}
        {selectedCourse === "Pre-Calculus" && (
          <PrecalcPage onBack={handleGoHome} />
        )}
        {selectedCourse === "AP Biology" && (
          <BiologyPage onBack={handleGoHome} />
        )}

        {showShop && <ShopPage onClose={handleGoHome} />}
      </div>
    </div>
  );
}
