import React, { useState } from 'react';
import 'reflect-metadata';
import ApiTester from './api-tester/ApiTester';

import { reviewItem as singleSheetReviewItem } from './testObjects1';
import { reviewItem as bookReviewItem } from './testObjects2';
import { BookReviewingStage } from './book-reviewer/reviewing-stage/BookReviewingStage';
import {SingleSheetReviewer} from 'apps/reviewer/src/app/single-sheet-reviewer/SingleSheetReviewer'
// import * as webpack from 'webpack';
// const plugins = []
// plugins.push(new webpack.IgnorePlugin(/log4js/))

// let log = log4js.getLogger();


export const App = () => {
  // return <ApiTester/>;
 return <SingleSheetReviewer reviewItem={singleSheetReviewItem} saveReviewItem={()=>{}}/>
  
  return (
      <BookReviewingStage
        initialReviewItem={bookReviewItem}
        saveReviewItem={(async () => {})}
        onFinished={() => {}}
      />
  );

};

export default App;


