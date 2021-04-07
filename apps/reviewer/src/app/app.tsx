import React from 'react';
import 'reflect-metadata';
import ApiTester from './api-tester/ApiTester';
import { reviewItem } from './testObjects1';
import WorkingStage from './working-stage/WorkingStage';
import * as log4js from 'log4js';

// import * as webpack from 'webpack';
// const plugins = []
// plugins.push(new webpack.IgnorePlugin(/log4js/))

// let log = log4js.getLogger();


export const App = () => {

  return (
    <WorkingStage
    initialReviewItem={reviewItem}
    />
  )
  // return <ApiTester/>;
  // return <WorkingStage initialReviewItem={reviewItem}/>

};

export default App;

