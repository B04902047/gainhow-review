
import React, { createRef, CSSProperties, useEffect, useRef, useState } from 'react';
import './Canvans.module.css';
import { FramedPage, Frame, UploadFilePageInfo } from '@gainhow-review/data'  

/* eslint-disable-next-line */
export interface CanvansProps {
  framePage: FramedPage;
  style: CSSProperties;
  viewPercentage: number;
}



export function Canvans(props: CanvansProps) {
  const defaultRatio: number = 0.6;
  const myRef = useRef(null);
  const [preViewPercentaeg, setPreViewPercentae] = useState(props.viewPercentage);
  const scrollToMiddle = () => {
    console.log(myRef);
    let canvasDiv = myRef.current.childNodes[0];
    let thisDivHeight = myRef.current.clientHeight;
    let thisDivWidth = myRef.current.clientWidth;
    let canvasDivHeight: number = canvasDiv.clientHeight * props.viewPercentage / 100;
    let canvasDivWidth: number = canvasDiv.clientWidth * props.viewPercentage / 100;
      let scrollX = (canvasDivWidth - thisDivWidth) /2 
      let scrollY = (canvasDivHeight - thisDivHeight) /2 ;
      myRef.current.scrollTo(scrollX, scrollY);
      // 目前是直接移動到圖片中間
      // 但理想上是原本看的地方直接放大
      //  => 看能不能取得原本正在看的範圍中心座標，再根據該範圍的中心移動
      //scrollHeight scrollLeft scrollTop scrollWidth 

  }

  const scrollToViewCenter = () => {
    let canvasDiv = myRef.current.childNodes[0];
    let canvasDivHeight: number = canvasDiv.clientHeight * props.viewPercentage / 100;
    let canvasDivWidth: number = canvasDiv.clientWidth * props.viewPercentage / 100;

    let oldCanvasDivHeight: number = canvasDiv.clientHeight * preViewPercentaeg / 100;
    let oldCanvasDivWidth: number = canvasDiv.clientWidth * preViewPercentaeg / 100;

    let scrollX = (canvasDivWidth - oldCanvasDivWidth) /2 
    let scrollY = (canvasDivHeight - oldCanvasDivHeight) /2 ;
    myRef.current.scroll(scrollX, scrollY);
    //console.log(scrollX,scrollY);
    console.log(canvasDiv.clientHeight);
    // console.log(preViewPercentaeg, props.viewPercentage);
    setPreViewPercentae(props.viewPercentage);

  }

  useEffect(scrollToMiddle,[props.viewPercentage])
  
  let sourcePageInfo: UploadFilePageInfo = props.framePage.getSourcePageInfo();
  let imageAddress: string = sourcePageInfo.jpegAddress;
  let frame: Frame = props.framePage.getFrame();

  let frameWidthtInPx: string = calcFrameWidth();
  let frameHeightInPx: string = calcFrameheight();
  let framePositionX: string = `calc(calc(${props.style.width} - ${frameWidthtInPx}) * ${defaultRatio}  / 2)`;
  let framePositionY: string = `calc(calc(${props.style.height} - ${frameHeightInPx}) * ${defaultRatio}  / 2)`;

  let imageScale: string  = `calc(${frameWidthtInPx} / ${frame.maxWidth})`;
  let imageWidthInPx: string = `calc(${imageScale} * ${sourcePageInfo.widthInMm})`;
  let imageHeightInPx: string = `calc(${imageScale} * ${sourcePageInfo.heightInMm})`;
  let imagePostionXInPx: string = `calc(${imageScale} * calc(${props.framePage.positionX} ))`;
  let imagePostionYInPx: string = `calc(${imageScale} * calc(${props.framePage.positionY}))`;

  function calcFrameWidth(): string {
    let calcWidthByMaxWidth = `calc(${props.style.width} * ${defaultRatio})`;
    let calcWidthByMaxHeight = `calc(${frame.maxWidth} * ${props.style.height}  * ${defaultRatio} / ${frame.maxHeight} )`
    return `min(${calcWidthByMaxWidth} , ${calcWidthByMaxHeight})`
  }

  function calcFrameheight(): string {
    let calcHeightByMaxHeight = `calc(${props.style.height} * ${defaultRatio} )`;
    let calcHeightByMaxWidth = `calc(${frame.maxHeight} * ${props.style.width} * ${defaultRatio}  / ${frame.maxWidth} )`
    return `min(${calcHeightByMaxHeight} , ${calcHeightByMaxWidth})` 
  }
  
  const style: CSSProperties = {
    userSelect: 'none',
    position: 'relative',
    overflow: 'auto',
    ...props.style
  };

  const CanvansMargin: number = 10;

  const cutLineBorderWidth: number = 2;
  const CanvansStyle: CSSProperties = {
    transform: `scale(${props.viewPercentage / 100})`,
    transformOrigin:'0 0',
    width: `calc(${props.style.width})`,
    height: `calc(${props.style.height})`,
    top: `max(calc(50% - calc(calc(${props.style.height}) * ${props.viewPercentage/100}) / 2), 0px)`,
    left: `max(calc(50% - calc(calc(${props.style.width}) * ${props.viewPercentage/100}) /2 ), 0px)`,
    position: 'absolute'
  };

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


  const cutLineStyle: CSSProperties = {
    width: `calc(${frameWidthtInPx})`,
    height: `calc(${frameHeightInPx} )`,
    top: `calc(50% - calc(${frameHeightInPx} / 2))`,
    left: `calc(50% - calc(${frameWidthtInPx} / 2))`,
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

  const editingFrameNameMargin: number = 35;
  const editingFrameNameStyle: CSSProperties = {
    userSelect: 'none',
    position: 'absolute',
    top: `calc(50% - calc(${frameHeightInPx} / 2) + calc(${frameHeightInPx} ) + ${editingFrameNameMargin}px)`,
    textAlign: 'center',
    width: '100%',
    fontSize: '20px'
  }

  return (
    <div style={style} ref={myRef}>
        <div style={CanvansStyle} >
          <div style={cutLineStyle}>
            <img 
              style={originalImageStyle}
              src={imageAddress}
            />
          </div>

          <div style={editingFrameNameStyle}>{props.framePage.frameIndex}</div>
        </div>
    </div>
  );
}


export default Canvans;
