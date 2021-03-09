import React, { CSSProperties, ReactChildren, useEffect, useState } from 'react';
import { ExportingModel, ExportList, ModelInfo } from '@gainhow-review/ui';

import { page1_1, reviewItem, reviewModel1, singleSheet1, uploadFileStatuses1 } from './testObjects1';
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
    verticalAlign: "top",
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 12px)`
  }
  let exportListStyle: CSSProperties = {
    display: 'inline-block',
    verticalAlign: 'top',
    width: `calc(100vw - 300px - 6px)`,
    height: 160,
  };
  let downRightAreaStyle: CSSProperties = {
    display: 'inline-block',
    width: 300,
    height: 180,
    verticalAlign: 'top',
    border: "solid 2px #E4E4E4",
    borderLeft: "none",
    backgroundColor: "#F7F7F7"
  };
  let nextStepButtonStyle: CSSProperties = {
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 58
  };
  let previousStepButtonStyle: CSSProperties = {
    marginLeft: 58
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
      <div style={downRightAreaStyle}>
        <Button
          style={nextStepButtonStyle}
          isPrimary
        >
          預覽列印
        </Button>
        <Button style={previousStepButtonStyle}>
          下一步
        </Button>
      </div>
    </div>
  );
  
};

export default App;


interface ButtonProps {
  children: string;
  isPrimary?: boolean;
  style?: CSSProperties;
}
function Button(props: ButtonProps): JSX.Element {
  const blue: string = '#1581ff';
  let style: CSSProperties = {
    backgroundColor: (props.isPrimary)? blue: 'none',
    border: `solid 2px ${blue}`,
    width: 184,
    height: 40,
    borderRadius: 20,
    fontSize: 18,
    color: (props.isPrimary)? 'white': blue,
    ...props.style
  }
  return (
    <button
      style={style}
    >
      {props.children}
    </button>
  )
}