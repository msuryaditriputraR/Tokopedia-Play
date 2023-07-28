import Video from '../models/video.js';

async function getAllVideo() {
  const videos = await Video.find();
  return videos;
}

export default {
  getAllVideo
};
