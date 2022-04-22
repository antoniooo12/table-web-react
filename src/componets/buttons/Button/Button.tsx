// @ts-ignore
import cl from './Button.module.scss'

import React from 'react';
import clsx from "clsx";

export type TButton=  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &{
    style ?:'default' | 'blue'
}

const Button:React.FC<TButton> = React.memo(({style, children,...props}) => {
    return (
        <button
            className={clsx({[cl.wrapper]: true, [cl.blue]: style === "blue"})}
            {...props}
        >
            {children}
        </button>
    );
},assertParams);
function assertParams(){
    return true
}
export {Button};