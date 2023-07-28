import Comment from '../models/comment.js';

async function getCommentList(videoId) {
  const comments = await Comment.find({videoId}).exec();
  return comments;
}

async function addComment(comment) {
  try {
    const result = await Comment.create(comment);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default {
  getCommentList,
  addComment
};
