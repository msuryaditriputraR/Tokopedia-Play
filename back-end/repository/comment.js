import Comment from '../models/comment.js';

async function getCommentList(videoId) {
  const comments = await Comment.find({videoId}).exec();
  return comments;
}

export default {
  getCommentList
};
