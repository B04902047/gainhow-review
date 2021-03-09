import React, { CSSProperties, useState } from 'react';
import './ImportList.module.css';
import {UploadFileStatus} from '@gainhow-review/data'
import ImportedFile from './imported-file/ImportedFile';
import searchBarIcon from '../Icon/SearchBarIcon.svg';
import FoldIcon from '../Icon/DoubleLeftIcon.svg';
import UnfoldIcon from '../Icon/DoubleRightIcon.svg';
/* eslint-disable-next-line */
export interface ImportListProps {
  files: Array<UploadFileStatus>;
  selectPage(fileIndex : string, pageIndex : string) : void;
  isSelected(fileIndex : string, pageIndex : string) : boolean;
  style: CSSProperties;
}

export function ImportList(props: ImportListProps) {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [isOpened, setisOpen] = useState<boolean>(true);
  function searchBarInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchBarValue(event.target.value);
  }
  let foldIcon = (isOpened)? FoldIcon: UnfoldIcon ;
  const style: CSSProperties = {
    background: '#F7F7F7 0% 0% no-repeat padding-box',
    border: '2px solid #E4E4E4'
  }
  const toggleDivStyle: CSSProperties = {
    borderBottom:'2px solid #E4E4E4',
    height: '23px',
    display: 'flex',
  }
  const toggleIconStyle: CSSProperties = {
    padding: '6px',
  }
  const importListStyle: CSSProperties = {
    width: '240px',
    height: 'calc(100vh - 175px)',
    margin: '0px',
    padding: '0px 17px',
    
    
  }
  
  const titleDivStyle: CSSProperties = {
    padding: '21px 0px 10px 0px',
    borderBottom:'2px solid #E4E4E4'
  }
  const searchBarDivStyle: CSSProperties = {
    margin: '20px 0px 0px 0px',
    width: '200px',
    height: '30px',
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    border: '1px solid #CCCCCC',
    borderRadius: '2px',
    padding: '0px',
    display: 'flex',
    alignItems: 'center'
  }
  const searchBarInputStyle: CSSProperties = {
    border: 'none',
    outline: 'none',
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    margin: '0px 0px 0px 10px',
    padding: '0px',
    width: '162px'
  }
  const fileListStyle: CSSProperties = {
    margin:'17px 0px 0px 0px',
    height: 'calc(100vh - 175px - 55px)',
    overflow: 'auto'
  }

  let files: React.ReactElement[] = props.files.filter((file) => {
    if (searchBarValue === '' || file.fileName.includes(searchBarValue)) return true;
    else return false;
  }).map((file, fileIndex) => {
    return (
      <ImportedFile
        key={fileIndex}
        fileStatus={file}
        selectPage={(pageIndex : string) => { props.selectPage(fileIndex.toString(),pageIndex); }}
        isSelected={(pageIndex : string) => { return props.isSelected(fileIndex.toString(),pageIndex); }}
      />
    );
  });
  
  return (
    <div style={style}>
      <div style={toggleDivStyle}>
      <img src={foldIcon} style={toggleIconStyle}/>
      </div>
      <div style={importListStyle}>
        
        <div style={titleDivStyle}>
          <span>輸入檔案</span>
        </div>
        <div style={searchBarDivStyle}>
          <input 
            style={searchBarInputStyle} 
            value={searchBarValue} 
            onChange={(event) => { searchBarInputChangeHandler(event); }}
          />
          <img src={searchBarIcon}/>
        </div>
        <div style={fileListStyle}> 
          {files}
        </div>
    </div>
   </div>
    );

};

export default ImportList;
