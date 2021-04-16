
import React, { CSSProperties, useEffect, useState } from 'react';
import ToolBarHolder from './icons/ToolBarHolder.svg';
import Lock from './icons/Lock.svg';
import Unlock from './icons/Unlock.svg';
import ResetSize from './icons/ResetSize.svg';
import ResetSizeBlue from './icons/ResetSizeBlue.svg';
import AlignCenter from './icons/AlignCenter.svg';
import AlignCenterBlue from './icons/AlignCenterBlue.svg';
import FullSize from './icons/FullSize.svg';
import FullSizeBlue from './icons/FullSizeBlue.svg';
import EqualWidth from './icons/EqualWidth.svg';
import EqualWidthBlue from './icons/EqualWidthBlue.svg';
import EqualHeight from './icons/EqualHeight.svg';
import EqualHeightBlue from './icons/EqualHeightBlue.svg';
import RotateRight from './icons/RotateRight.svg';
import RotateRightBlue from './icons/RotateRightBlue.svg';
import Delete from './icons/Delete.svg';
import DeleteBlue from './icons/DeleteBlue.svg';
import { useDrag } from '../hooks';

import ZoomInIcon from './icons/ZoomInIcon.svg';
import ZoomOutIcon from './icons/ZoomOutIcon.svg';
import ResetSizeIcon from './icons/ResetSizeIcon.svg';

interface SourceImageToolBarProps {
    
}

export function SourceImageToolBar(props: SourceImageToolBarProps): JSX.Element {
    let [positionX, positionY, onToolBarHolderMouseDown] = useDrag(400, 650);
    return (
        <div style={{
            position: 'absolute',
            left: positionX,
            top: positionY
        }}>
            <div style={{
                height: 46,
                width: 690,
                backgroundColor: 'white',
                position: 'relative',
                boxShadow: "0px 3px 6px #00000029"
            }}>
                <img
                    src={ToolBarHolder}
                    style={{ position: "absolute", top: 13, left: 8, cursor: 'move' }}
                    draggable
                    onMouseDown={onToolBarHolderMouseDown}
                />
                <MyInput
                    style={{ position: 'absolute', display: 'inline-block', top: 4, left: 35 }}
                    label="寬"
                    value="210mm"
                    onChange={() => {}}
                />
                <MyInput
                    style={{ position: 'absolute', display: 'inline-block', top: 22, left: 35 }}
                    label="高"
                    value="297mm"
                    onChange={() => {}}
                />
                <SwitchableButton
                    srcWhenOn={Unlock}
                    srcWhenOff={Lock}
                    isOn={false}
                    style={{ position: 'absolute', top: 8, left: 152 }}
                />
                <VerticalLine style={{ position: 'absolute', top: 6, left: 179 }} />
                <ZoomingToolBar zoom={() => {}} style={{ position: 'absolute', top: 3, left: 190}}/>
                <HoverableButton
                    src={ResetSize}
                    srcOnHover={ResetSizeBlue}
                    style={{ position: 'absolute', top: 13, left: 397 }}
                    title="回復到原始尺寸"
                />
                <VerticalLine style={{ position: 'absolute', top: 6, left: 437 }} />
                <HoverableButton
                    src={AlignCenter}
                    srcOnHover={AlignCenterBlue}
                    style={{ position: 'absolute', top: 13, left: 452 }}
                    title="原尺寸置中"
                />
                <HoverableButton
                    src={FullSize}
                    srcOnHover={FullSizeBlue}
                    style={{position: 'absolute', top: 13, left: 487 }}
                    title="填滿"
                />
                <HoverableButton
                    src={EqualWidth}
                    srcOnHover={EqualWidthBlue}
                    style={{ position: 'absolute', top: 13, left: 522 }}
                    title="與框同寬"
                />
                <HoverableButton
                    src={EqualHeight}
                    srcOnHover={EqualHeightBlue}
                    style={{ position: 'absolute', top: 13, left: 557 }}
                    title="與寬同高"
                />
                <VerticalLine style={{ position: 'absolute', top: 6, left: 589 }} />
                <HoverableButton
                    src={RotateRight}
                    srcOnHover={RotateRightBlue}
                    style={{ position: 'absolute', top: 13, left: 604 }}
                    title="順時針轉90度"
                />
                <VerticalLine style={{ position: 'absolute', top: 6, left: 641 }} />
                <HoverableButton
                    src={Delete}
                    srcOnHover={DeleteBlue}
                    style={{ position: 'absolute', top: 13, left: 656 }}
                    title="留白"
                />
            </div>
        </div>
    )
}


interface SizeInputProps {
    label: string;
    style: CSSProperties;
    value: string;
    onChange(newValue: string): void;
}


function MyInput(props: SizeInputProps): JSX.Element {
    return (
        <div style={{
            fontSize: 14,
            ...props.style
        }}>
            {props.label}：
            <input style={{
                width: 64,
                paddingLeft: 16,
                height: 20,
                backgroundColor: '#F8F8F8',
                borderRadius: 3,
                border: 'none',
                outline: 'none'
            }}
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
            />
        </div>
    )
}

function VerticalLine(props: { style?: CSSProperties }): JSX.Element {
    return (
        <div style={{
            width: 0,
            height: 34,
            borderLeft: 'solid 1px #d9d9d9',
            ...props.style
        }}/>
    );
}

interface HoverableButtonProps {
    src: string;
    srcOnHover: string;
    style: CSSProperties;
    title?: string;
    onClick?(): void;
}

function HoverableButton(props: HoverableButtonProps): JSX.Element {
    let [isHovered, setIsHovered] = useState(false);
    return (
        <img
            src={(isHovered)? props.srcOnHover: props.src}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                cursor: (isHovered)? 'pointer': 'inherit',
                ...props.style
            }}
            title={props.title}
            onClick={props.onClick}
        />
    )
}

interface SwitchableButtonProps {
    srcWhenOn: string;
    srcWhenOff: string;
    isOn: boolean;
    style?: CSSProperties;
}

function SwitchableButton(props: SwitchableButtonProps): JSX.Element {
    let [isHovered, setIsHovered] = useState(false);
    return (
        <img
            src={(props.isOn)? props.srcWhenOn: props.srcWhenOff}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                cursor: (isHovered)? 'pointer': 'inherit',
                ...props.style
            }}
        />
    )
}


interface ZoomingToolBarProps {
    zoom(percentage: number): void;
    style?: CSSProperties;
}

function useTransparentImage(): HTMLImageElement {
    const transparentImageSource = 
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    let transparentImage = new Image(0, 0);
    transparentImage.src = transparentImageSource;
    let [dragImage, _] = useState<HTMLImageElement>(transparentImage);
    return dragImage;
}

function ZoomingToolBar(props: ZoomingToolBarProps): JSX.Element {
    const zoomPadMovementPerClickOnIcons: number = 5;
    const zoomBarLength: number = 110;
    let [[mousePosition, zoomPadPosition], setPositions]
        = useState<[number, number]>([0, zoomBarLength / 2]);
    let leftZoomBarStyle: CSSProperties = {
        position: 'absolute',
        left: 30,
        top: 19,
        height: 0,
        width: zoomBarLength - zoomPadPosition,
        border: 'solid 2px #666666',
        borderRadius: 2,
        zIndex: 1
    };
    let zoomPadStyle: CSSProperties = {
        position: 'absolute',
        top: 13,
        left: 27 + zoomBarLength - zoomPadPosition,
        width: 14,
        height: 14,
        backgroundColor: '#666666',
        border: "solid 1px #d9d9d9",
        borderRadius: '50%',
        cursor: 'grab',
        zIndex: 3
    };
    let rightZoomBarStyle: CSSProperties = {
        height: 0,
        width: zoomPadPosition,
        position: 'absolute',
        top: 19,
        left: 35 + zoomBarLength - zoomPadPosition,
        border: 'solid 2px #d9d9d9',
        borderRadius: 2,
        zIndex: 1
    };

    let dragImage: HTMLImageElement = useTransparentImage();

    useEffect(() => {
        props.zoom(zoomPadPosition / (zoomBarLength / 2));
    }, [zoomPadPosition]);

    return (
        <div style={{...props.style}}>
            <div
                style={{ position: 'relative' }}
                onDragOver={(event) => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
                    let newMousePosition: number = event.pageX;
                    let offset: number = oldMousePosition - newMousePosition;
                    let newZoomPadPosition: number = oldZoomPadPosition + offset;
                    if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
                    if (newZoomPadPosition < 0) newZoomPadPosition = 0;
                    return [newMousePosition, newZoomPadPosition];
                })}
            >
                <HoverableButton
                    src={ZoomInIcon}
                    srcOnHover={ZoomInIcon}
                    style={{ position: 'absolute', left: 0, top: 9}}
                    onClick={() => {
                        setPositions(([oldMousePosition, oldZoomPadPosition]) => {
                        let newZoomPadPosition: number = oldZoomPadPosition + zoomPadMovementPerClickOnIcons;
                        if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
                        return [oldMousePosition, newZoomPadPosition];
                        });
                    }}
                />
                <div style={leftZoomBarStyle} />
                <div
                    style={zoomPadStyle}
                    draggable
                    onDragStart={(event) => {
                        event.dataTransfer.setDragImage(dragImage, 0, 0);
                        event.dataTransfer.clearData();
                        let newMousePosition: number = event.pageX;
                        setPositions(([oldMousePosition, oldZoomPadPosition]) => {
                            return [newMousePosition, oldZoomPadPosition];
                        });
                    }}
                />
                <div style={rightZoomBarStyle} />
                <HoverableButton
                    src={ZoomOutIcon}
                    srcOnHover={ZoomOutIcon}
                    style={{ position: 'absolute', left: 155, top: 9}}
                    onClick={() => {
                        setPositions(([oldMousePosition, oldZoomPadPosition]) => {
                            let newZoomPadPosition: number = oldZoomPadPosition - zoomPadMovementPerClickOnIcons;
                            if (newZoomPadPosition < 0) newZoomPadPosition = 0;
                            return [oldMousePosition, newZoomPadPosition];
                        });
                    }}
                />
            </div>
        </div>
    )
}
  
//   function ZoomingToolBar(props: ZoomingToolBarProps): JSX.Element {
//     let style: CSSProperties = {
//       ...props.style
//     }
//     let zoomIconStyle: CSSProperties = {
//       paddingTop: 5,
//       paddingBottom: 5,
//     };
//     const zoomPadMovementPerClickOnIcons: number = 5;
//     const zoomBarLength: number = 120;
//     let [[mousePosition, zoomPadPosition], setPositions]
//       = useState<[number, number]>([0, zoomBarLength / 2]);
//     let upperZoomBarStyle: CSSProperties = {
//       width: 0,
//       height: zoomBarLength - zoomPadPosition,
//       marginLeft: 24,
//       border: 'solid 2px #d9d9d9',
//       borderRadius: 2
//     };
//     let zoomPadStyle: CSSProperties = {
//       position: 'absolute',
//       left: 18,
//       top: 35 + zoomBarLength - zoomPadPosition,
//       width: 14,
//       height: 14,
//       backgroundColor: '#666666',
//       border: "solid 1px #d9d9d9",
//       borderRadius: '50%',
//       cursor: 'grab'
//     };
//     let lowerZoomBarStyle: CSSProperties = {
//       width: 0,
//       height: zoomPadPosition,
//       marginLeft: 24,
//       border: 'solid 2px #666666',
//       borderRadius: 2
//     };
  
//     const transparentImageSource = 
//       'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
//     let transparentImage = new Image(0, 0);
//     transparentImage.src = transparentImageSource;
//     let [dragImage, _] = useState<HTMLImageElement>(transparentImage);
  
//     useEffect(() => {
//       props.zoom(zoomPadPosition / (zoomBarLength / 2));
//     }, [zoomPadPosition]);
  
//     return (
//       <div
//         style={style}
//         onDragOver={(event) => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//           let newMousePosition: number = event.pageY;
//           let offset: number = oldMousePosition - newMousePosition;
//           let newZoomPadPosition: number = oldZoomPadPosition + offset;
//           if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
//           if (newZoomPadPosition < 0) newZoomPadPosition = 0;
//           return [newMousePosition, newZoomPadPosition];
//         })}
//       >
//         <Icon
//           style={zoomIconStyle}
//           src={ZoomOutIcon}
//           onClick={() => {
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newZoomPadPosition: number = oldZoomPadPosition + zoomPadMovementPerClickOnIcons;
//               if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
//               return [oldMousePosition, newZoomPadPosition];
//             });
//           }}
//         />
//         <div style={upperZoomBarStyle}/>
//         <div
//           style={zoomPadStyle}
//           draggable
//           onDragStart={(event) => {
//             event.dataTransfer.setDragImage(dragImage, 0, 0);
//             event.dataTransfer.clearData();
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newMousePosition: number = event.pageY;
//               return [newMousePosition, oldZoomPadPosition];
//             });
//           }}
//         />
//         <div style={lowerZoomBarStyle}/>
//         <Icon
//           style={zoomIconStyle}
//           src={ZoomInIcon}
//           onClick={() => {
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newZoomPadPosition: number = oldZoomPadPosition - zoomPadMovementPerClickOnIcons;
//               if (newZoomPadPosition < 0) newZoomPadPosition = 0;
//               return [oldMousePosition, newZoomPadPosition];
//             });
//           }}
//         />
//         <Icon
//           src={ResetSizeIcon}
//           onClick={() => {
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newZoomPadPosition: number = zoomBarLength / 2;
//               return [oldMousePosition, newZoomPadPosition];
//             });
//           }}
//         />
//       </div>
//     );
//   }