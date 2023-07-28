import express from 'express';
const commentRouter = express.Router();

import commentController from '../controllers/comment.js';

// GET COMMENT LIST
commentRouter.get('/', commentController.getCommentList);

// ADD COMMENT
commentRouter.post('/', commentController.postComment);

export default commentRouter;
