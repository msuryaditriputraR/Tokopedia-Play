import {randomUUID} from 'crypto';
import videoRepository from '../repository/video.js';

async function getVideoList() {
  const videos = await videoRepository.getAllVideo();
  return videos;
}

async function addVideo({urlThumbnail, titleVideo, linkVideo}) {
  const id = randomUUID().toString();

  await videoRepository.addVideo({
    videoId: id,
    urlThumbnail,
    titleVideo,
    linkVideo
  });

  return id;
}

export default {
  getVideoList,
  addVideo
};
