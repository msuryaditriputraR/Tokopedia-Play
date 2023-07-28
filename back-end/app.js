import express from 'express';
import 'dotenv/config';
import mongo from './config/mongo.js';

mongo();

const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
