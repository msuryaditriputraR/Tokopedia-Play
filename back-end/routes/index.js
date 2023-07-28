import express from 'express';
const router = express.Router();

import videoRouter from './videoRoute.js';
import productRouter from './productRoute.js';
import commentRouter from './commentRoute.js';

router.use('/videos', videoRouter);
router.use('/products', productRouter);
router.use('/comments', commentRouter);

export default router;
