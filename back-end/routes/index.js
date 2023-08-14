import express from 'express';
const router = express.Router();

import videoController from '../controllers/video.js';
import productController from '../controllers/product.js';
import commentController from '../controllers/comment.js';

router.get('/videos', videoController.getVideoList);
router.post('/videos', videoController.postVideo);
router.get('/video/:videoId/products', productController.getProductList);
router.post('/video/:videoId/products', productController.postProduct);
router.get('/video/:videoId/comments', commentController.getCommentList);
router.post('/video/:videoId/comments', commentController.postComment);

export default router;
