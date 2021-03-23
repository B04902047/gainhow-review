import "reflect-metadata";
import { FramedPage, ReviewItem, ReviewModel, ReviewRegistrationInfo, ReviewStatus, UploadFilePageInfo, UploadFileStatus } from '@gainhow-review/data';
import { RegisterResponseBody, UploadResponseBody } from '@gainhow-review/interfaces';
import { deserialize, serialize } from 'class-transformer';
import * as express from 'express';
import * as expressFileUpload from 'express-fileupload';
import { UploadedFile } from 'express-fileupload';
import { Connection, createConnection, getConnection } from 'typeorm';
import { ReviewReception } from './app/ReviewReception';
// import { File, Fields, Files, IncomingForm } from "formidable";

const app = express();
console.log(process.env);

app.use(express.json());

const connectionPromise: Promise<Connection> = createConnection({
  "type": "mysql",
  "host": process.env.DATABASE_HOST,
  "port": parseInt(process.env.DATABASE_PORT, 10),
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
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
  ],
  "subscribers": [
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

app.use(expressFileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));
app.post('/api/upload', async (req, res) => {
  let file: UploadedFile = req.files!.file as UploadedFile;
  let reviewId: string = req.body.reviewId;
  let responseBody: UploadResponseBody;
  
  let reviewReception = new ReviewReception(getConnection());
  let reviewStatus: ReviewStatus;
  let uploadFileStatus: UploadFileStatus;
  try {
    [reviewStatus, uploadFileStatus]
      = await reviewReception.uploadFile(
        reviewId,
        {
          name: file.name,
          path: file.tempFilePath
        }
      );
    responseBody = {
      isSuccess: true,
      reviewStatusInJson: serialize(reviewStatus)
    }
  } catch (error) {
    responseBody = {
      isSuccess: false,
      error
    }
  }
  res.send(responseBody);
  // TODO: busy check 轉檔狀態
  await reviewReception.busyCheckFileConversion(uploadFileStatus);
})



const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

