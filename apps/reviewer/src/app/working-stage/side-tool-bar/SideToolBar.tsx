
import React, { CSSProperties } from 'react';
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
}

export function SideToolBar(props: SideToolBarProps): JSX.Element {
  let style: CSSProperties = {
    width: 50,
    backgroundColor: '#F7F7F7',
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
        zoomValue={0.7}
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
  zoomValue: number;   // 介於正負一之間的數
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
  let zoomPadPosition: number = zoomBarLength / 2 * (1 - props.zoomValue);
  let upperZoomBarStyle: CSSProperties = {
    width: 0,
    height: zoomPadPosition,
    marginLeft: 24,
    border: 'solid 2px #d9d9d9',
    borderRadius: 2
  };
  let zoomPadStyle: CSSProperties = {
    position: 'absolute',
    left: 18,
    top: 40 + zoomPadPosition,
    width: 14,
    height: 14,
    backgroundColor: '#666666',
    border: "solid 1px #d9d9d9",
    borderRadius: '50%'
  };
  let lowerZoomBarStyle: CSSProperties = {
    width: 0,
    height: zoomBarLength - zoomPadPosition,
    marginLeft: 24,
    border: 'solid 2px #666666',
    borderRadius: 2
  };
  return (
    <div style={style}>
      <Icon style={zoomIconStyle} src={ZoomOutIcon}/>
      <div style={upperZoomBarStyle}/>
      <div style={zoomPadStyle}/>
      <div style={lowerZoomBarStyle}/>
      <Icon style={zoomIconStyle} src={ZoomInIcon}/>
    </div>
  );
}