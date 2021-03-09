
import React, { CSSProperties, useState } from 'react';

import { ImportedPage } from '../imported-page/ImportedPage'

import { UploadFileStatus } from '@gainhow-review/data'
import openIcon from '../../Icon/CaretDownIcon.svg'
import closeIcon from '../../Icon/CaretRightIcon.svg'
import './ImportedFile.module.css';
  
/* eslint-disable-next-line */
export interface ImportedFileProps {
  fileStatus: UploadFileStatus
  onPageSelect(index: number): void;
  isSelected(index: number): boolean;
}

export function ImportedFile(props: ImportedFileProps) {
  const [isFolded, setIsFolded] = useState<boolean>(false)

  let toggleIcon = (isFolded)? closeIcon: openIcon;

  let pages: React.ReactElement[] = props.fileStatus.pages.map((pageInfo, index) => {
    let style: CSSProperties = {
      margin: '0px 0px 10px 0px',
    };
    return (
      <div
        key={index}
        style={style}
      >
        <ImportedPage
          info={pageInfo}
          isSelected={props.isSelected(index)}
          onClick={() => props.onPageSelect(index)}
        />
      </div>
    );
  });
  let style: CSSProperties = {
    userSelect: 'none',
    width: '210px'
  };

  let toggleIconStyle: CSSProperties = {
    margin:'0px'
  };

  let textStyle: CSSProperties = {
    margin:'0px 0px 10px 0px',
    wordBreak: 'break-all',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  let pagesStyle: CSSProperties = {
    margin:'0px 0px 0px 18px'
  };

  return (
    <div style={style}>
      <div
        style={textStyle}
        onClick={() => setIsFolded(!isFolded)}
        title={props.fileStatus.fileName}
      >
        <img
          style={toggleIconStyle}
          src={toggleIcon}
        />
        <span> {props.fileStatus.fileName}</span>
      </div>
      {!isFolded && (
        <div style={pagesStyle}>
          {pages}
        </div>
      )}
    </div>
  );
};

export default ImportedFile;
