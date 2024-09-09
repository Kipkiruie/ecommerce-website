const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/cart', cartController.getCart);
router.post('/cart/add', cartController.addToCart);
router.put('/cart/update', cartController.updateCart);
router.delete('/cart/remove/:id', cartController.removeFromCart);

module.exports = router; // Path: server/routes/cartRoutes.js
