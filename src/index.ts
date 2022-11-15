import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://test:test@cluster0.pn5i2xu.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
  const app = express();
  const port = 3001;
  
  app.listen(3001, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
})
  .catch((err) => console.log(err));
