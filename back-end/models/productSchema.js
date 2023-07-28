import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: String,
  link: String,
  title: String,
  price: Number
});

export default productSchema;