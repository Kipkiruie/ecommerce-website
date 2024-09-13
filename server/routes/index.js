// This is where we define our routes
import express from 'express';
import AuthController from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import ProductsController from '../controllers/productsController.js';
import AdminController from '../controllers/adminController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';


const router = express.Router();

//authentication routes
router.post('/auth/signup', AuthController.signup);
router.post('/auth/login', AuthController.login);
router.get('/auth/logout', AuthController.logout);
router.post('/auth/forgot-password', AuthController.forgotPassword);
router.put('/auth/reset-password/:resetToken', AuthController.resetPassword);
router.get('/auth/profile', AuthController.getProfile);
router.put('/auth/profile/update', authMiddleware, AuthController.updateProfile);

//admin routes


router.post('/admin/products/add-product', authMiddleware, adminMiddleware, AdminController.addProduct);
router.put('/admin/products/update-product/:id', authMiddleware, adminMiddleware, AdminController.updateProduct);
router.delete('/admin/products/delete-product/:id', authMiddleware, adminMiddleware, AdminController.deleteProduct);
router.get('/admin/orders', authMiddleware, adminMiddleware, AdminController.getAllOrders);


//products routes
router.get('/products', ProductsController.getProducts);
router.get('/products/:id', ProductsController.getProductById);
router.get('/categories', ProductsController.getCategories);
router.get('/categories/:categoryName', ProductsController.getProductsByCategory);
router.get('/search', ProductsController.searchProducts);

export default router; // Path: server/routes/index.j