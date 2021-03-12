
import { FramedPage } from '@gainhow-review/data';
import { Canvans } from '../canvans/Canvans';
import React, { CSSProperties, useState } from 'react';
import SideToolBar from '../side-tool-bar/SideToolBar';

  import './WorkSpace.module.css';
  

/* eslint-disable-next-line */
export interface WorkSpaceProps {
  style: CSSProperties;
  framedPage: FramedPage;
}

export function WorkSpace(props: WorkSpaceProps) {

  const initialViewPercentage: number = 100;
  const [viewPercentage, setViewPercentage] = useState<number>(initialViewPercentage);

  let leftToolBarStyle: CSSProperties = {
    display: "inline-block",
    width: '50px',
    height: props.style.height,
    verticalAlign: "top",
  };

  let canvasStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    height: props.style.height,
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(${props.style.width} - ${leftToolBarStyle.width} - 4px)`
  };

  return (
    <div style={props.style}>
      <SideToolBar
        style={leftToolBarStyle}
        zoom={(ratio) => setViewPercentage(Math.pow(initialViewPercentage, ratio / 100))}
      />
      <Canvans
        style={canvasStyle}
        framePage={props.framedPage}
        viewPercentage={viewPercentage}
      />
    </div>
  );
};

export default WorkSpace;
