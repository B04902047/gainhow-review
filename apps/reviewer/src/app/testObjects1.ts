

import { SingleSheet, Paper, PaperMaterial, ReviewItem, ReviewStatus, UploadFileStatus, ReviewModel, FramedPage, Frame, UploadFilePageInfo } from '@gainhow-review/data';

import testImage1 from '../assets/testImages/1.jpg'
import testImage2 from '../assets/testImages/2.jpg'

const paperMaterial1 = new PaperMaterial("一級卡");
const paperMaterial2 = new PaperMaterial("象牙卡");

const paper1 = new Paper(
    "一級卡250µm",
    paperMaterial1,
    250,
    250,
    true
);

const paper2 = new Paper(
    "象牙卡280µm",
    paperMaterial1,
    280,
    300,
    true
);

const singleSheet1 = new SingleSheet(
    90, 54, true, paper1
);

const reviewId1: string = "test-review-id";
const fileName1: string = "test-file-name";
const fileId1: string = "test-file-id1";


const reviewStatus1 = new ReviewStatus(
    3
);
let uploadFileStatus1 = new UploadFileStatus(
    reviewStatus1,
    fileName1
)

const pageInfo3 = new UploadFilePageInfo(
    uploadFileStatus1,
    "",
    "https://cdn.vox-cdn.com/thumbor/iAy4n7zv75DQ2t3EFEJUcqkg7c0=/0x0:1024x512/1820x1213/filters:focal(289x75:451x237):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67654822/halloween2020.0.jpg",
    92,
    61
)

const pageInfo4 = new UploadFilePageInfo(
    uploadFileStatus1,
    "",
    "https://cdn.vox-cdn.com/thumbor/iAy4n7zv75DQ2t3EFEJUcqkg7c0=/0x0:1024x512/1820x1213/filters:focal(289x75:451x237):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67654822/halloween2020.0.jpg",
    92,
    61
)

uploadFileStatus1.pageInfos = [pageInfo3, pageInfo4];



let uploadFileStatus2 = new UploadFileStatus(
    reviewStatus1,
    'testFile2~~~~'
  );

const pageInfo1 = new UploadFilePageInfo(
    uploadFileStatus2,
    "",
    testImage1,
    92,
    56
);

const pageInfo2 = new UploadFilePageInfo(
    uploadFileStatus2,
    "",
    testImage2,
    92,
    56
)
uploadFileStatus2.pageInfos = [pageInfo1, pageInfo2];


const uploadFileStatuses1 = [
    uploadFileStatus1,
    uploadFileStatus2,
    uploadFileStatus2
]



reviewStatus1.numberOfModels = 3;
// reviewStatus1.modelIds = ["test-review-id-01", "test-review-id-02", "test-review-id-03"];
reviewStatus1.numberOfFiles = 1;
reviewStatus1.uploadFileStatuses = uploadFileStatuses1;
reviewStatus1.progress = "REGISTERED";

const reviewItem = new ReviewItem(
    'reviewIdwedwewqe',
    reviewStatus1,
    singleSheet1
);

let frameIndices: string[] = reviewItem.frameDictionary.frameNames;
const reviewModel1: ReviewModel = reviewItem.models[0];
const page1_1: FramedPage = reviewModel1.framedPages[0];
page1_1.sourceFileIndex = 0;
page1_1.sourcePageNumber = 0;
page1_1.positionX = -20;
page1_1.positionY = 10;
page1_1.rotationDegree = 30;
const page1_2: FramedPage = reviewModel1.framedPages[1]
page1_2.sourceFileIndex = 0;
page1_2.sourcePageNumber = 1;

const reviewModel2: ReviewModel = reviewItem.models[1];
const page2_1 = reviewModel2.framedPages[0]
page2_1.sourceFileIndex = 0;
page2_1.sourcePageNumber = 0;
const page2_2 = reviewModel2.framedPages[1]
page2_2.sourceFileIndex = 0;
page2_2.sourcePageNumber = 1;
const reviewModel3: ReviewModel = reviewItem.models[2];
const page3_1 = reviewModel3.framedPages[0]
page3_1.sourceFileIndex = 0;
page3_1.sourcePageNumber = 0;
const page3_2 = reviewModel3.framedPages[1]
page3_2.sourceFileIndex = 0;
page3_2.sourcePageNumber = 1;

export {
    singleSheet1,
    reviewItem,
    reviewModel1,
    page1_1,
    uploadFileStatus2,
    uploadFileStatuses1
}