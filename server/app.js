// GPT Generated Code

require('dotenv').config(); // loads .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // enables JSON body parsing

// Routes
const courseRoutes = require('./routes/courses');
const assignmentRoutes = require('./routes/assignments');

app.use('/api/courses', courseRoutes);       // e.g., /api/courses
app.use('/api/assignments', assignmentRoutes); // e.g., /api/assignments

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});