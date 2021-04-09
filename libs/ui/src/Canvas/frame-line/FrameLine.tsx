
import React, { Children, CSSProperties, useEffect } from 'react';
import './FrameLine.module.css';
  
/* eslint-disable-next-line */
export interface FrameLineProps {
 children: React.ReactNode;
 borderWidth: number;
 clipPath: string,
 borderColor: string;
 zIndex: number;
}


export function FrameLine(props: FrameLineProps) {

  const borderStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    clipPath: props.clipPath,
    background: props.borderColor,
    position:'absolute',
    zIndex: props.zIndex
  };
  
  const innerStyle: CSSProperties = {
    top: `${props.borderWidth}px`,
    left: `${props.borderWidth}px`,
    width: `calc(100% - ${props.borderWidth * 2}px)`,
    height: `calc(100% - ${props.borderWidth * 2}px)`,
    position: 'absolute',
    background: 'white',
    clipPath: props.clipPath
  };

  return (
    <div style={borderStyle} draggable="false">
      <div style={innerStyle}>
        {props.children}
      </div>
    </div>
  );
};


export default FrameLine;
