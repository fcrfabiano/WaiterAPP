import express from 'express';
import mongoose from 'mongoose';
import 'express-async-errors';

import { router } from './router';
import { handleErrors } from './app/middlewares/handleErrors';

mongoose.connect(
  'mongodb+srv://test:test@cluster0.pn5i2xu.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
  const app = express();
  const port = 3001;
  app.use('/images', express.static('uploads'));
  app.use(express.json());
  app.use(router);
  app.use(handleErrors);
  app.listen(3001, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
})
  .catch((err) => console.log(err));
  