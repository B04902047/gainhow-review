import React, { useState } from "react";
import { CSSProperties } from "react";

interface ButtonProps {
    children: React.ReactNode;
    isPrimary?: boolean;
    style?: CSSProperties;
    onClick(): void;
    disabled?: boolean;
}
  
export function Button(props: ButtonProps): JSX.Element {
    const blue: string = '#1581ff';
    let style: CSSProperties = {
        backgroundColor: (props.disabled)? 'gray' : (props.isPrimary)? blue: 'inherit',
        border: `solid 2px ${(props.disabled)? 'gray' : blue}`,
        width: 184,
        height: 40,
        borderRadius: 20,
        fontSize: 18,
        outline: 'none',
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

interface HoverableButtonProps {
    src: string;
    srcOnHover: string;
    style: CSSProperties;
    title?: string;
    onClick?(): void;
}

export function HoverableButton(props: HoverableButtonProps): JSX.Element {
    let [isHovered, setIsHovered] = useState(false);
    let style: CSSProperties = {
        cursor: (isHovered)? 'pointer': 'inherit',
        ...props.style
    }
    return (
        <img
            src={(isHovered)? props.srcOnHover: props.src}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={style}
            title={props.title}
            onClick={props.onClick}
        />
    )
}