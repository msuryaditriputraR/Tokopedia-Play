import express from 'express';
const videoRouter = express.Router();

import videoController from '../controllers/video.js';

// GET VIDEO LIST
videoRouter.get('/', videoController.getVideoList);

export default videoRouter;
