import Video from '../models/video.js';

async function getAllVideo() {
  const videos = await Video.find();
  return videos;
}

async function addVideo(video) {
  await Video.create(video);
}

export default {
  getAllVideo,
  addVideo
};
