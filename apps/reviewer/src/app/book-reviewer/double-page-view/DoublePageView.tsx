
import { ReviewItem } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import { ExportList } from '../export-list/ExportList';





  import './DoublePageView.module.css';
  

  interface DoublePageViewProps {
    style: CSSProperties;
    reviewItem: ReviewItem;
}

function DoublePageView(props: DoublePageViewProps): JSX.Element {
    let exportListStyle: CSSProperties = {
        //display: 'inline-block',
        verticalAlign: 'top',
        width: props.style.width,
        height: '180px',
    };
    let workSpaceStyle: CSSProperties = {
        width: props.style.width,
        height: `calc(100vh - ${exportListStyle.height} - 2px)`
    };
    return (
        <div style={props.style}>
            <DoublePageWorkSpace style={workSpaceStyle}/>
            <ExportList
                selectedModelIndex={0}
                selectedFrameIndex={0}
                reviewItem={props.reviewItem}
                style={exportListStyle}
                onFrameSelect={() => {}}
            />
        </div>
    )
}

interface DoublePageWorkSpaceProps {
    style: CSSProperties;
}

function DoublePageWorkSpace(props: DoublePageWorkSpaceProps): JSX.Element {
    return (
        <div style={props.style}>
        </div>
    )
}

export default DoublePageView;
