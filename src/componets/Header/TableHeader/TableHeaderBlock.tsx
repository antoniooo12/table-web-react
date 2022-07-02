import React from 'react';
import {TTableHeaderBlock} from "./TableHeaderTypes";


const TableHeaderBlock: React.FC<TTableHeaderBlock> = ({title, colSpan, width}) => {

    return (
        <td
            colSpan={colSpan}
            width={width}
        >
            {title}
        </td>
    );
};

export {TableHeaderBlock};
