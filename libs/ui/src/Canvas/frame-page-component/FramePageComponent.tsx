
import { FramedPage, UploadFilePageInfo } from '@gainhow-review/data';
import Frame, { Mark } from 'libs/data/src/lib/Frame/Frame';
import React, { CSSProperties } from 'react';
import { FrameLine } from '../frame-line/FrameLine'; 




  import './FramePageComponent.module.css';
  

/* eslint-disable-next-line */
export interface FramePageComponentProps {
  mmToPxScale: string;
  framePage: FramedPage;
  isEditing: boolean;
  onImageClick(e:React.MouseEvent): void;
}

export function FramePageComponent(props: FramePageComponentProps) {
  let imageScale = props.mmToPxScale;
  let frame: Frame = props.framePage.getFrame();
  const cutLineBorderWidth: number = 2;
  const cutLineZIndex: number = 20;
  const bleedingAreaBorderWidth: number = 1;
  const bleedingAreaZIndex: number = 10;
  const marksZIndex: number = 30;
  const imageTransformFrameZIndex: number = 40;
  let imageTransformFrameJSX: JSX.Element = null;
  let orangeImageJSX: JSX.Element = null;
  let cropedImageJSX: JSX.Element = null;
  let imageAddress: string;
  if (frame) {

    let sourcePageInfo: UploadFilePageInfo = props.framePage.getSourcePageInfo();

    if (sourcePageInfo) {
      imageAddress = sourcePageInfo.jpegUrl;
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
          scale(${props.framePage.scaleX}, ${props.framePage.scaleY})  
          translate(50%, 50%)
          rotate(${props.framePage.rotationDegree}deg) 
          translate(-50%, -50%)
          `,
          //先依據左上角作為原點放大
          //移動圖片中央到transformOrigin
          //旋轉
          //移動回原位
        transformOrigin: '0 0',  
        position: 'absolute'
      }
  
    const originalImageStyle: CSSProperties = {
      ...imageStyle,
      opacity: 0.5
      
    };
    const clipedImageStyle: CSSProperties = {
      ...imageStyle,
      top: `calc(${imagePostionYInPx} - ${bleedingAreaBorderWidth}px)`,
      left: `calc(${imagePostionXInPx}  - ${bleedingAreaBorderWidth}px)`,
      opacity: 1
    }
    const imageTransformFrameLineWidth: number = 6;
    const imageTransformFrameStyle: CSSProperties = {
      width: `calc(${imageWidthInPx} * ${props.framePage.scaleX} )`,
      height: `calc(${imageHeightInPx}  * ${props.framePage.scaleY} )`,
      top: `calc(${imagePostionYInPx}  - ${imageTransformFrameLineWidth}px + ${bleedingAreaBorderWidth}px )`,
      left: `calc(${imagePostionXInPx} - ${imageTransformFrameLineWidth}px + ${bleedingAreaBorderWidth}px )`,
      transform: `rotate(${props.framePage.rotationDegree}deg) `,
      transformOrigin: '50% 50%',
      border: `${imageTransformFrameLineWidth}px solid #1581FF`,
      position: 'absolute',
      zIndex: imageTransformFrameZIndex,
      cursor: 'move'
    }
  
    const imageTransformFrameIconOffset: number = -imageTransformFrameLineWidth * 2;
    const imageTransformFrameIconMiddle: string = `calc(50% + calc(${imageTransformFrameIconOffset}px))`;
    
    const imageTransformFrameIconStyle: CSSProperties = {
      width: `18px`,
      height: '18px',
      border: '1px soild #1581FF',
      background: '#1581FF',
      position: 'absolute'  ,
    }

    cropedImageJSX = (
      <img key={0}
        src={imageAddress} 
        style={clipedImageStyle}
        onClick={(e)=>props.onImageClick(e)}
      />
    );
    orangeImageJSX = (
      <img key={0} src={imageAddress} style={originalImageStyle}></img>
    );

    let imageTransformFrameIcons: React.ReactElement = (
      <div key={0}>
        <i // 左上
          style={{
            ...imageTransformFrameIconStyle,
            top: imageTransformFrameIconOffset,
            left: imageTransformFrameIconOffset,
            cursor: 'nwse-resize',
          }}
        />
        <i // 右上
          style={{
            ...imageTransformFrameIconStyle,
            top: imageTransformFrameIconOffset,
            right: imageTransformFrameIconOffset,
            cursor: 'nesw-resize',
          }}
        />
         <i // 右下
          style={{
            ...imageTransformFrameIconStyle,
            bottom: imageTransformFrameIconOffset,
            right: imageTransformFrameIconOffset,
            cursor: 'nwse-resize',
          }}
        />
        <i // 左下
          style={{
            ...imageTransformFrameIconStyle,
            bottom: imageTransformFrameIconOffset,
            left: imageTransformFrameIconOffset,
            cursor: 'nesw-resize',
          }}
        />
        <i // 上
          style={{
            ...imageTransformFrameIconStyle,
            top: imageTransformFrameIconOffset,
            left: imageTransformFrameIconMiddle,
            cursor: 'ns-resize',
          }}
        />
        <i // 下
          style={{
            ...imageTransformFrameIconStyle,
            bottom: imageTransformFrameIconOffset,
            left: imageTransformFrameIconMiddle,
            cursor: 'ns-resize',
          }}
        />
        <i // 右
          style={{
            ...imageTransformFrameIconStyle,
            top: imageTransformFrameIconMiddle,
            left: imageTransformFrameIconOffset,
            cursor: 'ew-resize',
          }}
        />
        <i // 右
          style={{
            ...imageTransformFrameIconStyle,
            top: imageTransformFrameIconMiddle,
            right: imageTransformFrameIconOffset,
            cursor: 'ew-resize',
          }}
        />
      </div> 
    );
    imageTransformFrameJSX = (
    <div style={imageTransformFrameStyle} key={0}>
      {imageTransformFrameIcons}
    </div> 
    )
    
    }
    

  let shapeArea:string = frame.shape;
  let bleedingArea:string = frame.bleedingArea;

  

  


  


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
        draggable="false"
      />
    );


  });
  


    return (
      <div onClick={(e)=>{
          if(imageAddress) {
            props.onImageClick(e)
          }
          
        }
      }>
        {
          (props.isEditing) ? 
            [imageTransformFrameJSX]
              :
            <></>
        }
        
      <FrameLine
        borderWidth={cutLineBorderWidth}
        clipPath={shapeArea} 
        borderColor={'#E2007F'}
        zIndex={cutLineZIndex}
      >
        {[cropedImageJSX]}
      </FrameLine>
      
      <FrameLine
        borderWidth={bleedingAreaBorderWidth}
        clipPath={(props.isEditing) ? '' : bleedingArea} 
        borderColor={'#333333'}
        zIndex={bleedingAreaZIndex}
      >
          {[orangeImageJSX]}
      </FrameLine>
      {marks}
      </div>
    );
  } else {
    let style: CSSProperties;
    let blankFramePageStyle: CSSProperties = {
      backgroundColor: 'white',
      width:'100%',
      height: '100%'
    }
    let noneFramePageStyle: CSSProperties = {
     
    }
    if(props.framePage.frameName === '空白頁') {
      style = noneFramePageStyle;
    } else {
      style = blankFramePageStyle;
    }
    return (
      <div style={style}>
      </div>
    );
  }
  
  
};


export default FramePageComponent;
