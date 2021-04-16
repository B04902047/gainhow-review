import React from "react";

interface HiddenMultipleFileInputProps {
    onChange(files: File[]): void;
    inputRef?: React.LegacyRef<HTMLInputElement>
}

export function HiddenMultipleFileInput(props: HiddenMultipleFileInputProps): JSX.Element {
    return  <input
        type="file"
        multiple
        style={{ display: 'none' }}    
        ref={props.inputRef}
        onChange={(event) => {
            let files = event.target.files;
            let newFiles = [];
            for (let i=0; i<files.length; i++) {
                newFiles.push(files[i]);
            }
            props.onChange(newFiles);
            event.target.value = null;
        }}
    />
}