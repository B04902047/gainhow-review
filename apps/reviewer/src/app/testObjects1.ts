

import { SingleSheet, Paper, PaperMaterial, ReviewItem, ReviewStatus, UploadFileStatus, ReviewModel, FramedPage, Frame } from '@gainhow-review/data';

import testimage1 from '../assets/testImages/1.jpg'
import testimage2 from '../assets/testImages/2.jpg'

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
const fileId1: string = "test-file-id";
const uploadFileStatus1 = new UploadFileStatus(
    fileName1,
    fileId1,
    "GENERATING_PRINTABLE_PAGES",
    6
)


const uploadFileStatus2 = new UploadFileStatus(
    'testImage1',
    '1',
   'GENERATING_PRINTABLE_PAGES',
    2,
    '',
    [testimage1,testimage2],
    []
  );

const reviewStatus1 = new ReviewStatus(
    reviewId1,
    3,
    ["test-review-id-01", "test-review-id-02", "test-review-id-03"],
    1,
    [uploadFileStatus1],
    "WAITING_PRINTABLE_REVIEW"
);

const reviewItem = new ReviewItem(
    reviewStatus1,
    singleSheet1
);
let frameIndices: string[] = reviewItem.frameDictionary.frameIndices;

const reviewModel1: ReviewModel = reviewItem.models.get(1);
const page1_1: FramedPage = reviewModel1.framedPages.get(frameIndices[1])
page1_1.sourcePageJpegUrl = "";
const page1_2: FramedPage = reviewModel1.framedPages.get(frameIndices[2])
page1_2.sourcePageJpegUrl = "";

const reviewModel2: ReviewModel = reviewItem.models.get(2);
const page2_1 = reviewModel2.framedPages.get(frameIndices[1])
page2_1.sourcePageJpegUrl = "";
const page2_2 = reviewModel2.framedPages.get(frameIndices[2])
page2_2.sourcePageJpegUrl = "";
const reviewModel3: ReviewModel = reviewItem.models.get(3);
const page3_1 = reviewModel3.framedPages.get(frameIndices[1])
page3_1.sourcePageJpegUrl = "";
const page3_2 = reviewModel3.framedPages.get(frameIndices[2])
page3_2.sourcePageJpegUrl = "";

export {
    reviewItem,
    reviewModel1,
    page1_1,
    uploadFileStatus2
}