import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
import 'dotenv/config';
import mongoConnect from './config/mongo.js';
import router from './routes/index.js';

const port = process.env.PORT || 3000;

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, 'images');

// MIDDLEWARE
app.use(express.json());
app.use(router);
app.use('/images', express.static(imgDir));

// CONNECT MONGODB
mongoConnect();

// START SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
