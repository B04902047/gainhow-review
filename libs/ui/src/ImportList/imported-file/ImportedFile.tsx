
import React, { useState } from 'react';

import {ImportedPage} from '../imported-page/ImportedPage'

import {UploadFileStatus} from '@gainhow-review/data'
import openIcon from '../../../../../apps/reviewer/src/assets/icons/svg/CaretDownIcon.svg'
import closeIcon from '../../../../../apps/reviewer/src/assets/icons/svg/CaretRightIcon.svg'

import './ImportedFile.module.css';
import e from 'express';
  

/* eslint-disable-next-line */
export interface ImportedFileProps {
  fileStatus: UploadFileStatus
  selectPage(index: string): void;
  isSelected(index: string): boolean;
}



export function ImportedFile(props: ImportedFileProps) {
  const [isOpen, setOpen] = useState(true)

  function onclick():void {
    if(isOpen) { setOpen(false); }
    else { setOpen(true); }
  }
  let toggleIcon = (isOpen)? openIcon : closeIcon;

  let pages :React.ReactElement[] = props.fileStatus.previewPagesAddress.map((pageAddress,index) => {
    return (
      <div>
      <ImportedPage
        key={index}
        pageAddress={pageAddress}
        isSelected={props.isSelected(index.toString())}
        onClick={() => { props.selectPage(index.toString()) }}
      />
      </div>
    );
  })
  return (
    <div>
      <span onClick={onclick}>
        <img src={toggleIcon}/>{props.fileStatus.fileName}
        </span>
        <div>
          {pages}
        </div>
      
    </div>
  );
};


export default ImportedFile;
