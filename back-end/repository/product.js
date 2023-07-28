import Product from '../models/product.js';

async function getProductList(videoId) {
  const products = await Product.find({videoId}).exec();
  return products;
}

async function addProduct(product) {
  await Product.create(product);
}

export default {
  getProductList,
  addProduct
};
