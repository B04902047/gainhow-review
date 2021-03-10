
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
console.log(props.framePage.getFrame());
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

  //==============================================
  const konvaOrangilImageStyle: CSSProperties = {
    width: `calc(${frameWidthtInPx} * ${viewPercentage/100})`,
    height: `calc(${frameHeightInPx} * ${viewPercentage/100})`,
    position: 'absolute',
                top: 200,
                left: 300,
                opacity:0.3
    
  } // 問題： 要用absolute 而且沒有overflow效果
    //  參閱https://konvajs.org/docs/sandbox/Editable_Text.html

  let konvaStage: React.ReactElement = (
<Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <FrameLine
            frame={props.framePage.getFrame()}
            positionX={framePositionX}
            positionY={framePositionY}
            frameViewWidth={frameWidthtInPx}
            frameViewHeight={frameHeightInPx}
            
            />
            <Portal>
              <img 
              style={konvaOrangilImageStyle}
              src={imageAddress}
              />
            </Portal>
          
          
        </Layer>
      </Stage>

  );

  //==============================================
  return (
    <div style={style}>

<div style={CanvansStyle}>
      {
(true)? 
<>
    <img 
              style={orangilImageStyle}
              src={imageAddress}
              />
    <div style={cutLineStyle}></div>
</>
: konvaStage

      }
              
           
     
      </div>
    </div>
  );
};


export default Canvans;
