import express from 'express';
const productRouter = express.Router();

import productController from '../controllers/product.js';

// GET Product LIST
productRouter.get('/', productController.getProductList);

export default productRouter;
