const courses = [
  { name: "AP Physics A", image: "assets/physicPhoto.png" },
  { name: "AP Biology", image: "/assets/biologyPhoto.png" },
  { name: "English 3-4", image: "/assets/englishPhoto.png" },
  { name: "Pre-Calculus", image: "/assets/calcPhoto.png" },
];

export default function CourseList() {
  return (
    <div className="px-4 lg:px-16">
      <h2 className="text-2xl font-bold mb-6 text-black">Course List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
        {courses.map((course) => (
          <div
            key={course.name}
            className="rounded-xl overflow-hidden shadow-md bg-white transition cursor-pointer hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-36 object-cover"
            />
            <div className="p-3 font-semibold text-black">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
