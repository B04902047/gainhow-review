import React, { CSSProperties, useEffect, useState } from 'react';
import { ExportingModel, ExportList, ModelInfo } from '@gainhow-review/ui';
import { UploadFileStatus } from '@gainhow-review/data'
import { ExportingPage } from '@gainhow-review/ui';
import { FramedPage } from '@gainhow-review/data';
import { page1_1, reviewItem, reviewModel1, singleSheet1, uploadFileStatuses1 } from './testObjects1';
import { uploadFileStatus2 } from "./testObjects1"
import {ImportList} from '@gainhow-review/ui';

export const App = () => {
  // const [m, setMessage] = useState<string>('');
  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);
  let [importListIsHidden, setImportListIsHidden] = useState<boolean>(false);
  let importListStyle: CSSProperties = {
    display: "inline-block",
    width: (importListIsHidden)? 40: 240,
    height: "calc(100vh - 175px)",
  }
  const [modelInfoIsHidden, setModelInfoIsHidden] = useState<boolean>(false);
  let modelInfoStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    width: (modelInfoIsHidden)? 40: 300,
    height: "calc(100vh - 175px)"
  };
  let exportListStyle: CSSProperties = {
    width: `calc(100vw - 300px)`,
    height: 144,
  }
  return (
    <div>
      <div>
        <ImportList
          style={importListStyle}
          files={uploadFileStatuses1}
          selectPage={()=>{}}
          isSelected={()=>{return false}}
          isHidden={importListIsHidden}
          onToggle={() => setImportListIsHidden(!importListIsHidden)}
        />
        
        <ModelInfo
          product={singleSheet1}
          isHidden={modelInfoIsHidden}
          onToggle={() => setModelInfoIsHidden(!modelInfoIsHidden)}
          style={modelInfoStyle}
        />
      </div>
      <ExportList
        style={exportListStyle}
        reviewItem={reviewItem}
        selectedModelIndex={1}
        selectedPageIndex="背面"
      />
    </div>
  );
  
};

export default App;