import commentService from '../services/comment.js';

async function getCommentList(req, res) {
  try {
    const {videoId} = req.body;
    if (!videoId) res.status(400).json({error: 'Bad Payload'});
    else {
      const comments = await commentService.getCommentList(videoId);

      if (comments.length <= 0) {
        res.status(404).json({error: 'videoId not found'});
      } else {
        res.status(200).json(comments);
      }
    }
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
}

export default {
  getCommentList
};
