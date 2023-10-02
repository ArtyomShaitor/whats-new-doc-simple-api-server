import express from 'express';
import mongoose from 'mongoose';
import { ChangeLogHistory } from './schema';


const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

await mongoose.connect('mongodb://mongo/my-api');

app.post('/webhook', async (req, res) => {
  console.log(req);
  console.log(req.body);
  const { changelog } = req.body;

  const history = new ChangeLogHistory({
    changelog
  })

  await history.save();

  res.send(201);
})

app.get('/changelog', async (req, res) => {
  const latestRecord = await ChangeLogHistory.findOne<ChangeLogHistory>().sort({ createdAt: -1 }).exec();

  res.send(latestRecord?.changelog);
});

app.get('/hc', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
