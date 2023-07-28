import express from 'express';
const videoRouter = express.Router();

import videoController from '../controllers/video.js';

// GET VIDEO LIST
videoRouter.get('/', videoController.getVideoList);

// ADD VIDEO
videoRouter.post('/', videoController.postVideo);

export default videoRouter;
