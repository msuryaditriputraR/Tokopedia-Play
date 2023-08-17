import express from 'express';
const router = express.Router();

import videoController from '../controllers/video.js';
import productController from '../controllers/product.js';
import commentController from '../controllers/comment.js';

// VIDEOS
router.get('/videos', videoController.getVideoList);
router.get('/video/:videoId', videoController.getVideo);
router.get('/videos/search', videoController.searchVideo);
router.post('/videos', videoController.postVideo);

// PRODUCTS
router.get('/video/:videoId/products', productController.getProductList);
router.post('/video/:videoId/products', productController.postProduct);

// COMMENTS
router.get('/video/:videoId/comments', commentController.getCommentList);
router.post('/video/:videoId/comments', commentController.postComment);

export default router;
