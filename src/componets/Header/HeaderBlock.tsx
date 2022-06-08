import React, {ReactNode} from 'react';
import cl from './HeaderStyle.module.scss'
import {ColumnWidth} from "../../types/TableStructure";
import clsx from "clsx";

const HeaderBlock: React.FC<{ title: string, width?: ColumnWidth, children?: ReactNode }> = (
    {
        title,
        children,
        width,
    }) => {
    const style = {
        [cl.border]: true,
    }

    return (
        <div
            className={clsx(style)}
            style={{width: `${width}px`}}
        >
            {title}
            {children && <div
                className={cl.inner}
            >
                {children}
            </div>}
        </div>
    );
};

export {HeaderBlock};