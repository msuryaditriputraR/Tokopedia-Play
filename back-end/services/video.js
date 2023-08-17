import videoRepository from '../repository/video.js';

async function getVideoList() {
  const videos = await videoRepository.getAllVideo();
  return videos;
}

async function getVideoById(videoId) {
  const video = await videoRepository.getVideo(videoId);
  return video;
}

async function addVideo(data) {
  const video = await videoRepository.addVideo(data);

  return video;
}

async function searchVideo(query) {
  const videos = await videoRepository.searchVideo(query);

  return videos;
}

export default {
  getVideoList,
  getVideoById,
  addVideo,
  searchVideo
};
