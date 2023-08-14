import commentService from '../services/comment.js';

async function getCommentList(req, res) {
  try {
    const {videoId} = req.params;
    if (!videoId) res.status(400).json({error: 'Bad Payload'});
    else {
      const comments = await commentService.getCommentList(videoId);
      res.status(200).json(comments);
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function postComment(req, res) {
  try {
    const {videoId} = req.params;
    const {username, message} = req.body;

    if (!username || !message || !videoId) {
      res.status(400).json({error: 'Bad Payload'});
    } else {
      const comment = await commentService.addComment({
        username,
        message,
        videoId
      });

      if (!comment) res.status(400).json({error: 'Failed to post comment'});
      else {
        res.status(201).json({message: `Comment successfully created`});
      }
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export default {
  getCommentList,
  postComment
};
