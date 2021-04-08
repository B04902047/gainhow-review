import React from 'react';
import 'reflect-metadata';
import ApiTester from './api-tester/ApiTester';

import { ExportList } from './book-reviewer/ExportList'
import { reviewItem as singleSheetReviewItem } from './testObjects1';
import { reviewItem as bookReviewItem } from './testObjects2';
import WorkingStage from './working-stage/WorkingStage';
import { BookReviewer, ExportOverview } from './book-reviewer/BookReviewer';

// import * as webpack from 'webpack';
// const plugins = []
// plugins.push(new webpack.IgnorePlugin(/log4js/))

// let log = log4js.getLogger();


export const App = () => {
  // return <ApiTester/>;
  return <BookReviewer initialReviewItem={bookReviewItem}/>;

  // return <WorkingStage initialReviewItem={singleSheetReviewItem}/>
};

export default App;

