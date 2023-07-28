import express from 'express';
const productRouter = express.Router();

import productController from '../controllers/product.js';

// GET PRODUCT LIST
productRouter.get('/', productController.getProductList);

// ADD PRODUCT
productRouter.post('/', productController.postProduct);

export default productRouter;
