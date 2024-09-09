import express from 'express';
import OrderController from '../controllers/orderControllers.js';

const router = express.Router();

router.get('/orders', OrderController.getAllOrders);
router.post('/orders', OrderController.createOrder);
router.get('/orders/:id', OrderController.getOrderById);
router.delete('/orders/:id', OrderController.deleteOrder);

export default router; // Path: server/routes/orderRoutes.js
