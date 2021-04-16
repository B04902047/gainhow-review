import React, { CSSProperties } from "react";
import { HoverableButton } from "../lib/buttons";
import Redo from './icons/Redo.svg'
import RedoBlue from './icons/RedoBlue.svg'
import Close from './icons/Close.svg'
import CloseBlue from './icons/CloseBlue.svg'


interface UploadFileStatusRowProps {
    status: "REGISTERED" | "UPLOADING" | "FINISHED" | "CANCELED" | "FAILED";
    progress: number;
    fileName: string;
    onDelete?(): void;
    onCancel?(): void;
    onResume?(): void;
    width: string;
}

export function UploadFileStatusRow(props: UploadFileStatusRowProps): JSX.Element {
    return (
        <div style={{
            borderBottom: '1px solid #D9D9D9',
            paddingTop: 20,
            paddingBottom: 15,
            width: props.width,
            position: 'relative'
        }}>
            <div style={{
                fontSize: 16,
                color: '#333333',
                width: `calc(${props.width} - 400px)`,
                display: 'inline-block',
                whiteSpace: 'nowrap'
            }}>
                {props.fileName}
            </div>
            <ProgressionBar
                progress={props.progress}
                width="130px"
                style={{
                    display: 'inline-block',
                    marginLeft: 83,
                    marginBottom: 2,
                }}
            />
            <div style={{
                fontSize: 16,
                marginLeft: 25,
                width: 66,
                textAlign: 'center',
                color: (props.status === "CANCELED" || props.status === "FAILED")? '#D34242' : '#666666',
                display: 'inline-block',
            }}>
                {(props.status === "CANCELED")? "取消上傳"
                    : (props.status === "FAILED")? "上傳失敗"
                    : (props.status === "UPLOADING")? `${props.progress}%`
                    : (props.status === "FINISHED")? "上傳成功"
                    : ""
                }
            </div>
            {(props.status === "CANCELED")?
                <HoverableButton
                    src={Redo}
                    srcOnHover={RedoBlue}
                    style={{
                        marginBottom: -6,
                        marginLeft: 18
                    }}
                    onClick={props.onResume}
                />
                :
                <div style={{
                    display: 'inline-block',
                    width: 42
                }}/>
            }
            <HoverableButton
                src={Close}
                srcOnHover={CloseBlue}
                style={{
                    marginBottom: -6,
                    marginLeft: 7
                }}
                onClick={props.onCancel}
            />
        </div>
    )
}

interface ProgressionBarProps {
    progress: number;
    width: string;
    style?: CSSProperties;
}

function ProgressionBar(props: ProgressionBarProps): JSX.Element {
    return (
        <div style={props.style}>
            <div style={{
                width: props.width,
                height: 6,
                backgroundColor: (props.progress)? '#F8F8F8' : 'inherit',
                borderRadius: 4
            }}>
                <div style={{
                    width: `calc(${props.width} * (${props.progress} / 100))`,
                    height: 6,
                    backgroundColor: '#1581FF',
                    borderRadius: 4

                }}/>
            </div>
        </div>
    )
}