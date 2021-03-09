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
  let middleAreaHeight: string = "calc(100vh - 182px)";
  let importListStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    width: (importListIsHidden)? 40: 240,
    height: middleAreaHeight,
  }
  const [modelInfoIsHidden, setModelInfoIsHidden] = useState<boolean>(false);
  let modelInfoStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    width: (modelInfoIsHidden)? 40: 300,
    height: middleAreaHeight
  };
  let workSpaceStyle: CSSProperties = {
    display: "inline-block",
    height: middleAreaHeight,
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 8px)`
  }
  let exportListStyle: CSSProperties = {
    width: `calc(100vw - 300px - 2px)`,
    height: 160,
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
        <div style={workSpaceStyle}>
        </div>
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
      <div>
      </div>
    </div>
  );
  
};

export default App;