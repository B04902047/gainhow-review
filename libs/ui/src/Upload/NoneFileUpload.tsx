import React,{ CSSProperties, useRef, useState } from "react";
import UploadFileCloudIcon from '../Upload/icons/UploadToCloud.svg'
import { HiddenMultipleFileInput } from "./HiddenMultipleFileInput";


interface NoneFileUploadProps {
    register(file: File[]):void
}

export function NoneFileUpload(props: NoneFileUploadProps): JSX.Element {
    const inputRef = useRef(null);
    
    let style: CSSProperties = {
        position: 'relative',
        width:'calc(100% - 40px)',
        height:'calc(100% - 40px)',
        userSelect: 'none'
    }
    let iconStyle: CSSProperties = {
        display:'flex',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
    }

    let borderSVGStyle: CSSProperties = {
        width:'calc(100%)',
        height:'calc(100%)',
        margin: '20px',
        position:'absolute',
    }
    let rectBorderStyle: CSSProperties = {
        fill:'none',
        strokeWidth:2,
        stroke:'#707070',
        strokeDasharray:'6,6',
        backgroundColor: 'white',
        width:'100%',
        height:'100%'
    }
    let uploadFileCloudIconStyle: CSSProperties = {
        display:'block',
        zIndex:4,
        cursor: 'pointer'
    }

    let textStyle: CSSProperties = {
        fontSize: '18px',
        color: '#333333',
        margin: '18px',
        zIndex: 20
    }
    function onFileAdd(event: React.MouseEvent) {
        event.preventDefault();
        inputRef.current.click();
    }

    return (
        <div style={style}>
             <svg style={borderSVGStyle} xmlns='http://www.w3.org/2000/svg' >
                <rect style={rectBorderStyle}  rx='6'>
                 </rect>
            </svg>
            <div style={iconStyle}>
                <img src={UploadFileCloudIcon} style={uploadFileCloudIconStyle} onClick={onFileAdd}/>
                <div style={textStyle}>
                    將檔案拖曳至此處，或
                    <a
                        href={''}
                        onClick={onFileAdd}
                    >
                        點擊上傳
                    </a>
                </div>
                <HiddenMultipleFileInput
                    inputRef={inputRef}
                    onChange={props.register}
                />
                
            </div>
        </div>
    );
}