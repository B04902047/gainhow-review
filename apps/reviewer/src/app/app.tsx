import React, { useEffect, useState } from 'react';
import { ExportingPage } from '@gainhow-review/ui';
import { FramedPage } from '@gainhow-review/data';
import { page1_1 } from './testObjects1';
import {ImportList} from '@gainhow-review/ui';

export const App = () => {
  const [m, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <ExportingPage
        page={page1_1}
        isSelected
      />
      <div>
        <ImportList/>
      </div>
    </>
  );
};

export default App;