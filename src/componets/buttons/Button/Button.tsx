import cl from './Button.module.scss'
import React from 'react';
import clsx from "clsx";
import { useButtonGroup } from './ButtonGroup/ButtonGroup';

export type SizeButton = 'small' | 'standard' | 'big'
export type TButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    styleMode?: 'default' | 'blue' | 'white' | 'gray' | 'danger'
    size?: SizeButton
}



const Button: React.FC<TButton> = (props) => {
    const {styleMode = 'default', size = 'standard', children,} = props
    const color = clsx({
        [cl.blue]: styleMode === 'blue' || 'default',
        [cl.white]: styleMode === 'white',
        [cl.gray]: styleMode === 'gray',
        [cl.danger]: styleMode === 'danger',
    })
    const sizeButton = clsx({
        [cl.small]: size === 'small',
    })
    const className = clsx(sizeButton, color)
    return (
        <button
            className={clsx({[cl.wrapper]: true}, className)}
            {...props}
        >
            <div className={cl.inner}>
                {children}
            </div>
        </button>
    );
}

export {Button};