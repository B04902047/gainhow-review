import React from 'react';
import { reviewItem } from './testObjects1';
import WorkingStage from './working-stage/WorkingStage';

export const App = () => {
  // const [m, setMessage] = useState<string>('');
  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);
  // return <WorkingStage initialReviewItem={reviewItem}/>
  return (
    <div style={{
      width: 100,
      height: 100,
      backgroundColor: 'red',
      clipPath: 'polygon(2mm 1)'
    }}>
    </div>
  )
};

export default App;

