import React, { CSSProperties, useState } from 'react';
import './ImportList.module.css';
import {UploadFileStatus} from '@gainhow-review/data'
import ImportedFile from './imported-file/ImportedFile';
import searchBarIcon from '../Icon/SearchBarIcon.svg';
import DoubleLeftIcon from '../Icon/DoubleLeftIcon.svg';
import DoubleRightIcon from '../Icon/DoubleRightIcon.svg';
import FolderIcon from '../Icon/FolderIcon.svg';
/* eslint-disable-next-line */

export interface ImportListProps {
  files: Array<UploadFileStatus>;
  selectPage(fileIndex : number, pageIndex : number) : void;
  isSelected(fileIndex : number, pageIndex : number) : boolean;
  style: CSSProperties;
  isHidden: boolean;
  onToggle(): void;
}

export function ImportList(props: ImportListProps) {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  
  let toggleIcon = (props.isHidden)? DoubleRightIcon: DoubleLeftIcon;
  const style: CSSProperties = {
    background: '#F7F7F7 0% 0% no-repeat padding-box',
    border: '2px solid #E4E4E4',
    borderBottom: 'none',
    ...props.style
  };

  const headerStyle: CSSProperties = {
    borderBottom:'2px solid #E4E4E4',
    height: '23px'
  };
  const toggleIconStyle: CSSProperties = {
    padding: '6px',
    float: 'right',
    marginRight: '8px',
    userSelect: 'none'
  }
  const bodyStyle: CSSProperties = {
    margin: '0px',
    padding: '0px 15px'
  }
  
  const titleStyle: CSSProperties = {
    padding: '21px 0px 10px 0px',
    borderBottom:'2px solid #E4E4E4',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Arial'
  }
  const searchBarStyle: CSSProperties = {
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
    width: '158px'
  }
  const searchBarIconStyle: CSSProperties = {
    userSelect: 'none'
  }
  const fileListStyle: CSSProperties = {
    margin: '17px 0px 0px 0px',
    height: `calc(${props.style.height} - 160px)`,
    overflow: 'auto'
  }
  const folderIconStyle: CSSProperties = {
    width: '20px',
    padding: '16px 8px',
    userSelect: 'none'
  }
  let importedFiles: JSX.Element[] = props.files.filter((fileStatus: UploadFileStatus) => {
    if (searchBarValue === '' || fileStatus.fileName.includes(searchBarValue)) return true;
    else return false;
  }).map((fileStatus: UploadFileStatus, fileIndex: number) => {
    let fileId: string = fileStatus.uploadToken;
    return (
      <ImportedFile
        key={fileId}
        fileStatus={fileStatus}
        onPageSelect={(pageIndex : number) => { props.selectPage(fileIndex, pageIndex); }}
        isSelected={(pageIndex : number) => { return props.isSelected(fileIndex, pageIndex); }}
      />
    );
  });
  
  return (
    <div style={style}>
      <div style={headerStyle}>
        <img
          style={toggleIconStyle}
          onClick={() => props.onToggle()}
          src={toggleIcon}
        />
      </div>
      {(props.isHidden)?
        <img 
          style={folderIconStyle}
          src={FolderIcon}
          onClick={() => props.onToggle()}
        />
          :
        <div style={bodyStyle}>
          <div style={titleStyle}> 輸入檔案 </div>
          <div style={searchBarStyle}>
            <input 
              type="search"
              style={searchBarInputStyle} 
              value={searchBarValue} 
              onChange={(event) => setSearchBarValue(event.target.value)}
            />
            <img src={searchBarIcon} style={searchBarIconStyle}/>
          </div>
          <div style={fileListStyle}> 
            {importedFiles}
          </div>
        </div>
      }
    </div>
  );
};

export default ImportList;
