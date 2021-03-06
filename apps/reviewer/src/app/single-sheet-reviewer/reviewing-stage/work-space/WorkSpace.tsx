
import { FramedPage } from '@gainhow-review/data';
import { Canvas } from '../canvans/Canvans';
import React, { CSSProperties, useState } from 'react';
import SideToolBar from '../side-tool-bar/SideToolBar';

  import './WorkSpace.module.css';
import { SourceImageToolBar } from '@gainhow-review/ui';
  

/* eslint-disable-next-line */
export interface WorkSpaceProps {
  style: CSSProperties;
  framedPage: FramedPage;
  onDeleteSorceFileImage(): void;
}

export function WorkSpace(props: WorkSpaceProps) {

  const initialViewPercentage: number = 100;
  const [viewPercentage, setViewPercentage] = useState<number>(initialViewPercentage);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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
    width: `calc(${props.style.width} - ${leftToolBarStyle.width} - 5px)`
  };
  console.log(props.style.width, leftToolBarStyle.width, canvasStyle.width);

  return (
    <div style={props.style}>
      <SideToolBar
        style={leftToolBarStyle}
        zoom={(ratio) => setViewPercentage(Math.pow(initialViewPercentage, ratio))}
        onRedo={()=>{}}
        onUndo={()=>{}}
      />
      <Canvas
        style={canvasStyle}
        framePage={props.framedPage}
        viewPercentage={viewPercentage}
        isEditing={isEditing}
        setIsEditing={(isEditing: boolean)=>setIsEditing(isEditing)}
      />
      {(isEditing) && 
                <SourceImageToolBar 
                    onDelete={()=>{
                        props.onDeleteSorceFileImage();
                        setIsEditing(false);
                    }}
                />}
    </div>
  );
};

export default WorkSpace;
