const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Initialize express app
const app = express();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
}));
app.use(bodyParser.json());

// Socket.IO setup
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // Use '*' for dev, restrict in prod
  },
});

// Import routes
const gradeRoute = require('./routes/grade');
const userRoute = require('./routes/users');  // Newly created users route

// Use routes
app.use('/api/grade', gradeRoute(io));
app.use('/api/users', userRoute);

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});