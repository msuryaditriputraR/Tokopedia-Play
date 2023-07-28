import productRepository from '../repository/product.js';

async function getProductList(videoId) {
  const products = await productRepository.getProductList(videoId);
  return products;
}

export default {
  getProductList
};
