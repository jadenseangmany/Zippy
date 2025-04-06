// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { auth0Id, name, email } = req.body;

  let user = await User.findOne({ auth0Id });
  if (!user) {
    user = await User.create({ auth0Id, name, email });
  }

  res.json(user);
});

module.exports = router;