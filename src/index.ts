import path from 'node:path';
import express from 'express';
import http from 'node:http';
import mongoose from 'mongoose';
import 'express-async-errors';
import 'dotenv/config';

import { router } from './router';
import { handleErrors } from './app/middlewares/handleErrors';

mongoose.connect(process.env.MONGOOSE || '').then(() => {
  const port = 3001;

  const app = express();
  const server = http.createServer(app);

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
  server.listen(3001, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
})
  .catch((err) => console.log(err));
  