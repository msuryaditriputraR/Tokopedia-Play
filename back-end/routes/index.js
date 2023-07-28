import express from 'express';
const router = express.Router();

import videoRoute from './videoRoute.js';

router.use('/videos', videoRoute);

export default router;
