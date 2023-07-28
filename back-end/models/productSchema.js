import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: String,
  linkProduct: String,
  titleProduct: String,
  priceProduct: Number,
  videoId: String
});

export default productSchema;
