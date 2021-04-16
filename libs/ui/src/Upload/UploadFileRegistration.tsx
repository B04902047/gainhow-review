import React, { useState } from "react";
import { UploadFileStatusRow } from "./UploadFileStatusRow";
import { UploadNewFileButton } from "./UploadNewFileButton";


interface UploadFileRegistrationProps {
    width: string;
    height: string;
}

export function UploadFileRegistration(props: UploadFileRegistrationProps): JSX.Element {
    //let [filesToUpload, setFilesToUpload] = useState<File[]>([]);
    let filesToUpload = [{name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}, {name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}, {name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}, {name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}, {name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}, {name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}, {name: '檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名檔名'}]
    return (
        <div style={{
            backgroundColor: 'white',
            width: props.width,
            height: props.height,
            borderRadius: 10,
            boxShadow: '0px 2px 3px #00000029',
            overflow: 'auto'
        }}>
            <div style={{
                paddingLeft: 28,
                paddingTop: 19,
            }}>
                <UploadNewFileButton/>
                {filesToUpload.map((file) => {
                    return <UploadFileStatusRow
                        status="REGISTERED"
                        progress={0}
                        fileName={file.name}
                        width='1058px'
                    />
                })}
            </div>
        </div>
    );

    // function addFile(file: File): void {
    //     setFilesToUpload(files => [
    //         ...files,
    //         file
    //     ]);
    // }
}
