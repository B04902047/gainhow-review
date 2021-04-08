
import React, { CSSProperties } from 'react';

  import './ExportingFrame.module.css';
import { FramedPage, UploadFilePageInfo } from '@gainhow-review/data';
import Frame from 'libs/data/src/lib/Frame/Frame';
  

/* eslint-disable-next-line */
export interface ExportingPageProps {
  framedPage: FramedPage;
  isSelected: boolean;
  onSelect(): void;
  horizontalPadding?: number;
  height?: number;
  shadowed?: boolean;
}

export function ExportingFrame(props: ExportingPageProps): JSX.Element {
  let frame: Frame = props.framedPage.getFrame();
  let frameHeightInMm: number = frame.maxHeight;
  let frameWidthInMm: number = frame.maxWidth;
  let ratio: number = frameWidthInMm / frameHeightInMm;
  let frameHeightInPx = props.height || 96;
  let frameWidthInPx: number = frameHeightInPx * ratio;
  let horizontalPadding: number = 9;
  if (props.horizontalPadding !== undefined) horizontalPadding = props.horizontalPadding;
  if (props.isSelected) horizontalPadding = horizontalPadding - 2;
  let style: CSSProperties = {
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    paddingTop: (props.isSelected)? 5: 9,
    paddingBottom: 0,
    display: "inline-block",
    backgroundColor: "inherit"
  };
  
  let cropStyle: CSSProperties = {
    overflow: "hidden",
    height: frameHeightInPx,
    width: frameWidthInPx,
    border: (props.isSelected)? "solid 3px #1581ff": "solid 1px #707070",
    backgroundColor: "white",
    boxShadow: "0 0 2px 2px Gainsboro"
  };

  let positionXInMm: number = props.framedPage.positionX;
  let positionYInMm: number = props.framedPage.positionY;
  let rotationDegree: number = props.framedPage.rotationDegree;
  let sourcePage: UploadFilePageInfo = props.framedPage.getSourcePageInfo();
  let imageStyle: CSSProperties = {
    marginLeft: (frameWidthInPx / frameWidthInMm) * positionXInMm,
    marginTop: (frameHeightInPx / frameHeightInMm) * positionYInMm,
    width: (frameWidthInPx / frameWidthInMm) * sourcePage.widthInMm,
    height: (frameWidthInPx / frameWidthInMm) * sourcePage.heightInMm,
    transform: `rotate(${rotationDegree}deg)`
  };

  let pageIndexStyle: CSSProperties = {
    width: frameWidthInPx + ((props.isSelected)? 6 : 0),
    color: (props.isSelected)? "#1581ff" : "black",
    fontSize: 14,
    fontFamily: "arial",
    textAlign: "center",
  };

  return (
    <div
      style={style}
      onClick={props.onSelect}
    >
      <div style={cropStyle}>
        <img
          src={sourcePage.jpegUrl}
          style={imageStyle}
        />
      </div>
      <div style={pageIndexStyle}>
        {props.framedPage.frameName}
      </div>
    </div>
  );
};


export default ExportingFrame;
