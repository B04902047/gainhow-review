
import React, { CSSProperties } from 'react';
import './ImportedPage.module.css';
import {UploadFilePageInfo} from '@gainhow-review/data'

/* eslint-disable-next-line */
export interface ImportedPageProps {
  page: UploadFilePageInfo;
  isSelected: boolean;
  onClick(): void;

}

export function ImportedPage(props: ImportedPageProps) {
  let style: CSSProperties = {
    border: (props.isSelected)? "3px solid #1581FF" : "1px solid #707070",
    width: '158px',
    height: 158 * props.page.heightInMm / props.page.widthInMm
  }
  return (
    <img 
      style={style} 
      src={props.page.jpegAddress} 
      onClick={props.onClick}
    />
  );
};

export default ImportedPage;
