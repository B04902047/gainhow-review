
import axios from 'axios';
import { serialize } from 'class-transformer';
import React, { useState } from 'react';
import { reviewRegistrationInfo } from '../testObjects1'
import { ReviewReception } from '@gainhow-review/features'





  import './ApiTester.module.css';
import { ReviewStatus } from '@gainhow-review/data';
  

/* eslint-disable-next-line */
export interface ApiTesterProps {
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
        <input type="file" onChange={event => uploadFiles(event.target.files)}/>
        <div>
          reviewStatus: {reviewStatusInJson}
        </div>
      </div>
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
