import React from "react";
import { CSSProperties } from "react";

interface ButtonProps {
    children: string;
    isPrimary?: boolean;
    style?: CSSProperties;
  }
  
export function Button(props: ButtonProps): JSX.Element {
    const blue: string = '#1581ff';
    let style: CSSProperties = {
    backgroundColor: (props.isPrimary)? blue: 'none',
    border: `solid 2px ${blue}`,
    width: 184,
    height: 40,
    borderRadius: 20,
    fontSize: 18,
    color: (props.isPrimary)? 'white': blue,
    ...props.style,
    };
    return (
    <button
        style={style}
    >
        {props.children}
    </button>
    )
}