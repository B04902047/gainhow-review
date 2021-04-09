

import { SingleSheet, Paper, PaperMaterial, ReviewItem, ReviewStatus, UploadFileStatus, ReviewModel, FramedPage, Frame, UploadFilePageInfo, ReviewRegistrationInfo, PerfectBoundBook, Coat, SaddleStichedBook } from '@gainhow-review/data';

import frontCoverJpeg from '../assets/testImages/to-one-with-life/front-cover.jpg';
import page1Jpeg from '../assets/testImages/to-one-with-life/1.jpg';
import page2Jpeg from '../assets/testImages/to-one-with-life/2.jpg';
import page3Jpeg from '../assets/testImages/to-one-with-life/3.jpg';
import page4Jpeg from '../assets/testImages/to-one-with-life/4.jpg';
import page5Jpeg from '../assets/testImages/to-one-with-life/5.jpg';
import page6Jpeg from '../assets/testImages/to-one-with-life/6.jpg';

const paperMaterial1 = new PaperMaterial("一級卡");
const paperMaterial2 = new PaperMaterial("象牙卡");

const paper1 = new Paper(
    "雲彩紙",
    paperMaterial1,
    250,
    250,
    true
);

const paper2 = new Paper(
    "銅版紙120g",
    paperMaterial1,
    280,
    300,
    true
);

const coat1 = new Coat('壓紋', '壓紋');
const book = new SaddleStichedBook(
    210,
    297,
    21,
    "RIGHT_TO_LEFT",
    paper1,
    paper2,
    coat1
);

const reviewRegistrationInfo = new ReviewRegistrationInfo(
    1,
    book
)


const reviewStatus = new ReviewStatus(1);

const fileName1: string = "獻給一切生靈-封面";
let frontCoverFileStatus = new UploadFileStatus(
    reviewStatus,
    fileName1
);
frontCoverFileStatus.pageInfos = [
    new UploadFilePageInfo(
        frontCoverFileStatus,
        "",
        frontCoverJpeg,
        210,
        297
    )
];

const fileName2: string = "獻給一切生靈-內頁";
let innerPagesFileStatus = new UploadFileStatus(
    reviewStatus,
    fileName2
)
innerPagesFileStatus.pageInfos = [
    page1Jpeg,
    page2Jpeg,
    page3Jpeg,
    page4Jpeg,
    page5Jpeg,
    page6Jpeg
].map((jpegSource) => new UploadFilePageInfo(
    innerPagesFileStatus,
    "",
    jpegSource,
    210,
    297
));

const uploadFileStatuses1 = [
    frontCoverFileStatus,
    innerPagesFileStatus,
]



reviewStatus.numberOfModels = 1;
// reviewStatus1.modelIds = ["test-review-id-01", "test-review-id-02", "test-review-id-03"];
reviewStatus.numberOfFiles = 2;
reviewStatus.uploadFileStatuses = uploadFileStatuses1;
reviewStatus.progress = "REGISTERED";

const reviewItem = new ReviewItem(
    reviewStatus,
    'reviewIdwedwewqe',
    book
);

const reviewModel: ReviewModel = reviewItem.models[0];

const frontCover: FramedPage = reviewModel.framedPages[0];
frontCover.sourceFileIndex = 0;
frontCover.sourcePageNumber = 0;
frontCover.positionX = -20;
frontCover.positionY = 10;
frontCover.rotationDegree = 30;
for (let i=1; i<=book.numberOfPages; i++) {
    reviewModel.framedPages[i].sourceFileIndex = 1;
    reviewModel.framedPages[i].sourcePageNumber = (i+5) % 6;
}

export {
    reviewItem,
    uploadFileStatuses1,
    reviewRegistrationInfo
}