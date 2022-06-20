import React from 'react';
import {TableHeaderBlock} from "./TableHeaderBlock";
import {TTableHeaderLine} from "./TableHeaderTypes";


const TableHeaderLine: React.FC<TTableHeaderLine> = ({headerBlockArray}) => {
    return (
        <tr>
            {
                headerBlockArray.map(props =>
                    <TableHeaderBlock
                        {...props}
                        key={props.title}
                    />)
            }
        </tr>
    );
};

export {TableHeaderLine};