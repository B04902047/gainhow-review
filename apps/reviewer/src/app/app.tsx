import React from 'react';
import 'reflect-metadata';
import ApiTester from './api-tester/ApiTester';
import { reviewItem } from './testObjects1';
import WorkingStage from './working-stage/WorkingStage';

export const App = () => {
  return <ApiTester/>;
  // return <WorkingStage initialReviewItem={reviewItem}/>

};

export default App;

