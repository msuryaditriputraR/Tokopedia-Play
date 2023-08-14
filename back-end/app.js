import express from 'express';
import 'dotenv/config';
import mongoConnect from './config/mongo.js';
import router from './routes/index.js';

const port = process.env.PORT || 3000;

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(router);

// CONNECT MONGODB
mongoConnect();

// START SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
