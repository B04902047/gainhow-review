
import React, { CSSProperties } from 'react';
import './ImportedPage.module.css';
  

/* eslint-disable-next-line */
export interface ImportedPageProps {
  pageAddress : string;
  isSelected : boolean;
  onClick():void;
}



export function ImportedPage(props: ImportedPageProps) {
let style : CSSProperties = {
  border: (props.isSelected)? "3px solid #1581FF" : 'none',
  width: '158px',
  height: '96px',


}
  return (
    <img 
      style={style} 
      src={props.pageAddress} 
      onClick={props.onClick}
    />
      
      
      
    
  );
};


export default ImportedPage;
