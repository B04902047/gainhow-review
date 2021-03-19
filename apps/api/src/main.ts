import "reflect-metadata";
import { FramedPage, ReviewItem, ReviewModel, ReviewRegistrationInfo, ReviewStatus, UploadFilePageInfo, UploadFileStatus } from '@gainhow-review/data';
import { RegisterResponseBody } from '@gainhow-review/interfaces';
import { deserialize } from 'class-transformer';
import * as express from 'express';
import { Connection, createConnection, getConnection } from 'typeorm';
import { ReviewReception } from './app/ReviewReception';

const app = express();

app.use(express.json());

const connectionPromise: Promise<Connection> = createConnection({
  "type": "mysql",
  "host": "192.168.3.180",
  "port": 3306,
  "username": "gainhow",
  "password": "gding1234",
  "database": "gainghow-test",
  "synchronize": true,
  "logging": false,
  "entities": [
    ReviewItem,
    ReviewModel,
    ReviewStatus,
    UploadFileStatus,
    UploadFilePageInfo,
    FramedPage
  ],
  "migrations": [
     "apps/api/src/migration/**/*.ts"
  ],
  "subscribers": [
     "apps/api/src/subscriber/**/*.ts"
  ],
  "cli": {
     "entitiesDir": "lib/data/src/Review",
     "migrationsDir": "apps/api/src/migration",
     "subscribersDir": "apps/api/src/subscriber"
  }
});

app.post('/api/register', async (req, res) => {
  let connection: Connection;
  try {
    connection = await connectionPromise;
  } catch (error) {
    res.send({
      isSuccess: false,
      error
    });
    return;
  }
  
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

