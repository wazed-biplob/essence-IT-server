import express from 'express';
import mongoose from 'mongoose';
import config from './app/config/config';
import { router } from './app/router/routes';
import cors from 'cors';
const app = express();

app.use(express.json());
const port = config.port || 3000;
app.use(cors());

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function main() {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => console.log('MongoDB connected.'));
    app.listen(config.port, () => {
      console.log(`app is running at ${config.port}`);
    });
  } catch (e) {
    console.log(`Error : `, e);
  }
}

main();

export default app;
