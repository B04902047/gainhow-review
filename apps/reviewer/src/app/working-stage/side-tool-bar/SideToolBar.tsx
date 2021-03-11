
import React, { CSSProperties, useEffect, useState } from 'react';
import UndoIcon from '../../../assets/icons/UndoIcon.svg';
import RedoIcon from '../../../assets/icons/RedoIcon.svg';
import SaveIcon from '../../../assets/icons/SaveIcon.svg';
import ZoomInIcon from '../../../assets/icons/ZoomInIcon.svg';
import ZoomOutIcon from '../../../assets/icons/ZoomOutIcon.svg';
import ResetSizeIcon from '../../../assets/icons/ResetSizeIcon.svg';





  import './SideToolBar.module.css';
  

/* eslint-disable-next-line */
export interface SideToolBarProps {
  style: CSSProperties;
  zoom(percentage: number): void;
}

export function SideToolBar(props: SideToolBarProps): JSX.Element {
  let style: CSSProperties = {
    width: 50,
    backgroundColor: '#F7F7F7',
    overflow: 'auto',
    ...props.style
  };
  let hrStyle: CSSProperties = {
    margin: 8,
    border: 'solid 1px #d9d9d9'
  };
  return (
    <div style={style}>
      <div style={{height: `calc(${props.style.height} - 435px)`}}/>
      <Icon src={UndoIcon}/>
      <Icon src={RedoIcon}/>
      <hr style={hrStyle}/>
      <Icon src={SaveIcon}/>
      <hr style={hrStyle}/>
      <ZoomingToolBar
        zoom={props.zoom}
      />
      <Icon src={ResetSizeIcon}/>
    </div>
  );
};

export default SideToolBar;

interface IconProps {
  src: string;
  style?: CSSProperties;
}

function Icon(props: IconProps): JSX.Element {
  let style: CSSProperties = {
    width: 50,
    height: 30,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    ...props.style
  }
  return (
    <div style={style}>
      <img src={props.src}/>
    </div>
  );
}

interface ZoomingToolBarProps {
  zoom(percentage: number): void;
}

function ZoomingToolBar(props: ZoomingToolBarProps): JSX.Element {
  let style: CSSProperties = {
    position: 'relative'
  }
  let zoomIconStyle: CSSProperties = {
    paddingTop: 5,
    paddingBottom: 5,
  };
  let zoomBarLength: number = 120;
  let [[mousePosition, zoomPadPosition], setPositions]
    = useState<[number, number]>([0, zoomBarLength / 2]);
  let upperZoomBarStyle: CSSProperties = {
    width: 0,
    height: zoomBarLength - zoomPadPosition,
    marginLeft: 24,
    border: 'solid 2px #d9d9d9',
    borderRadius: 2
  };
  let zoomPadStyle: CSSProperties = {
    position: 'absolute',
    left: 18,
    top: 35 + zoomBarLength - zoomPadPosition,
    width: 14,
    height: 14,
    backgroundColor: '#666666',
    border: "solid 1px #d9d9d9",
    borderRadius: '50%'
  };
  let lowerZoomBarStyle: CSSProperties = {
    width: 0,
    height: zoomPadPosition,
    marginLeft: 24,
    border: 'solid 2px #666666',
    borderRadius: 2
  };

  const transparentImageSource = 
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  let transparentImage = new Image(0, 0);
  transparentImage.src = transparentImageSource;
  let [dragImage, _] = useState<HTMLImageElement>(transparentImage);
  
  return (
    <div
      style={style}
      onDragOver={(event) => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newMousePosition: number = event.pageY;
        let offset: number = oldMousePosition - newMousePosition;
        let halfZoomBarLength: number = zoomBarLength / 2;
        let newZoomPadPosition: number = oldZoomPadPosition + offset;
        if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
        if (newZoomPadPosition < 0) newZoomPadPosition = 0;
        props.zoom(newZoomPadPosition / halfZoomBarLength * 100)
        return [newMousePosition, newZoomPadPosition];
      })}
    >
      <Icon style={zoomIconStyle} src={ZoomOutIcon}/>
      <div style={upperZoomBarStyle}/>
      <div
        style={zoomPadStyle}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setDragImage(dragImage, 0, 0);
          event.dataTransfer.clearData();
          setPositions(([oldMousePosition, oldZoomPadPosition]) => {
            let newMousePosition: number = event.pageY;
            return [newMousePosition, oldZoomPadPosition];
          });
        }}
      />
      <div style={lowerZoomBarStyle}/>
      <Icon style={zoomIconStyle} src={ZoomInIcon}/>
    </div>
  );
}