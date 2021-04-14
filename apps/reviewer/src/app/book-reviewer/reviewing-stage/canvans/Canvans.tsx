
import React, { createRef, CSSProperties, useEffect, useRef, useState } from 'react';
import './Canvans.module.css';
import { FramedPage, Frame, UploadFilePageInfo } from '@gainhow-review/data'  
import { FramePageComponent } from '@gainhow-review/ui';
/* eslint-disable-next-line */
export interface CanvansProps {
  leftFramePage: FramedPage;
  rightFramePage: FramedPage;
  style: CSSProperties;
  viewPercentage: number;
  isLeftPageEditing: boolean;
  isRightPageEditing: boolean;

  setIsLeftPageEditing(isEditing: boolean): void;
  setIsRightPageEditing(isEditing: boolean): void;
}



export function Canvas(props: CanvansProps) {
  const defaultRatio: number = 0.8;
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
  let frame: Frame = props.leftFramePage.getFrame();
  if(!frame) { frame = props.rightFramePage.getFrame();}
  let frameWidthtInPx: string = calcFrameWidth();
  let frameHeightInPx: string = calcFrameheight();
  let imageScale: string  = `calc(${frameWidthtInPx} / ${frame.maxWidth})`;

  const pageMargin: string = '20px';
  const textHeight: string = `${20}px`
  function calcFrameWidth(): string {
    let calcWidthByMaxWidth = `calc(${props.style.width} * ${defaultRatio} / 2)`;
    let calcWidthByMaxHeight = `calc(${frame.maxWidth} * ${props.style.height}  * ${defaultRatio} / ${frame.maxHeight}  )`
    return `min(${calcWidthByMaxWidth} , ${calcWidthByMaxHeight})`
  }

  function calcFrameheight(): string {
    let calcHeightByMaxHeight = `calc(${props.style.height} * ${defaultRatio} )`;
    let calcHeightByMaxWidth = `calc(${frame.maxHeight} * ${props.style.width} * ${defaultRatio} / 2 / ${frame.maxWidth} )`
    return `min(${calcHeightByMaxHeight} , ${calcHeightByMaxWidth})` 
  }


  const style: CSSProperties = {
    userSelect: 'none',
    position: 'relative',
    overflow: 'auto',
    ...props.style
  };

  
  const CanvansStyle: CSSProperties = {
    transform: `scale(${props.viewPercentage / 100})`,
    transformOrigin:'0 0',
    width: `calc(${props.style.width})`,
    height: `calc(${props.style.height})`,
    top: `max(calc(50% - calc(calc(${props.style.height})  * ${props.viewPercentage/100}) /2 ), 0px)`,
    left: `max(calc(50% - calc(calc(${props.style.width})  * ${props.viewPercentage/100}) /2 ), 0px)`,
    position: 'absolute',
    overflow: (props.isLeftPageEditing)? 'visible': 'hidden'
  };

  const editingFrameNameMargin: number = 5;
  const editingFrameNameStyle: CSSProperties = {
    userSelect: 'none',
    position: 'absolute',
    top: `calc(50% - calc(${frameHeightInPx} / 2) + calc(${frameHeightInPx} ) + ${editingFrameNameMargin}px)`,
    textAlign: 'center',
    width: '100%',
    fontSize: '20px'
  }


  const twoPageWidth: string = `calc(${frameWidthtInPx} * 2 + ${pageMargin})`;
  const twoPageHeight: string = `calc(${frameHeightInPx} + ${textHeight})`;
const twoPageAreaStyle: CSSProperties = {
  position: 'relative',
  width:twoPageWidth,
  height:twoPageHeight,
  top: `calc(calc(100% - ${twoPageHeight}) / 2)`,
  left: `calc(calc(100% - ${twoPageWidth}) / 2)`
}

  const leftPageStyle: CSSProperties = {
    position: 'relative',
    float:'left',
    textAlign: 'left',
    width: `50%`,
    height: '100%'
  }
  const rightPageStyle: CSSProperties = {
    position: 'relative',
    float:'right',
    textAlign: 'right',
    width: `50%`,
    height: '100%'
  }

  const framePageComponentStyle: CSSProperties = {
    width: `calc(${frameWidthtInPx})`,
    height: `calc(${frameHeightInPx} )`,
    position: 'absolute',
    zIndex: 100,
  };

 
  return (
    <div style={style} ref={myRef} >
        <div 
          style={CanvansStyle} 
          onClick={()=>{
              if(props.isLeftPageEditing) props.setIsLeftPageEditing(false);
              if(props.isRightPageEditing) props.setIsRightPageEditing(false);
          }}>
            <div style={twoPageAreaStyle}>
              <div style={leftPageStyle}>
                <div style={framePageComponentStyle}>
                <FramePageComponent
                    mmToPxScale={imageScale}
                    framePage={props.leftFramePage}
                    isEditing={props.isLeftPageEditing}
                    onImageClick={(e)=>{
                      props.setIsLeftPageEditing(true);
                      e.stopPropagation();}
                    }
                  />
                </div>
                { (props.leftFramePage.frameName !== '空白頁') &&
                  <div style={editingFrameNameStyle}>{props.leftFramePage.frameName}</div>
                }
            </div>
            <div style={rightPageStyle}>
                <div style={framePageComponentStyle}>
                <FramePageComponent
                    mmToPxScale={imageScale}
                    framePage={props.rightFramePage}
                    isEditing={props.isRightPageEditing}
                    onImageClick={(e)=>{
                      props.setIsRightPageEditing(true);
                      e.stopPropagation();}
                    }
                  />
                </div>
                { (props.rightFramePage.frameName !== '空白頁') &&
                  <div style={editingFrameNameStyle}>{props.rightFramePage.frameName}</div>
                }
            </div>
          </div>
        </div>
    </div>
  );
}


export default Canvas;
