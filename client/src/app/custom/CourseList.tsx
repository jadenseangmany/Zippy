// components/CourseList.tsx
const courses = [
  { name: "AP Physics A", image: "/courses/physics.jpg" },
  { name: "AP Biology", image: "/courses/biology.jpg" },
  { name: "English 3-4", image: "/courses/english.jpg" },
  { name: "Pre-Calculus", image: "/courses/math.jpg" },
];

export default function CourseList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course List</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div
            key={course.name}
            className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer hover:scale-105 transition"
          >
            <img
              src={course.image}
              alt={course.name}
              className="h-24 w-full object-cover"
            />
            <div className="p-2 font-medium">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
