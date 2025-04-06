// GPT Generated Code (Schema for assignments)

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  prompt: String,
  answer: String,
  hint: String,
});

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdBy: { type: String }, // you can change to ObjectId if you add users later
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  deadline: Date,
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assignment', assignmentSchema);