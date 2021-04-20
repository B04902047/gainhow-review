import React from "react";
import { UploadNewFileButton, UploadFileStatusRow } from "..";
import { NoneFileUpload } from "./NoneFileUpload";

interface UploadFileStatusesTableProps {
    width: string;
    height: string;
    files: Array<{
        fileObject: File;
        progress: number;
        status: "REGISTERED" | "UPLOADING" | "FINISHED" | "CANCELED" | "FAILED";
        fileName: string;
        onDelete?(): void;
        onCancel?(): void;
        onResume?(): void;
    }>;
    addFiles(files: File[]): void;
}

export function UploadFileStatusesTable(props: UploadFileStatusesTableProps): JSX.Element {
    return (
        <div style={{
            backgroundColor: 'white',
            width: props.width,
            height: props.height,
            borderRadius: 10,
            boxShadow: '0px 2px 3px #00000029'
        }}>
            {(props.files.length === 0)?
                <NoneFileUpload
                    register={props.addFiles}
                />
            :
                <div style={{
                    paddingLeft: 28,
                    paddingTop: 19,
                }}>
                    <UploadNewFileButton
                        onFilesSelected={props.addFiles}
                    />
                    <div style={{ height: 400, overflow: 'auto' }}>
                        {props.files.map((file, index) => {
                            return <UploadFileStatusRow
                                key={file.fileObject.name}
                                status={file.status}
                                progress={file.progress}
                                fileName={file.fileObject.name}
                                width='1058px'
                                onCancel={() => file.onDelete()}
                            />
                        })}
                    </div>
                </div>
            }
        </div>
    );
}