import React from 'react';
import 'reflect-metadata';
import { reviewItem } from './testObjects1';
import WorkingStage from './working-stage/WorkingStage';

export const App = () => {
  // const [m, setMessage] = useState<string>('');
  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);
  return <WorkingStage initialReviewItem={reviewItem}/>

};

export default App;

