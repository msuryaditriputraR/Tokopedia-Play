import videoService from '../services/video.js';

async function getVideoList(req, res) {
  try {
    const videos = await videoService.getVideoList();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function getVideo(req, res) {
  try {
    const {videoId} = req.params;
    const video = await videoService.getVideoById(videoId);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function postVideo(req, res) {
  try {
    const {name, title, linkVideo, thumbnailURL, category} = req.body;

    if (!name || !title || !linkVideo || !thumbnailURL || !category) {
      res.status(400).json({error: 'Bad Payload'});
    } else {
      const video = await videoService.addVideo({
        name,
        title,
        linkVideo,
        thumbnailURL,
        category
      });
      res.status(201).json({message: `video successfully created`, video});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export default {
  getVideoList,
  postVideo,
  getVideo
};
