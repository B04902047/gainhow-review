
import React from 'react';
import PlusBlue from './icons/PlusBlue.svg';

interface UploadNewFileButtonProps {
    onClick?(): void;
}

export function UploadNewFileButton(props: UploadNewFileButtonProps): JSX.Element {
    return (
        <div style={{
            width: 134,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#D0E6FF',
            cursor: 'pointer'
        }}>
            <div style={{
                margin: 8,
                backgroundColor: 'white',
                width: 24,
                height: 24,
                borderRadius: '50% 50%',
                display: 'inline-block'
            }}>
                <img
                    style={{ marginLeft: 4, marginBottom: 1 }}
                    src={PlusBlue}
                />
            </div>
            <div style={{
                display: "inline-block",
                marginLeft: 2,
                position: 'relative',
                bottom: 2,
                fontSize: 18,
                color: '#1581ff',
                fontWeight: 'bold'
            }}>
                新增檔案
            </div>
        </div>
    )
}