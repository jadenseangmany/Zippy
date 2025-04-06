'use client';

import { useState } from "react";
import Sidebar from "./custom/Sidebar";
import DashboardHeader from "./custom/DashboardHeader";
import CourseList from "./custom/CourseList";
import PhysicsPage from "./custom/PhysicsPage";
import PrecalcPage from "./custom/PreCalcPage";
import EnglishPage from "./custom/EnglishPage";
import BiologyPage from "./custom/BiologyPage";
import ShopPage from "./custom/ShopPage";
import GachaPage from "./custom/GachaPage";


export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showShop, setShowShop] = useState(false);
  const [showGacha, setShowGacha] = useState(false);

  
  const handleGoHome = () => {
    setSelectedCourse(null);
    setShowShop(false);
    setShowGacha(false);
  };

  return (
    <div className="flex h-screen bg-[#e2ecf4]">
<Sidebar
  onSelectHome={handleGoHome}
  onOpenShop={() => {
    setShowShop(true);
    setShowGacha(false);
    setSelectedCourse(null);
  }}
  onOpenGacha={() => {
    setShowGacha(true);
    setShowShop(false);
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

      {showShop && <ShopPage onClose={handleGoHome} onOpenGacha={() => {
        setShowGacha(true);
        setShowShop(false);
        setSelectedCourse(null);
      }} />}
    {showGacha && <GachaPage onBack={handleGoHome} />}


      </div>
    </div>
  );
}
