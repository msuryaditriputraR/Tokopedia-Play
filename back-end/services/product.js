import productRepository from '../repository/product.js';

async function getProductList(videoId) {
  const products = await productRepository.getProductList(videoId);
  return products;
}

async function addProduct(data) {
  const product = await productRepository.addProduct(data);
  return product;
}

export default {
  getProductList,
  addProduct
};
