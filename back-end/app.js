import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';

const port = process.env.PORT || 3000;

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use('/api/v1/', router);

// START SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
