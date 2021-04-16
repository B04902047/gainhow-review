
import React, { useState } from 'react';





  import './DrogMiddleLine.module.css';
  

/* eslint-disable-next-line */
export interface DrogMiddleLineProps {
  height?: number,
  width?: number,
}



export function DrogMiddleLine(props: DrogMiddleLineProps) {
  let [isDraggedOver, setIsDraggedOver] = useState(false);
    return (
        <div
          className='notSortable'
            style={{
                display: "inline-block",
                width: props.width || 5,
                height: (props.height|| 125),
               // backgroundColor: (isDraggedOver)? '#4ba3ff77' : 'inherit',
                borderRadius: '1px',
               // boxShadow: (isDraggedOver)? '0 0 1px 1px #4ba3ff77' : 'none'
            }}
            onDragEnter={() => setIsDraggedOver(true)}
            onDragLeave={() => setIsDraggedOver(false)}
        />
    );
};


export default DrogMiddleLine;
