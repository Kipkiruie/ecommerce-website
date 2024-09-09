import express from 'express';
import AdminController from '../controllers/adminController.js';

const router = express.Router();

router.post('/add-product', AdminController.addProduct);
router.put('/update-product/:id', AdminController.updateProduct);
router.delete('/delete-product/:id', AdminController.deleteProduct);
router.get('/orders', AdminController.getAllOrders);

export default router; // Path: server/routes/adminRoutes.js
