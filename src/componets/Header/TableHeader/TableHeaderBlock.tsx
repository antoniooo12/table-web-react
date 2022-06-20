import React from 'react';
import {TTableHeaderBlock} from "./TableHeaderTypes";


const TableHeaderBlock: React.FC<TTableHeaderBlock> = ({title, colSpan, width}) => {

    return (
        <th
            colSpan={colSpan}
            style={{width: `${width}px`}}
        >
            {title}
        </th>
    );
};

export {TableHeaderBlock};