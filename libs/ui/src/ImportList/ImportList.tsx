import React from 'react';
import testimage1 from '../../../../apps/reviewer/src/assets/testImages/1.jpg'
import testimage2 from '../../../../apps/reviewer/src/assets/testImages/2.jpg'
import './ImportList.module.css';
import {UploadFileStatus} from '@gainhow-review/data'
import ImportedFile from './imported-file/ImportedFile';
/* eslint-disable-next-line */
export interface ImportListProps {
}

export { ImportedFile };

export function ImportList(props: ImportListProps) {
  let testFile :UploadFileStatus = new UploadFileStatus(
    'testImage1',
    '1',
   'GENERATING_PRINTABLE_PAGES',
    2,
    '',
    [testimage1,testimage2],
    []
  );
  return (
    
    <ImportedFile
      file={testFile}
      selectPage={()=>{}}
      isSelected={()=>{return false}}
    />
    
    );
    
  
};


export default ImportList;
