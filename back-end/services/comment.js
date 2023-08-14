import commentRepository from '../repository/comment.js';

async function getCommentList(videoId) {
  const comments = await commentRepository.getCommentList(videoId);
  return comments;
}

async function addComment(data) {
  const comment = await commentRepository.addComment(data);
  return comment;
}

export default {
  getCommentList,
  addComment
};
