import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import videos from './dbModel.js'


// app config
const app = express();
const port = 9000;

// DB config
const connection_url = 'mongodb+srv://admin:fMLy8JPSHcHTvLCU@cluster0.aywim.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeaders('Access-Control-Allow-Origin', '*'),
  res.setHeaders('Access-Control-Allow-Headers', '*')
  next();
})

// api endpoint
app.get('/', (req, res) => res.status(200).send('Hola amigos'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
  videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data)
    }
  });
});

app.post('/v2/posts', (req, res) => {
  const dbVideos = req.body;

  videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})

// listening point
app.listen(port, () => console.log(`Listening from localhost: ${port}`))