import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();


router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.post('/forgot-password', AuthController.forgotPassword);
router.put('/reset-password/:resetToken', AuthController.resetPassword);
router.get('/profile', AuthController.getProfile);
router.put('/profile/update', AuthController.updateProfile);

export default router; // Path: server/routes/authRoutes.js
