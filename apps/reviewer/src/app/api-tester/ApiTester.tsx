
import axios from 'axios';
import { serialize ,deserialize} from 'class-transformer';
import React, { useState } from 'react';
import { reviewRegistrationInfo } from '../testObjects1'
import { ReviewReception } from '@gainhow-review/features'



  import './ApiTester.module.css';
import { ReviewStatus,UploadFilePageInfo,UploadFileStatus } from '@gainhow-review/data';
  

/* eslint-disable-next-line */
export interface ApiTesterProps {
}
function imageUrlFromReviewStatus(uploadFileStatuses: UploadFileStatus[]): React.ReactNodeArray {
  return uploadFileStatuses.map((fileState: UploadFileStatus) => {
    return fileState.pageInfos.map((pageInfo: UploadFilePageInfo)=>{
      return (
        <img 
          key={1}
          src={'//'+pageInfo.jpegUrl} 
          style={{width:150}}
        />
        )
    });
  });
}

function LoadReviewStatusTester(props: {}) {

  let [reviewId, setReviewId] = useState<string>("");
  let [reviewStatusInJson, setReviewStatusInJson] = useState<string>("");

  let reviewStatus = reviewStatusInJson? (deserialize(ReviewStatus,reviewStatusInJson)): undefined;
  
  
  return (

    <div>
      reviewId:
        <input
          type="text"
          onChange={(event) => setReviewId(event.target.value)}
        />
        <button onClick={async () => {
          let reviewStatus: ReviewStatus
            = await new ReviewReception('/api').loadReviewStatus(reviewId);
          setReviewStatusInJson(serialize(reviewStatus));
        }}>
          load
        </button>
      reviewStatus: {reviewStatusInJson} <br/>
      
      image:<br/>
      {
        (reviewStatus)?  
          imageUrlFromReviewStatus(reviewStatus.uploadFileStatuses)
          : ''
      }
    </div>


   
  )
}

export function ApiTester(props: ApiTesterProps) {
  let [reviewId, setReviewId] = useState<string>("");
  let [error, setError] = useState<string>("");
  let [reviewStatusInJson, setReviewStatusInJson] = useState<string>("");
  return (
    <div>
      <div>
        <button
          onClick={async () => {
            try {
              let reviewId: string = await new ReviewReception('/api').register(reviewRegistrationInfo);
              setReviewId(reviewId);
            } catch (error) {
              setError(JSON.stringify(error))
            }
          }}
        >
          Register
        </button>
        <div>
          reviewId: {reviewId}
        </div>
        <div>
          error: {error}
        </div>
      </div>
      <div>
        file: <input type="file" onChange={event => uploadFiles(event.target.files)}/>
        <div>
          reviewStatus: {reviewStatusInJson}
        </div>
      </div>
      <LoadReviewStatusTester/>
    </div>
  );
  async function uploadFiles(files: FileList): Promise<void> {
    const reviewReception = new ReviewReception('/api');
    let reviewStatus: ReviewStatus;
    for (let i=0; i<files.length; i++) {
      reviewStatus = await reviewReception.uploadFile(
        reviewId,
        files[i]
      );
    }
    setReviewStatusInJson(serialize(reviewStatus));
  }
};


export default ApiTester;
