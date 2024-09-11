// This is where we define our routes
import express from 'express';
import AuthController from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

//authentication routes
router.post('/auth/signup', AuthController.signup);
router.post('/auth/login', AuthController.login);
router.get('/auth/logout', AuthController.logout);
router.post('/auth/forgot-password', AuthController.forgotPassword);
router.put('/auth/reset-password/:resetToken', AuthController.resetPassword);
router.get('/auth/profile', AuthController.getProfile);
router.put('/auth/profile/update', authMiddleware, AuthController.updateProfile);

export default router; // Path: server/routes/index.js