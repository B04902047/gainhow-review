
import { FramedPage, UploadFilePageInfo } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';





  import './FramePageComponent.module.css';
  

/* eslint-disable-next-line */
export interface FramePageComponentProps {
  mmToPxScale: string;
  framePage: FramedPage;
}



export function FramePageComponent(props: FramePageComponentProps) {
  
  let frame = props.framePage.getFrame();
  let shapeArea:string = frame.shape;
  let sourcePageInfo: UploadFilePageInfo = props.framePage.getSourcePageInfo();
  let imageScale = props.mmToPxScale;

  let imageAddress: string = sourcePageInfo.jpegAddress;
  let imageWidthInPx: string = `calc(${imageScale} * ${sourcePageInfo.widthInMm})`;
  let imageHeightInPx: string = `calc(${imageScale} * ${sourcePageInfo.heightInMm})`;
  let imagePostionXInPx: string = `calc(${imageScale} * calc(${props.framePage.positionX} ))`;
  let imagePostionYInPx: string = `calc(${imageScale} * calc(${props.framePage.positionY}))`;
  const originalImageStyle: CSSProperties = {
    width: `calc(${imageWidthInPx})`,
    height: `calc(${imageHeightInPx})`,
    top: `${imagePostionYInPx}`,
    left: `${imagePostionXInPx}`,
    transform: `
      rotate(${props.framePage.rotationDegree}deg) 
      scale(${props.framePage.scaleX}, ${props.framePage.scaleY})`,
    position: 'absolute'
  };
  const cutLineBorderWidth: number = 3;
  const shapeAreaStyle: CSSProperties = {
    border: `${cutLineBorderWidth}px solid #E2007F`,
    height: `calc(100% - ${cutLineBorderWidth * 2}px)`,
    width: `calc(100% - ${cutLineBorderWidth * 2}px)`,
    overflow: 'hidden',
    zIndex: 20
  }
  return (
    <div style={shapeAreaStyle}>
      
    </div>
  );
};


export default FramePageComponent;
