import React from "react";
import { CSSProperties } from "react";

interface ButtonProps {
    children: string;
    isPrimary?: boolean;
    style?: CSSProperties;
    onClick(): void;
    disabled?: boolean;
}
  
export function Button(props: ButtonProps): JSX.Element {
    const blue: string = '#1581ff';
    let style: CSSProperties = {
        backgroundColor: (props.disabled)? 'gray' : (props.isPrimary)? blue: 'none',
        border: `solid 2px ${(props.disabled)? 'gray' : blue}`,
        width: 184,
        height: 40,
        borderRadius: 20,
        fontSize: 18,
        color: (props.isPrimary)? 'white': blue,
        cursor: 'pointer',
        ...props.style,
    };
    return (
    <button
        style={style}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children}
    </button>
    )
}