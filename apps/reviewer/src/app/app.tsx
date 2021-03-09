import React, { CSSProperties, useEffect, useState } from 'react';
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
  const [modelInfoIsHidden, hideModelInfo] = useState<boolean>(false);
  let modelInfoStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    height: "calc(100vh - 175px)",
    width: (modelInfoIsHidden)? 40: 300
  };
  let exportListStyle: CSSProperties = {
    width: `calc(100vw - 300px)`,
    height: 144,
  }
  return (
    <>
      <div>
        <div style={{display: "inline-block"}}>
          <ImportList
            files={[uploadFileStatus2,uploadFileStatus2,uploadFileStatus2]}
            selectPage={()=>{}}
            isSelected={()=>{return false}}
          />
        </div>
        <ModelInfo
          product={singleSheet1}
          isHidden={false}
          style={modelInfoStyle}
        />
      </div>
      <ExportList
        style={exportListStyle}
        reviewItem={reviewItem}
        selectedModelIndex={1}
        selectedPageIndex="背面"
      />
    </>
  );
  
};

export default App;