import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId: String,
  urlImage: String
});

export default videoSchema;
