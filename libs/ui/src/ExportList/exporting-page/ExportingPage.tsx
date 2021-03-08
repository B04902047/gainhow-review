
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
  let heightInMm: number = props.page.getFrame().maxHeight;
  let widthInMm: number = props.page.getFrame().maxWidth;
  let ratio: number = widthInMm / heightInMm;
  let heightInPx = 56;
  let widthInPx: number = widthInMm * ratio;
  let cropStyle: CSSProperties = {
    overflow: "hidden",
    height: heightInPx,
    width: widthInPx
  };

  let positionXInMm: number = props.page.positionX;
  let positionYInMm: number = props.page.positionY;
  let rotationDegree: number = props.page.rotationDegree
  let imageStyle: CSSProperties = {
    marginLeft: widthInPx / widthInMm * positionXInMm,
    marginTop: heightInPx / heightInMm * positionYInMm,
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
