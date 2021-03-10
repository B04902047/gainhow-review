
import React, { CSSProperties, useState } from 'react';
import './Canvans.module.css';
import { FramedPage, Frame, UploadFilePageInfo } from '@gainhow-review/data'  
import { FrameLine } from '../frame-line/FrameLine';
import {Layer, Line as KonvaLine, Stage, Group,Image} from 'react-konva';
import Portal from './Portal';
/* eslint-disable-next-line */
export interface CanvansProps {
  framePage: FramedPage,
  style: CSSProperties
}



export function Canvans(props: CanvansProps) {

  const [viewPercentage, setViewPercentage] = useState<number>(60);
  
  let sourcePageInfo: UploadFilePageInfo = props.framePage.getSourcePageInfo();
  let imageAddress: string = sourcePageInfo.jpegAddress;
  let frame: Frame = props.framePage.getFrame();

  let frameWidthtInPx: string = calcFrameWidth();
  let frameHeightInPx: string = calcFrameheight();
  let framePositionX: string = calcFramePositionX();
  let framePositionY: string = calcFramePositionY();

  let imageScale: string  = calcImageScale();
  let imageWidthInPx: string = calcImageWidthInPx();
  let imageHeightInPx: string = calcImageHeightInPx();

  function calcFrameWidth(): string {
    let calcWidthByMaxWidth = `calc(${props.style.width})`;
    let calcWidthByMaxHeight = `calc(${frame.maxWidth} * ${props.style.height} / ${frame.maxHeight} )`
    return `min(${calcWidthByMaxWidth} , ${calcWidthByMaxHeight})`
    
  }
  function calcFrameheight(): string {
    let calcHeightByMaxHeight = `calc(${props.style.height} )`;
    let calcHeightByMaxWidth = `calc(${frame.maxHeight} * ${props.style.width} / ${frame.maxWidth} )`

    return `min(${calcHeightByMaxHeight} , ${calcHeightByMaxWidth})` 
  }
  function calcFramePositionX(): string {
    return `calc(calc(${props.style.width} - ${frameWidthtInPx}) / 2)`;
  }
  function calcFramePositionY(): string {
    return `calc(calc(${props.style.height} - ${frameHeightInPx}) / 2)`;
  }

  function calcImageScale(): string {
    return `calc(${frameWidthtInPx} / ${frame.maxWidth})`;
  }
  function calcImageWidthInPx(): string {
    return `calc(${imageScale} * ${sourcePageInfo.widthInMm})`;
  }
  function calcImageHeightInPx(): string {
    return `calc(${imageScale} * ${sourcePageInfo.heightInMm})`;
  }

  const style: CSSProperties = {
    userSelect: 'none',
    position: 'relative',
    overflow: 'hidden',
    ...props.style
  }
  const CanvansStyle: CSSProperties = {
    transform:`scale(${viewPercentage/100})`,
    width: 'inherit',
    height: 'inherit',
  }

  const orangilImageStyle: CSSProperties = {
    width: `calc(${imageWidthInPx})`,
    height: `calc(${imageHeightInPx})`,
    top: `calc(${framePositionY} + ${props.framePage.positionY}px)`,
    left: `calc(${framePositionX} + ${props.framePage.positionX}px)`,
    transform: `
      rotate(${props.framePage.rotationDegree}deg) 
      scale(${props.framePage.scaleX},${props.framePage.scaleY})`,
    position: 'absolute'
    
  } 
  const cutLineStyle: CSSProperties = {
    width: `calc(${frameWidthtInPx})`,
    height: `calc(${frameHeightInPx} )`,
    top: `calc(${framePositionY} - 2px)`,
    left: `calc(${framePositionX} - 2px)`,
    position: 'absolute',
    border: '2px solid #E2007F'
    ,
    zIndex: 100
    
  }

  const FrameLineStyle: CSSProperties = {
    width: props.style.width,
    height: props.style.height
   
    
  }

  return (
    <div style={style}>

      <div style={CanvansStyle}>
      
        <img 
              style={orangilImageStyle}
              src={imageAddress}
        />
        <div style={cutLineStyle}></div>

      </div>
    </div>
  );
};


export default Canvans;
