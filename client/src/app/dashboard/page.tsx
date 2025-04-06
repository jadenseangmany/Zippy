"use client";

import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Sidebar from "../custom/Sidebar";
import DashboardHeader from "../custom/DashboardHeader";
import CourseList from "../custom/CourseList";
import PhysicsPage from "../custom/PhysicsPage";
import PrecalcPage from "../custom/PreCalcPage";
import EnglishPage from "../custom/EnglishPage";
import BiologyPage from "../custom/BiologyPage";
import ShopPage from "../custom/ShopPage";

interface User {
  auth0Id: string;
  name: string;
  email: string;
  points: number;
  rank: number | null;
}

interface LeaderboardEntry {
  name: string;
  points: number;
  rank: number;
}

export default function Dashboard() {
  const { user, isLoading } = useUser();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showShop, setShowShop] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const handleGoHome = () => {
    setSelectedCourse(null);
    setShowShop(false);
  };

  // Automatically create/update user in MongoDB on login
  useEffect(() => {
    async function loginUser() {
      if (user) {
        const response = await fetch("http://localhost:3001/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            auth0Id: user.sub,
            name: user.name,
            email: user.email,
          }),
        });

        const userData = await response.json();
        setCurrentUser(userData);
      }
    }

    if (!isLoading && user) {
      loginUser();
    }
  }, [user, isLoading]);

  // Fetch leaderboard from backend
  useEffect(() => {
    async function fetchLeaderboard() {
      const res = await fetch("http://localhost:3001/api/users/leaderboard");
      const data = await res.json();
      setLeaderboard(data);
    }

    fetchLeaderboard();
  }, []);

  if (isLoading) return <div>Loading...</div>;

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
        {!showShop && (
          <DashboardHeader
            userName={currentUser?.name}
            points={currentUser?.points}
            rank={currentUser?.rank}
          />
        )}

        {!showShop && selectedCourse === null && (
          <CourseList
            onSelectCourse={setSelectedCourse}
            leaderboard={leaderboard}
          />
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
