import videoRepository from '../repository/video.js';

async function getVideoList() {
  const videos = await videoRepository.getAllVideo();
  return videos;
}

async function addVideo(data) {
  const video = await videoRepository.addVideo(data);

  return video;
}

export default {
  getVideoList,
  addVideo
};
