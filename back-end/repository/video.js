import {prisma} from '../config/prismaConfig.js';

async function getAllVideo() {
  const videos = await prisma.videos.findMany();
  return videos;
}

async function addVideo(data) {
  const video = await prisma.videos.create({data});
  return video;
}

export default {
  getAllVideo,
  addVideo
};
