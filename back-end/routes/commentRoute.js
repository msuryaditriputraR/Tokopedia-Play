import express from 'express';
const commentRouter = express.Router();

import commentController from '../controllers/comment.js';

// GET comment LIST
commentRouter.get('/', commentController.getCommentList);

export default commentRouter;
