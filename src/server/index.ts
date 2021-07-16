import { createServer } from 'http';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
// import path from 'path';

import { PhaserGame } from './game/game';
import { PORT } from './constants';

const app = express();
const httpServer = createServer(app);
new PhaserGame(httpServer);

app.use(helmet());
app.use(cors());
app.use(compression());

// app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (_req, res) => {
  res.send({ message: 'Hello from express backend'});
  // res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

