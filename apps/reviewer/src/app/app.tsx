import React, { useEffect, useState } from 'react';
import { ExportingModel, ExportList, ImportedFile, ModelInfo } from '@gainhow-review/ui';
import { UploadFileStatus } from '@gainhow-review/data'
import { ExportingPage } from '@gainhow-review/ui';
import { FramedPage } from '@gainhow-review/data';
import { page1_1, reviewItem, reviewModel1, singleSheet1 } from './testObjects1';
import { uploadFileStatus2 } from "./testObjects1"
import {ImportList} from '@gainhow-review/ui';

export const App = () => {
  const [m, setMessage] = useState<string>('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <>
      <div>
        <ImportList
          files={[uploadFileStatus2,uploadFileStatus2,uploadFileStatus2]}
          selectPage={()=>{}}
          isSelected={()=>{return false}}
        />
        <ModelInfo
          product={singleSheet1}
          isHidden={false}
        />
      </div>
      <ExportList
        reviewItem={reviewItem}
        selectedModelIndex={1}
        selectedPageIndex="背面"
      />
    </>
  );
  
};

export default App;