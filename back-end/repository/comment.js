import {prisma} from '../config/prismaConfig.js';

async function getCommentList(videoId) {
  const comments = await prisma.comments.findMany({where: {videoId}});
  return comments;
}

async function addComment(data) {
  const comment = await prisma.comments.create({data});
  return comment;
}

export default {
  getCommentList,
  addComment
};
