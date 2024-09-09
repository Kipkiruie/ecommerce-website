import express from 'express';
import MiscContoller from '../controllers/miscellaneuosController.js';

const router = express.Router();

router.get('/about', MiscContoller.aboutUs);
router.get('/contact', MiscContoller.contactUs);
router.get('/trending', MiscContoller.getTrending);
router.get('/notifications', MiscContoller.getNotifications);
router.get('/recommendations', MiscContoller.getRecommmendations);

export default router; // Path: server/routes/miscellaneousRoutes.js
