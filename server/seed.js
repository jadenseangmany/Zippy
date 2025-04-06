// GPT Generated Code (Populating the database)

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Assignment = require('./models/Assignment');
const Course = require('./models/Course');

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('📦 Seeding database...');

  // clear old data
  await Assignment.deleteMany();
  await Course.deleteMany();

  const course = await Course.create({
    title: "AP Physics",
    description: "Learn forces, energy, and motion.",
    teacherId: "demo-teacher",
    students: ["demo-student-1", "demo-student-2"]
  });

  await Assignment.create({
    title: "Kinematics Race",
    courseId: course._id,
    createdBy: "demo-teacher",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    questions: [
      {
        prompt: "What is the equation for constant acceleration?",
        answer: "v = u + at",
        hint: "Think about initial and final velocity"
      },
      {
        prompt: "What is displacement in terms of velocity and time?",
        answer: "s = ut + 0.5at^2",
        hint: "It includes both velocity and acceleration"
      }
    ]
  });

  console.log('Done seeding!');
  mongoose.disconnect();
});