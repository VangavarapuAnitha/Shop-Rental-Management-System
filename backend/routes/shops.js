const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop');

// GET all shops
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new shop
router.post('/', async (req, res) => {
  const shop = new Shop({
    name: req.body.name,
    location: req.body.location,
    owner: req.body.owner,
  });

  try {
    const newShop = await shop.save();
    res.status(201).json(newShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
