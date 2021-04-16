import { FramedPage } from "@gainhow-review/data";
import React ,{ CSSProperties } from "react";

interface CoverBlankFramePageProps {
    frameName: string,
    frameHeightInPx: number,
    frameWidthInPx: number,
    horizontalPadding?: number,
    style?: CSSProperties
}


export function CoverBlankFramePage (props: CoverBlankFramePageProps) {

    let frameHeightInPx = props.frameHeightInPx;
    let frameWidthInPx = props.frameWidthInPx;

    let style: CSSProperties = {
        ...props.style,
        display: 'inline-block',
 
        padding: (props.horizontalPadding)? props.horizontalPadding: 3
    };
    
  let cropStyle: CSSProperties = {
    overflow: "hidden",
    height: frameHeightInPx,
    width: frameWidthInPx,
    border: "solid 1px #707070",
    backgroundColor: "white"
  };

  let pageIndexStyle: CSSProperties = {
    width: frameWidthInPx,
    color:  "black",
    fontSize: 14,
    fontFamily: "arial",
    textAlign: "center",
  };
    return (
        <div
          style={style}
          className='notSortable'
        >
          <div style={cropStyle}>
          </div>
          <div style={pageIndexStyle}>
            {props.frameName}
          </div>
        </div>
      );
}