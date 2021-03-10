
import React, { CSSProperties, useEffect } from 'react';

import { Frame, Line } from '@gainhow-review/data'  

import {Layer, Line as KonvaLine, Stage, Group} from 'react-konva';



  import './FrameLine.module.css';
  

/* eslint-disable-next-line */
export interface FrameLineProps {
  frame: Frame,
  positionX: string,
  positionY: string,
  frameViewWidth: string,
  frameViewHeight: string,
}



export function FrameLine(props: FrameLineProps) {

  
  let cutLines: React.ReactElement[] = props.frame.cutLines.map((cutLine: Line, index:number) => {
    const points = [
      100,100,3000,3000
      // cutLine.startX,
      // cutLine.startY,
      // cutLine.endX,
      // cutLine.endY
    ]
    const color = '#E2007F'
    const width = 2
    
      return(
        <KonvaLine
          key={index}
          points={points}
          stroke={color}
          strokeWidth={width}
        />

      );

  });
  function drowLines(): void {
    
    let foldLines: Line[] = props.frame.foldLines;
    let safeAreaLines: Line[] = props.frame.safeAreaLines;
    
    

  }


  const points = [
    100,100,3000,3000
    // cutLine.startX,
    // cutLine.startY,
    // cutLine.endX,
    // cutLine.endY
  ]
  const color = '#E2007F'
  const width = 2
  
  return (
    <>
        {cutLines}
      </>
     
  );
};


export default FrameLine;
