import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId: String,
  urlThumbnail: String,
  titleVideo: String,
  linkVideo: String
});

export default videoSchema;
