import express from 'express';
import ProductsController from '../controllers/productsController.js';

const router = express.Router();

router.get('/products', ProductsController.getProducts);
router.get('/products/:id', ProductsController.getProductById);
router.get('/products/category/:category', ProductsController.getProductsByCategory);
router.get('/categories', ProductsController.getCategories);
router.get('/products/search', ProductsController.searchProducts);
router.get('/products/:id/reviews', ProductsController.getProductReviews);

export default router; // Path: server/routes/productsRoutes1.js
