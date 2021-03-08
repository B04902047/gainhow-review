
import React, { CSSProperties } from 'react';

  import './ExportingPage.module.css';
import { FramedPage } from '@gainhow-review/data';
import Frame from 'libs/data/src/lib/Frame/Frame';
  

/* eslint-disable-next-line */
export interface ExportingPageProps {
  page: FramedPage;
  isSelected: boolean;
}

export function ExportingPage(props: ExportingPageProps): JSX.Element {
  let frame: Frame = props.page.getFrame();
  let frameHeightInMm: number = props.page.getFrame().maxHeight;
  let frameWidthInMm: number = props.page.getFrame().maxWidth;
  let ratio: number = frameWidthInMm / frameHeightInMm;
  let frameHeightInPx = 96;
  let frameWidthInPx: number = frameWidthInMm * ratio;
  let cropStyle: CSSProperties = {
    overflow: "hidden",
    height: frameHeightInPx,
    width: frameWidthInPx
  };

  let positionXInMm: number = props.page.positionX;
  let positionYInMm: number = props.page.positionY;
  let rotationDegree: number = props.page.rotationDegree;
  let imageStyle: CSSProperties = {
    marginLeft: (frameWidthInPx / frameWidthInMm) * positionXInMm,
    marginTop: (frameHeightInPx / frameHeightInMm) * positionYInMm,
    //width: (frameWidthInPx / frameWidthInMm) * props.page.
    height: ``,
    transform: `rotate(${rotationDegree})`
  };

  return (
    <div style={cropStyle}>
      <img
        src={props.page.sourcePageJpegUrl}
        style={imageStyle}
      />
    </div>
  );
};


export default ExportingPage;
