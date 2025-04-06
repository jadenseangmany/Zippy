import Sidebar from "./custom/Sidebar";
import DashboardHeader from "./custom/DashboardHeader";
import CourseList from "./custom/CourseList";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#e2ecf4]">
      <Sidebar />
<div className="flex-1 pt-0 px-6 pb-6 overflow-y-auto">
        <DashboardHeader />
        <CourseList />
      </div>
    </div>
  );
}
