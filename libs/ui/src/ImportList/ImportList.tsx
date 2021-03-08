
import React from 'react';

import testimage from 'testImage/1/1.jpg'


  import './ImportList.module.css';
 
  import ImportedPage from './imported-page/ImportedPage';
/* eslint-disable-next-line */
export interface ImportListProps {
}



export function ImportList(props: ImportListProps) {
  return (
    <div>
    < ImportedPage 
      pageAddress={testimage}
      isSelected={true}
      onClick = {()=>{}}
    />
    
    </div>
    );
    
  
};


export default ImportList;
