import React from 'react';
import 'reflect-metadata';
import ApiTester from './api-tester/ApiTester';
import { reviewItem} from './testObjects1';
import {reviewItem as BookReviewItem} from './testObjects2';

import WorkingStage from './working-stage/WorkingStage';
import { ExportOverview } from './book-reviewer/BookReviewer';
import {ExportList} from './book-reviewer/ExportList'
// import * as webpack from 'webpack';
// const plugins = []
// plugins.push(new webpack.IgnorePlugin(/log4js/))

// let log = log4js.getLogger();


export const App = () => {
  // return <ApiTester/>;
  // return <WorkingStage initialReviewItem={reviewItem}/>
  // return <ExportOverview reviewItem={reviewItem}/>
  return <ExportList
  selectedModelIndex={0}
  selectedFrameIndex={0}
  reviewItem={BookReviewItem}
  style={{}}
  onFrameSelect={()=>{}}
  />
};

export default App;

