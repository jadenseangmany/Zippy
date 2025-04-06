// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true },
  name: String,
  email: String,
  points: { type: Number, default: 0 },
  rank: { type: Number, default: null },
});

module.exports = mongoose.model('User', UserSchema);