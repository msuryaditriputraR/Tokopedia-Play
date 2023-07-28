import {randomUUID} from 'crypto';
import videoRepository from '../repository/video.js';

async function getVideoList() {
  const videos = await videoRepository.getAllVideo();
  return videos;
}

async function addVideo(video) {
  const id = randomUUID().toString();
  video.videoId = id;

  await videoRepository.addVideo(video);

  return id;
}

export default {
  getVideoList,
  addVideo
};
