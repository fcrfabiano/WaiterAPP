import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import 'express-async-errors';
import 'dotenv/config';

import { router } from './router';
import { handleErrors } from './app/middlewares/handleErrors';

mongoose.connect(process.env.MONGOOSE || '').then(() => {
  const app = express();
  const port = 3001;

  app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
  app.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')));
  app.use(express.json());
  app.use(router);
  app.use(handleErrors);
  app.listen(3001, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
})
  .catch((err) => console.log(err));
  