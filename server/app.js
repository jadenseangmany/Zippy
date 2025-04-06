const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const gradeRoute = require('./routes/grade');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // for dev, restrict in prod
  },
});

app.use(bodyParser.json());
app.use('/api/grade', gradeRoute(io));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});