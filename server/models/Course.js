// GPT Generated Code (Schema for courses)

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  teacherId: { type: String }, // again, replace with ObjectId if needed
  students: [String], // or [ObjectId] if you want to link users
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);