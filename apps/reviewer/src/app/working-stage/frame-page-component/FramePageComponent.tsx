
import { FramedPage, UploadFilePageInfo } from '@gainhow-review/data';
import { Mark } from 'libs/data/src/lib/Frame/Frame';
import React, { CSSProperties } from 'react';
import { FrameLine } from '../frame-line/FrameLine'; 




  import './FramePageComponent.module.css';
  

/* eslint-disable-next-line */
export interface FramePageComponentProps {
  mmToPxScale: string;
  framePage: FramedPage;
}



export function FramePageComponent(props: FramePageComponentProps) {
  
  let frame = props.framePage.getFrame();
  let shapeArea:string = frame.shape;
  let bleedingArea:string = frame.bleedingArea;

  let sourcePageInfo: UploadFilePageInfo = props.framePage.getSourcePageInfo();
  let imageScale = props.mmToPxScale;
  let imageAddress: string = sourcePageInfo.jpegAddress;
  let imageWidthInPx: string = `calc(${imageScale} * ${sourcePageInfo.widthInMm})`;
  let imageHeightInPx: string = `calc(${imageScale} * ${sourcePageInfo.heightInMm})`;
  let imagePostionXInPx: string = `calc(${imageScale} * calc(${props.framePage.positionX} ))`;
  let imagePostionYInPx: string = `calc(${imageScale} * calc(${props.framePage.positionY}))`;

  const imageStyle: CSSProperties = {
    width: `calc(${imageWidthInPx})`,
    height: `calc(${imageHeightInPx})`,
    top: `${imagePostionYInPx}`,
    left: `${imagePostionXInPx}`,
    transform: `
      rotate(${props.framePage.rotationDegree}deg) 
      scale(${props.framePage.scaleX}, ${props.framePage.scaleY})`,
    position: 'absolute'
  }

  const originalImageStyle: CSSProperties = {
    ...imageStyle,
    opacity: 0.3
    
  };
  const clipedImageStyle: CSSProperties = {
    ...imageStyle,
    opacity: 1
  }
  

  const cutLineBorderWidth: number = 2;
  const cutLineZIndex: number = 20;
  const bleedingAreaBorderWidth: number = 1;
  const bleedingAreaZIndex: number = 10;
  const marksZIndex: number = 30;

  let marks: React.ReactElement[] = frame.marks.map((mark: Mark,index)=>{
    let svgDataUrl: string = `data:image/svg+xml;utf8,${(mark.svgString).trim()}` ; 
    let style: CSSProperties = {
      position: 'absolute',
      left: `${-mark.positionX}%`,
      top: `${-mark.positionY}%`,
      width: `calc(100% + calc(${mark.positionX*2}%))`,
      height: `calc(100% + calc(${mark.positionY*2}%))`,
      zIndex: marksZIndex
    }
    return(
      <img 
        key={index}
        src={svgDataUrl} 
        style={style}
      />
    );


  });
  return (
    <>
    <FrameLine
      borderWidth={cutLineBorderWidth}
      clipPath={shapeArea} 
      borderColor={'#E2007F'}
      zIndex={cutLineZIndex}
    >
        <img src={imageAddress} style={clipedImageStyle}></img>
    </FrameLine>
    <FrameLine
      borderWidth={bleedingAreaBorderWidth}
      clipPath={bleedingArea} 
      borderColor={'#333333'}
      zIndex={bleedingAreaZIndex}
    >
        <img src={imageAddress} style={originalImageStyle}></img>
    </FrameLine>
    {marks}
    </>
  );
};


export default FramePageComponent;
