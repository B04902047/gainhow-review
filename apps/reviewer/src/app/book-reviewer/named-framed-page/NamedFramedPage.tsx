
import { FramedPage } from '@gainhow-review/data';
import { ExportingFrame } from 'libs/ui/src/ExportList/exporting-frame/ExportingFrame';
import React, { CSSProperties } from 'react';
import { useState } from 'react';
import { PlusOutlined, SwapOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';





  import './NamedFramedPage.module.css';
  


  interface NamedFramedPage {
    name: string;
    framedPage?: FramedPage;
    isSelected: boolean;
    onSelect(): void;
    onEdit?(): void;
    onInsert?(): void;
    onDelete?(): void;
    onSwap?(): void;
}

export interface NamedFramedPagePair {
    left?: NamedFramedPage;
    right?: NamedFramedPage;
}

interface PagePairProps {
    pair: NamedFramedPagePair;
    style?: CSSProperties;
}

export function PagePair(props: PagePairProps): JSX.Element {
    let style: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        ...props.style
    };
    let widthInMm: number = 210+6;
    let heightInMm: number = 297+6;
    let height: number = 160;
    let leftStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        paddingRight: 1
    };
    let rightStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        paddingLeft: 1
    };
    return (
        <div style={style}>
            <SingleFrame
                style={leftStyle}
                namedFramePage={props.pair.left}
                widthInMm={widthInMm}
                heightInMm={heightInMm}
                height={height}
            />
            <SingleFrame
                style={rightStyle}
                namedFramePage={props.pair.right}
                widthInMm={widthInMm}
                heightInMm={heightInMm}
                height={height}
            />
        </div>
    )
}

type SingleFrameProps = {
    namedFramePage?: NamedFramedPage;
    style: CSSProperties;
    widthInMm: number;
    heightInMm: number;
    height: number;
};

function SingleFrame(props: SingleFrameProps): JSX.Element {
    let [showToolBar, setShowToolBar] = useState<boolean>(false);
    let [isDraggable, setIsDraggable] = useState<boolean>(false);
    
    return (
        <div style={props.style}
            onMouseOver={() => setShowToolBar(true)}
            onMouseLeave={() => setShowToolBar(false)}
        >
            <SingleFrameToolBar
                isHidden={!showToolBar || (props.namedFramePage?.framedPage === undefined)}
                onEdit={props.namedFramePage?.onEdit}
                onInsert={props.namedFramePage?.onInsert}
                onDelete={props.namedFramePage?.onDelete}
                onSwap={props.namedFramePage?.onSwap}
            />
            {(!props.namedFramePage)?
                <NoFrame
                    widthInMm={props.widthInMm}
                    heightInMm={props.heightInMm}
                    height={props.height}
                />
            : (!props.namedFramePage.framedPage)?
                <BlankFrame
                    widthInMm={props.widthInMm}
                    heightInMm={props.heightInMm}
                    withBorder={true}
                    isSelected={props.namedFramePage.isSelected}
                    name={props.namedFramePage.name}
                    height={props.height}
                />
            : 
            <div style={{
                position: 'relative'
            }}
                onMouseLeave={() => setIsDraggable(false)}
            >
                <ExportingFrame
                    shadowed
                    framedPage={props.namedFramePage.framedPage}
                    isSelected={props.namedFramePage.isSelected}
                    onSelect={() => props.namedFramePage.onSelect()}
                    horizontalPadding={0}
                    height={props.height}
                    onMouseOver={() => setIsDraggable(true)}
                />
                {isDraggable && <div 
                    style={{
                        position: "absolute",
                        top: (props.namedFramePage.isSelected)? -1: 1,
                        left: (props.namedFramePage.isSelected)? 3: 1,
                        cursor: 'move'
                    }}
                    onClick={() => props.namedFramePage.onSelect()}
                >
                    <ShadowingFrame
                        widthInMm={props.widthInMm}
                        heightInMm={props.heightInMm}
                        height={props.height}
                    />
                </div>
                }
            </div>}
        </div>
        
    )
}

interface BlankFrameProps {
    widthInMm: number;
    heightInMm: number;
    withBorder: boolean;
    isSelected: boolean;
    name?: string;
    height: number;
    backgroundColor?: string;
}

function BlankFrame(props: BlankFrameProps): JSX.Element {

    let frameWidthInPx = props.height / props.heightInMm * props.widthInMm;
    let pageIndexStyle: CSSProperties = {
        width: frameWidthInPx + ((props.isSelected)? 6 : 0),
        color: (props.isSelected)? "#1581ff" : "black",
        fontSize: 14,
        fontFamily: "arial",
        textAlign: "center"
    };

    return (
        <div style={{
            display: "inline-block",
            verticalAlign: "top"
        }}>
            <div style={{
                    width: frameWidthInPx,
                    height: props.height,
                    border: (!props.withBorder)? "none"
                            : (props.isSelected)? "solid 3px #1581ff"
                            : "solid 1px #707070",
                    marginTop: (props.isSelected)? 5: 9,
                    paddingBottom: 0,
                    backgroundColor: (props.backgroundColor)? props.backgroundColor
                                    : (props.withBorder)? "white"
                                    :  "inherit"
                }}
            />
            <div style={pageIndexStyle}>
                {props.name}
            </div>
        </div>
    )
}

interface NoFrameProps {
    widthInMm: number;
    heightInMm: number;
    height: number;
}

function NoFrame(props: NoFrameProps): JSX.Element {
    return (
        <BlankFrame
            widthInMm={props.widthInMm}
            heightInMm={props.heightInMm}
            withBorder={false}
            isSelected={false}
            height={props.height}
        />
    );
}

interface ShadowingFrameProps {
    widthInMm: number;
    heightInMm: number;
    height: number;
}

function ShadowingFrame(props: ShadowingFrameProps): JSX.Element {
    return (
        <BlankFrame
            widthInMm={props.widthInMm}
            heightInMm={props.heightInMm}
            withBorder={false}
            isSelected={false}
            height={props.height}
            backgroundColor="#4ba3ff77"
        />
    );

}



interface SingleFrameToolBarProps {
  isHidden: boolean;
  onEdit(): void;
  onInsert(): void;
  onDelete(): void;
  onSwap(): void;
}

function SingleFrameToolBar(props: SingleFrameToolBarProps): JSX.Element {
  let style: CSSProperties = {
      height: 20,
      fontSize: 18,
      color: "#777777"
  }
  return (
      <div style={style}>
          {
              !props.isHidden && (<>
                  &thinsp;
                  <SingleFrameToolBarButton
                      onClick={props.onInsert}
                  >
                      <PlusOutlined/>
                  </SingleFrameToolBarButton>
                  &thinsp;
                  <SingleFrameToolBarButton
                      onClick={props.onSwap}
                  >
                      <SwapOutlined/>
                  </SingleFrameToolBarButton>
                  &thinsp;
                  <SingleFrameToolBarButton
                      onClick={props.onEdit}
                  >
                      <EditOutlined/>
                  </SingleFrameToolBarButton>
                  &thinsp;
                  <SingleFrameToolBarButton
                      onClick={props.onDelete}
                  >
                      <DeleteOutlined/>
                  </SingleFrameToolBarButton>
              </>)
          }
      </div>
  );
}

interface SingleFrameToolBarButtonProps {
  children: JSX.Element;
  onClick(): void;
}

function SingleFrameToolBarButton(props: SingleFrameToolBarButtonProps): JSX.Element {
  let [isHovered, setIsHovered] = useState<boolean>(false);
  return (
      <div style={{
          borderRadius: '30% 30%',
          padding: '0px 3px',
          backgroundColor: (isHovered)? 'LightGray' : 'inherit',
          display: 'inline-block',
          cursor: 'pointer'
      }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={props.onClick}
      >
          {props.children}
      </div>
  )
}

export default NamedFramedPage;
