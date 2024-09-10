// This is where we define our routes
import express from 'express';
import productsRoutes from './productsRoutes.js';
import reviewRoutes from './reviewRoutes.js';
import miscellaneousRoutes from './miscellaneousRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import authRoutes from './authRoutes.js';
import orderRoutes from './orderRoutes.js';
import adminRoutes from './adminRoutes.js';


const mainRouter = express.Router();

mainRouter.use('/api', productsRoutes);
mainRouter.use('/api', reviewRoutes);
mainRouter.use('/api', miscellaneousRoutes);
mainRouter.use('/api', paymentRoutes);
mainRouter.use('/api/auth', authRoutes);
mainRouter.use('/api', orderRoutes);
mainRouter.use('/api', adminRoutes);

export default mainRouter; // Path: server/routes/index.js