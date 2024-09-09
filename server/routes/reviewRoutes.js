
import express from 'express';
import ReviewController from '../controllers/reviewController.js';

const router = express.Router();

router.get('/reviews', ReviewController.getProductReview);
router.post('/reviews', ReviewController.addReview);
router.put('/reviews/:id', ReviewController.updateReview);
router.delete('/reviews/:id', ReviewController.deleteReview);

export default router; // Path: server/routes/reviewRoutes.js
