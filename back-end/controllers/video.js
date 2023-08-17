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
    const {name, title, linkVideo, thumbnailURL, category, youtubeId} =
      req.body;

    if (
      !name ||
      !title ||
      !linkVideo ||
      !thumbnailURL ||
      !category ||
      !youtubeId
    ) {
      res.status(400).json({error: 'Bad Payload'});
    } else {
      const video = await videoService.addVideo({
        name,
        title,
        linkVideo,
        thumbnailURL,
        category,
        youtubeId
      });
      res.status(201).json({message: `video successfully created`, video});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function searchVideo(req, res) {
  try {
    const query = req.query.q;

    if (!query) {
      res.status(400).json({error: 'Bad Payload'});
    }

    const videos = await videoService.searchVideo(query);

    if (videos.length > 0) res.status(200).json(videos);
    else res.status(404).json({message: 'Video Not Found'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export default {
  getVideoList,
  postVideo,
  getVideo,
  searchVideo
};
