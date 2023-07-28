import express from 'express';
const router = express.Router();

import videoRouter from './videoRoute.js';
import productRouter from './productRoute.js';

router.use('/videos', videoRouter);
router.use('/products', productRouter);

export default router;
