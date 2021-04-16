import { ReviewStatus, UploadFileStatus } from "@gainhow-review/data";
import React,{ CSSProperties, useRef, useState } from "react";
import UploadFileCloudIcon from '../Upload/icons/UploadToCloud.svg'

interface UploadAreaProps {
    style?: CSSProperties,
    reviewStatus: ReviewStatus;
    uploadFile(file: FileList):void
    delectFile(uploadToken: string):void;
    cencelFile(uploadToken: string):void;
}
export function UploadArea(props: UploadAreaProps): JSX.Element {
    let [registerFile, setRrgisterFile] = useState<FileList>();
    let uploadFileStatuses: UploadFileStatus[] = props.reviewStatus.uploadFileStatuses;
    let numberOfFiles = (uploadFileStatuses)? uploadFileStatuses.length : 0;
    let style: CSSProperties = {
        position:'relative',
        width:  '500px',
        height:  '400px',
        margin: '30px',
        boxShadow: '0px 2px 3px #00000029',
        borderRadius: '10px',
        ...props.style
    }
        
      
    
    return (
        <div style={style}>
           
            <NoneFileUpload
                register={setRrgisterFile}
            />
        </div>
    )
}

interface NoneFileUploadProps {
    register(file: FileList):void
}

function NoneFileUpload(props: NoneFileUploadProps): JSX.Element {
    const inputRef = useRef(null);
    let style: CSSProperties = {
        width:'calc(100% - 40px)',
        height:'calc(100% - 40px)',
    }
    let iconStyle: CSSProperties = {
        display:'flex',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        margin: '20px',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column'

    }

    let borderSVGStyle: CSSProperties = {
        width:'calc(100% - 40px)',
        height:'calc(100% - 40px)',

        margin: '20px',
        position:'absolute',
        zIndex:-1
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
    let textStyle: CSSProperties = {
        fontSize:'18px',
        color: '#333333',
        margin:'18px'
    }

    let inputStyle: CSSProperties = {
        display:'none'
    }
    function onAddFilesClick(){
        inputRef.current.click();
    }
    function onAddFiles(event: React.ChangeEvent<HTMLInputElement>): void {
        props.register(event.target.files);
    }
        return(
        <div style={style}>
             <svg style={borderSVGStyle} xmlns='http://www.w3.org/2000/svg' >
                <rect style={rectBorderStyle}  rx='6'>
                 </rect>
            </svg>
            <div style={iconStyle}>
                <img src={UploadFileCloudIcon} style={{display:'block'}}/>
                <div style={textStyle}>
                    將檔案拖曳至此處，或<a href={''} onClick={()=>{onAddFilesClick()}}>點擊上傳</a>
                </div>
                <input 
                    style={inputStyle}
                    ref={inputRef} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{onAddFiles(event)}}
                    type="file"
                />
                
            </div>
        </div>
    );
}