import {randomUUID} from 'crypto';
import productRepository from '../repository/product.js';

async function getProductList(videoId) {
  const products = await productRepository.getProductList(videoId);
  return products;
}

async function addProduct(product) {
  const id = randomUUID().toString();
  product.productId = id;

  await productRepository.addProduct(product);

  return id;
}

export default {
  getProductList,
  addProduct
};
