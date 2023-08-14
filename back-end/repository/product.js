import {prisma} from '../config/prismaConfig.js';

async function getProductList(videoId) {
  const products = await prisma.products.findMany({where: {videoId}});
  return products;
}

async function addProduct(data) {
  const product = await prisma.products.create({data});
  return product;
}

export default {
  getProductList,
  addProduct
};
