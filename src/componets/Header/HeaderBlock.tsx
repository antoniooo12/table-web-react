import React, {CSSProperties, ReactNode} from 'react';
import cl from './HeaderStyle.module.scss'
import {ColumnWidth} from "../../types/TableStructure";
import clsx from "clsx";

const HeaderBlock: React.FC<{ title: string, width?: ColumnWidth, widthGrid?: string, children?: ReactNode }> = (
    {
        title,
        children,
        width,
        widthGrid
    }) => {
    const className = {
        // [cl.border]: true,
    }
    const styleInner: CSSProperties = {
        gridTemplateColumns: widthGrid
    }
    return (
        <div
            className={clsx(className)}
            style={{width: `${width}px`}}
        >
            {title}
            {children && <div
                style={styleInner}
                className={cl.inner}
            >
                {children}
            </div>}
        </div>
    );
};

export {HeaderBlock};
