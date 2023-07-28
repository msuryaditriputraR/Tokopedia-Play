import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  username: String,
  comment: String,
  videoId: String,
  timestamp: {type: Date, default: Date.now}
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
