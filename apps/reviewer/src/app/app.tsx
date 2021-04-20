import React, { useState } from 'react';
import 'reflect-metadata';
import ApiTester from './api-tester/ApiTester';

import { reviewItem as singleSheetReviewItem } from './testObjects1';
import { reviewItem as bookReviewItem } from './testObjects2';
import { BookReviewingStage } from './book-reviewer/reviewing-stage/BookReviewingStage';
import { SourceImageToolBar } from '@gainhow-review/ui';
import {UploadArea} from '@gainhow-review/ui'
// import * as webpack from 'webpack';
// const plugins = []
// plugins.push(new webpack.IgnorePlugin(/log4js/))

// let log = log4js.getLogger();


export const App = () => {
  // return <ApiTester/>;
  //return <WorkingStage initialReviewItem={singleSheetReviewItem}/>
  // return( 
  //   <UploadArea
  //     reviewStatus={bookReviewItem.status}
  //     uploadFile={()=>{}}
  //     delectFile={()=>{}}
  //     cencelFile={()=>{}}
  //   />

  // )
  return (
      <BookReviewingStage
        initialReviewItem={bookReviewItem}
        saveReviewItem={(async () => {})}
        onFinished={() => {}}
      />
  );

};

export default App;


