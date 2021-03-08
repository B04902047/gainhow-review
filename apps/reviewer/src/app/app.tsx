import React, { useEffect, useState } from 'react';
import { ImportedFile } from '@gainhow-review/ui';
import { UploadFileStatus } from '@gainhow-review/data'
import testimage1 from '../../../../apps/reviewer/src/assets/testImages/1.jpg'
import testimage2 from '../../../../apps/reviewer/src/assets/testImages/2.jpg'
import { ExportingPage } from '@gainhow-review/ui';
import { FramedPage } from '@gainhow-review/data';
import { page1_1 } from './testObjects1';
import {ImportList} from '@gainhow-review/ui';

export const App = () => {
  const [m, setMessage] = useState<string>('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  let testFile = new UploadFileStatus(
    'testImage1',
    '1',
   'GENERATING_PRINTABLE_PAGES',
    2,
    '',
    [testimage1,testimage2],
    []
  );
  return (
    <>
      <ExportingPage
        page={page1_1}
        isSelected
      />
      <div>
        <ImportedFile
          file={testFile}
          selectPage={()=>{}}
          isSelected={()=>{return false}}
        />
      </div>
    </>
  );
  
};

export default App;