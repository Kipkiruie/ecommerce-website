import express from 'express';
import PaymentController from '../controllers/paymentController.js';

const router = express.Router();

router.get('/payment', PaymentController.processPayment);
router.post('/payment', PaymentController.createPayment);
router.post('/payment/verify', PaymentController.confirmPayment);
router.get('/payment/history', PaymentController.getPaymentHistory);

export default router; // Path: server/routes/paymentRoutes.js
