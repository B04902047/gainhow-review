
import React, { CSSProperties } from 'react';
import './ImportedPage.module.css';
import {UploadFilePageInfo} from '@gainhow-review/data'

/* eslint-disable-next-line */
export interface ImportedPageProps {
  info: UploadFilePageInfo;
  isSelected: boolean;
  onClick(): void;
}

export function ImportedPage(props: ImportedPageProps) {
  const widthInPx: number = 158;
  let style: CSSProperties = {
    border: (props.isSelected)? "3px solid #1581FF" : "1px solid #707070",
    width: widthInPx,
    height: widthInPx * props.info.heightInMm / props.info.widthInMm,
    margin:  (props.isSelected)? '0px' : '2px'
  }
  return (
    <img 
      style={style} 
      src={props.info.jpegUrl} 
      onClick={props.onClick}
    />
  );
};

export default ImportedPage;
