// components/DashboardHeader.tsx
export default function DashboardHeader() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6 flex justify-between items-start">
      {/* Left: Name + Table */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Hi, Jaden!</h1>
        <table className="table-auto text-left text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="pr-6">Class</th>
              <th className="pr-6">Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AP Physics A", 94, 5],
              ["AP Biology", 42, 12],
              ["English 3-4", 12, 19],
              ["Pre-Calculus", 68, 2],
            ].map(([cls, pts, rank]) => (
              <tr key={cls}>
                <td className="pr-6 py-1">{cls}</td>
                <td className="pr-6">{pts}</td>
                <td>{rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Middle: Pet */}
      <div className="flex flex-col items-center">
        <img src="/pet-bunny.png" alt="Pet" className="w-20 mb-2" />
        <button className="bg-blue-200 px-4 py-1 rounded-lg text-sm font-medium">
          Visit Pet
        </button>
      </div>

      {/* Right: Assignments */}
      <div className="bg-blue-100 p-4 rounded-xl text-sm w-48">
        <h3 className="font-bold mb-2">Upcoming Assignments</h3>
        <ul className="space-y-1">
          <li>
            AP Physics HW #1{" "}
            <span className="float-right text-xs text-gray-600">
              Due 11:59 PM
            </span>
          </li>
          <li>
            AP Biology HW 4{" "}
            <span className="float-right text-xs text-gray-600">Due Apr 8</span>
          </li>
          <li>
            English 3-4 Reading{" "}
            <span className="float-right text-xs text-gray-600">Due Apr 8</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
