
import axios from 'axios';
import { serialize } from 'class-transformer';
import React, { useState } from 'react';
import { reviewRegistrationInfo } from '../testObjects1'
import { ReviewReception } from '@gainhow-review/features'





  import './ApiTester.module.css';
  

/* eslint-disable-next-line */
export interface ApiTesterProps {
}



export function ApiTester(props: ApiTesterProps) {
  let [reviewId, setReviewId] = useState<string>("");
  let [error, setError] = useState<string>("");
  return (
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
  );
};


export default ApiTester;
