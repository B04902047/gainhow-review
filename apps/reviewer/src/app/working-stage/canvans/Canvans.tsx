
import React, { CSSProperties, useState } from 'react';
import './Canvans.module.css';
import { FramedPage, Frame, UploadFilePageInfo } from '@gainhow-review/data'  

/* eslint-disable-next-line */
export interface CanvansProps {
  framePage: FramedPage;
  style: CSSProperties;
  viewPercentage: number;
}

export function Canvans(props: CanvansProps) {
  
  let sourcePageInfo: UploadFilePageInfo = props.framePage.getSourcePageInfo();
  let imageAddress: string = sourcePageInfo.jpegAddress;
  let frame: Frame = props.framePage.getFrame();

  let frameWidthtInPx: string = calcFrameWidth();
  let frameHeightInPx: string = calcFrameheight();
  let framePositionX: string = `calc(calc(${props.style.width} - ${frameWidthtInPx}) / 2)`;
  let framePositionY: string = `calc(calc(${props.style.height} - ${frameHeightInPx}) / 2)`;

  let imageScale: string  = `calc(${frameWidthtInPx} / ${frame.maxWidth})`;
  let imageWidthInPx: string = `calc(${imageScale} * ${sourcePageInfo.widthInMm})`;
  let imageHeightInPx: string = `calc(${imageScale} * ${sourcePageInfo.heightInMm})`;
  let imagePostionXInPx: string = `calc(${imageScale} * calc(${props.framePage.positionX}))`;
  let imagePostionYInPx: string = `calc(${imageScale} * calc(${props.framePage.positionY}))`;

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
  
  const style: CSSProperties = {
    userSelect: 'none',
    position: 'relative',
    overflow: 'auto',
    ...props.style
  };

  const CanvansMargin: number = 10;
  const CanvansStyle: CSSProperties = {
    transform:`scale(${props.viewPercentage / 100})`,
    width: `calc(${props.style.width})`,
    height: `calc(${props.style.height})`,
    margin: `calc(${CanvansMargin * props.viewPercentage/100 *2 }px)`,
    top: `calc(${CanvansMargin * props.viewPercentage/100 *2 }px)`,
    left: `calc(${CanvansMargin * props.viewPercentage/100 *2 }px)`
  };

  const orangilImageStyle: CSSProperties = {
    width: `calc(${imageWidthInPx})`,
    height: `calc(${imageHeightInPx})`,
    top: `${imagePostionYInPx}`,
    left: `${imagePostionXInPx}`,
    transform: `
      rotate(${props.framePage.rotationDegree}deg) 
      scale(${props.framePage.scaleX}, ${props.framePage.scaleY})`,
    position: 'absolute'
  };

  const cutLineBorderWidth: number = 2;

  const cutLineStyle: CSSProperties = {
    width: `calc(${frameWidthtInPx})`,
    height: `calc(${frameHeightInPx} )`,
    top: `calc(${framePositionY} - ${cutLineBorderWidth}px)`,
    left: `calc(${framePositionX} - ${cutLineBorderWidth}px)`,
    position: 'absolute',
    border: `${cutLineBorderWidth}px solid #E2007F`,
    zIndex: 100,
    overflow: 'hidden',
    background: 'white'
  };

  const FrameLineStyle: CSSProperties = {
    width: props.style.width,
    height: props.style.height  
  };

  return (
    <div style={style}>
      <div style={CanvansStyle}>
        <div style={cutLineStyle}>
          <img 
            style={orangilImageStyle}
            src={imageAddress}
          />
        </div>
      </div>
    </div>
  );
}


export default Canvans;
