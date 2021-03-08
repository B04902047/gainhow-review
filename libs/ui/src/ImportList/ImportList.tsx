import React, { CSSProperties, useState } from 'react';
import './ImportList.module.css';
import {UploadFileStatus} from '@gainhow-review/data'
import ImportedFile from './imported-file/ImportedFile';
import searchBarIcon from '../Icon/SearchBarIcon.svg';
/* eslint-disable-next-line */
export interface ImportListProps {
  files: Array<UploadFileStatus>
  selectPage(fileIndex : string, pageIndex : string) : void
  isSelected(fileIndex : string, pageIndex : string) : boolean
}

export { ImportedFile };

export function ImportList(props: ImportListProps) {
  const [searchBarValue,setSearchBarValue] = useState('');

  function searchBarInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchBarValue(event.target.value);
  }
  const style: CSSProperties = {
    width: '240px',
    height: 'calc(100vh - 175px)',
    background: '#F7F7F7 0% 0% no-repeat padding-box',
    margin: '0px',
    padding: '0px'
  }
  const searchBarDivStyle: CSSProperties = {
    margin: '0px 0px 0px 8px',
    width: '200px',
    height: '30px',
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    border: '1px solid #CCCCCC',
    borderRadius: '2px',
    padding: '0px',
    display: 'flex',
    alignItems: 'center'
  }
  const searchBarInputStylr: CSSProperties = {
    border: 'none',
    outline: 'none',
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    margin: '0px 0px 0px 10px',
    padding: '0px',
    width: '162px'
  }
  const fileListStyle: CSSProperties = {
    margin:'17px 0px 0px 0px',
    height: 'calc(100vh - 175px - 33px)',
    overflow: 'auto'
  }

  let files: React.ReactElement[] = props.files.map((file, fileIndex) => {
    if (searchBarValue === '' || file.fileName.includes(searchBarValue)) {
      return (
        <ImportedFile
        key={fileIndex}
        fileStatus={file}
        selectPage={(pageIndex : string) => { props.selectPage(fileIndex.toString(),pageIndex); }}
        isSelected={(pageIndex : string) => { return props.isSelected(fileIndex.toString(),pageIndex); }}
      />
      );
    }
    else {
      return (<></>);
    }
  });
  
  
  return (
    <div style={style}>
      <div style={searchBarDivStyle}>
        <input 
          style={searchBarInputStylr} 
          value={searchBarValue} 
          onChange={(event) => { searchBarInputChangeHandler(event); }}
        />
        <img src={searchBarIcon}/>
      </div>
      <div style={fileListStyle}> 
        {files}
      </div>
   </div>
    );
    
  
};


export default ImportList;
