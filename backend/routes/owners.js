const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

// Register a new owner
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const owner = new Owner({ name, email, password });
    await owner.save();
    res.status(201).json({ message: 'Owner registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login an owner
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const owner = await Owner.findOne({ email });
    if (!owner || !(await owner.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = owner.generateAuthToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
