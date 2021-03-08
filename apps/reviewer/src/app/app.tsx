import React, { useEffect, useState } from 'react';
import {ImportList} from '@gainhow-review/ui';

export const App = () => {
  const [m, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <div>
      <ImportList/>
    </div>
  );
};

export default App;
