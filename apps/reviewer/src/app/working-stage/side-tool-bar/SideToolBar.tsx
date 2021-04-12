
import React, { CSSProperties, useEffect, useState } from 'react';
import UndoIcon from '../../../assets/icons/UndoIcon.svg';
import RedoIcon from '../../../assets/icons/RedoIcon.svg';
import SaveIcon from '../../../assets/icons/SaveIcon.svg';
import ZoomInIcon from '../../../assets/icons/ZoomInIcon.svg';
import ZoomOutIcon from '../../../assets/icons/ZoomOutIcon.svg';
import ResetSizeIcon from '../../../assets/icons/ResetSizeIcon.svg';


import './SideToolBar.module.css';
import { from } from 'form-data';
  

/* eslint-disable-next-line */
export interface SideToolBarProps {
  style: CSSProperties;
  zoom(power: number): void;
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
      <ZoomingToolBar zoom={props.zoom}/>
    </div>
  );
};

export default SideToolBar;

interface IconProps {
  src: string;
  style?: CSSProperties;
  onClick?(): void;
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
      <img
        src={props.src}
        onClick={props.onClick}
      />
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
  const zoomPadMovementPerClickOnIcons: number = 5;
  const zoomBarLength: number = 120;
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
    borderRadius: '50%',
    cursor: 'grab'
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

  useEffect(() => {
    props.zoom(zoomPadPosition / (zoomBarLength / 2));
  }, [zoomPadPosition]);

  return (
    <div
      style={style}
      onDragOver={(event) => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newMousePosition: number = event.pageY;
        let offset: number = oldMousePosition - newMousePosition;
        let newZoomPadPosition: number = oldZoomPadPosition + offset;
        if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
        if (newZoomPadPosition < 0) newZoomPadPosition = 0;
        return [newMousePosition, newZoomPadPosition];
      })}
    >
      <Icon
        style={zoomIconStyle}
        src={ZoomOutIcon}
        onClick={() => {
          setPositions(([oldMousePosition, oldZoomPadPosition]) => {
            let newZoomPadPosition: number = oldZoomPadPosition + zoomPadMovementPerClickOnIcons;
            if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
            return [oldMousePosition, newZoomPadPosition];
          });
        }}
      />
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
      <Icon
        style={zoomIconStyle}
        src={ZoomInIcon}
        onClick={() => {
          setPositions(([oldMousePosition, oldZoomPadPosition]) => {
            let newZoomPadPosition: number = oldZoomPadPosition - zoomPadMovementPerClickOnIcons;
            if (newZoomPadPosition < 0) newZoomPadPosition = 0;
            return [oldMousePosition, newZoomPadPosition];
          });
        }}
      />
      <Icon
        src={ResetSizeIcon}
        onClick={() => {
          setPositions(([oldMousePosition, oldZoomPadPosition]) => {
            let newZoomPadPosition: number = zoomBarLength / 2;
            return [oldMousePosition, newZoomPadPosition];
          });
        }}
      />
    </div>
  );
}