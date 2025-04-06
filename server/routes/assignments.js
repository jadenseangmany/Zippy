// GPT Generated Code

const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// GET all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('courseId'); // ← JOINs with Course data
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET assignments for a specific course
router.get('/course/:courseId', async (req, res) => {
  try {
    const assignments = await Assignment.find({ courseId: req.params.courseId });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;