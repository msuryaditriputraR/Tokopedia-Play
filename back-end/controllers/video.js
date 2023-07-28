import videoService from '../services/video.js';

async function getVideoList(req, res) {
  try {
    const videos = await videoService.getVideoList();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
}

async function postVideo(req, res) {
  try {
    const id = await videoService.addVideo(req.body);
    res
      .status(201)
      .json({message: `video successfully created with id = ${id}`});
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
}

export default {
  getVideoList,
  postVideo
};
