import "reflect-metadata";
import { FramedPage, ReviewItem, ReviewModel, ReviewRegistrationInfo, ReviewStatus, UploadFilePageInfo, UploadFileStatus } from '@gainhow-review/data';
import { RegisterResponseBody, UpdateReviewModelRequestBody, UpdateReviewModelResponseBody, UploadResponseBody } from '@gainhow-review/interfaces';
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

const reviewReception = new ReviewReception(getConnection());

app.post('/api/register', async (req, res) => {

  let reviewRegistrationInfo: ReviewRegistrationInfo
    = deserialize(ReviewRegistrationInfo, req.body.reviewRegistrationInfoJson);
  let responseBody: RegisterResponseBody;
  try {
    let reviewId: string = await reviewReception.register(reviewRegistrationInfo);
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
  // busy check 轉檔狀態
  await reviewReception.busyCheckFileConversion(uploadFileStatus);
})

app.post('/api/loadReviewStatus', async (req, res) => {
  let reviewId: string = req.body.reviewId;
  let responseBody: {
    isSuccess: boolean;
    error?: any;
    reviewStatusInJson?: string;
  };
  try {
    let reviewStatus: ReviewStatus
      = await reviewReception.loadReviewStatus(reviewId);
    responseBody = {
      isSuccess: true,
      reviewStatusInJson: serialize(reviewStatus)
    };
  } catch (error) {
    responseBody = {
      isSuccess: false,
      error
    };
  }
  res.send(responseBody);
})


app.post('/api/loadReviewItem', async (req, res) => {
  let reviewId: string = req.body.reviewId;
  let responseBody: {
    isSuccess: boolean;
    error?: any;
    reviewItemInJson?: string;
  };
  try {
    let reviewItem: ReviewItem
      = await reviewReception.loadReviewItem(reviewId);
    responseBody = {
      isSuccess: true,
      reviewItemInJson: serialize(reviewItem)
    };
  } catch (error) {
    responseBody = {
      isSuccess: false,
      error
    };
  }
  res.send(responseBody);
});

app.post('/api/updateReviewModel', async (req, res) => {
  let requestBody: UpdateReviewModelRequestBody = req.body;
  let reviewModel: ReviewModel
    = deserialize(ReviewModel, requestBody.reviewModelInJson);
  let responseBody: UpdateReviewModelResponseBody;
  try {
    await reviewReception.updateReviewModel(reviewModel);
    responseBody = { isSuccess: true };
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

