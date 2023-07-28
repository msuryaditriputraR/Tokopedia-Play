import commentRepository from '../repository/comment.js';

async function getCommentList(videoId) {
  const comments = await commentRepository.getCommentList(videoId);
  return comments;
}

export default {
  getCommentList
};
