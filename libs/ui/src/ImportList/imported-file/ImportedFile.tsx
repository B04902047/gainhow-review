
import React, { CSSProperties, useState } from 'react';

import {ImportedPage} from '../imported-page/ImportedPage'

import {UploadFileStatus} from '@gainhow-review/data'
import openIcon from '../../Icon/CaretDownIcon.svg'
import closeIcon from '../../Icon/CaretRightIcon.svg'

import './ImportedFile.module.css';
import e from 'express';
  

/* eslint-disable-next-line */
export interface ImportedFileProps {
  fileStatus: UploadFileStatus
  selectPage(index: string): void;
  isSelected(index: string): boolean;
}



export function ImportedFile(props: ImportedFileProps) {
  const [isOpen, setOpen] = useState<boolean>(true)

  function onclick():void {
    if(isOpen) { setOpen(false); }
    else { setOpen(true); }
  }
  let toggleIcon = (isOpen)? openIcon : closeIcon;

  let pages :React.ReactElement[] = props.fileStatus.pages.map((page,index) => {
    let style : CSSProperties = {
      margin:'0px 0px 10px 0px',
    }
    return (
      <div style={style}>
      <ImportedPage
        key={index}
        page={page}
        isSelected={props.isSelected(index.toString())}
        onClick={() => { props.selectPage(index.toString()) }}
      />
      </div>
    );
  });
  let style: CSSProperties = {
    userSelect: 'none',
    width: '210px'
  }

  let toggleIconStyle: CSSProperties = {
    margin:'0px'
  }
  let textStyle: CSSProperties = {
    margin:'0px 0px 10px 0px',
    wordBreak: 'break-all',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'

  }
  let pageStyle:CSSProperties = {
    margin:'0px 0px 0px 18px',
    display:(isOpen)? 'block' : 'none'
  }
  return (
    <div style={style}>
      <div onClick={onclick} style={textStyle} title={props.fileStatus.fileName}>
        <img src={toggleIcon} style={toggleIconStyle}/>
        <span >{props.fileStatus.fileName}</span>
      </div>
      <div style={pageStyle}>
        {pages}
      </div>
      
    </div>
  );
};


export default ImportedFile;
