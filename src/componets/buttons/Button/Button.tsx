import cl from './Button.module.scss'
import React from 'react';
import clsx from "clsx";

export type TButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    style?: 'default' | 'blue' | 'white'
}

const Button: React.FC<TButton> = ({style = 'default', children, ...props}) => {
    const color = clsx({
        [cl.blue]: style === 'blue' || 'default',
        [cl.white]: style === 'white',
    })
    return (
        <button
            className={clsx({[cl.wrapper]: true}, color)}
            {...props}
        >
            <div className={cl.inner}>
                {children}
            </div>
        </button>
    );
}

export {Button};