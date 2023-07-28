import {randomUUID} from 'crypto';
import commentRepository from '../repository/comment.js';

async function getCommentList(videoId) {
  const comments = await commentRepository.getCommentList(videoId);
  return comments;
}

async function addComment(comment) {
  const id = randomUUID().toString();
  comment.commentId = id;

  const result = await commentRepository.addComment(comment);

  if (!result) return false;

  return id;
}

export default {
  getCommentList,
  addComment
};
