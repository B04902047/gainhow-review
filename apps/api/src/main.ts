import "reflect-metadata";
import { ReviewItem, ReviewRegistrationInfo, ReviewStatus } from '@gainhow-review/data';
import { RegisterResponseBody } from '@gainhow-review/interfaces';
import { deserialize } from 'class-transformer';
import * as express from 'express';
import { Connection, createConnection, getConnection } from 'typeorm';
import { ReviewReception } from './app/ReviewReception';

const app = express();

app.use(express.json());

const connectionPromise: Promise<Connection> = createConnection();

app.post('/api/register', async (req, res) => {
  let connection: Connection;
  connection = getConnection();
  let reviewRegistrationInfo: ReviewRegistrationInfo
    = deserialize(ReviewRegistrationInfo, req.body.reviewRegistrationInfoJson);
  let responseBody: RegisterResponseBody;
  try {
    let reviewId: string = await new ReviewReception(connection).register(reviewRegistrationInfo);
    responseBody = {
      isSuccess: true,
      reviewId
    };
  } catch (error) {
    responseBody = {
      isSuccess: false,
      error
    };
  }
  res.send(responseBody);
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

