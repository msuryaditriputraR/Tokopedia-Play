import Product from '../models/product.js';

async function getProductList(videoId) {
  const products = await Product.find({videoId}).exec();
  return products;
}

export default {
  getProductList
};
