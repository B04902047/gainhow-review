
import { FramedPage } from '@gainhow-review/data';
import { Canvans } from '../canvans/Canvans';
import React, { CSSProperties } from 'react';
import SideToolBar from '../side-tool-bar/SideToolBar';

  import './WorkSpace.module.css';
  

/* eslint-disable-next-line */
export interface WorkSpaceProps {
  style: CSSProperties;
  framedPage: FramedPage;
}

export function WorkSpace(props: WorkSpaceProps) {

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
      <SideToolBar style={leftToolBarStyle}/>
      <Canvans
        style={canvasStyle}
        framePage={props.framedPage}
      />
    </div>
  );
};

export default WorkSpace;
