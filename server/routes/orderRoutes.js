const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products');
    res.json(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
