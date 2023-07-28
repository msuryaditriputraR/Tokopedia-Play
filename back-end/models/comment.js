import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    username: String,
    comment: String,
    videoId: String
  },
  {timestamps: true}
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
