import React, { useState } from "react";
import { NoneFileUpload } from "./UploadArea";
import { UploadFileStatusRow } from "./UploadFileStatusRow";
import { UploadNewFileButton } from "./UploadNewFileButton";


interface UploadFileRegistrationProps {
    width: string;
    height: string;
}

export function UploadFileRegistration(props: UploadFileRegistrationProps): JSX.Element {
    let [filesToUpload, setFilesToUpload] = useState<File[]>([]);
    return (
        <div style={{
            backgroundColor: 'white',
            width: props.width,
            height: props.height,
            borderRadius: 10,
            boxShadow: '0px 2px 3px #00000029'
        }}>
            {(filesToUpload.length === 0)?
                <NoneFileUpload
                    register={(files) => addFile(files)}
                />
            :
                <div style={{
                    paddingLeft: 28,
                    paddingTop: 19,
                }}>
                    <UploadNewFileButton
                        onFilesSelected={addFile}
                    />
                    <div style={{ height: 400, overflow: 'auto' }}>
                        {filesToUpload.map((file) => {
                            return <UploadFileStatusRow
                                key={file.name}
                                status="REGISTERED"
                                progress={0}
                                fileName={file.name}
                                width='1058px'
                            />
                        })}
                    </div>
                </div>
            }
        </div>
    );

    function addFile(files: FileList): void {
        console.log('addFile');
        setFilesToUpload(currentFiles => {
            let newFiles = [ ...currentFiles ];
            for (let i=0; i<files.length; i++) {
                newFiles.push(files[i]);
            }
            return newFiles;
        });
    }

}
