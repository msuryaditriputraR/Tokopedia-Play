import express from 'express';
import {getVideoList} from '../controllers/videoControllers';

const router = express.Router();

// GET VIDEO LIST
router.get('/', getVideoList);
