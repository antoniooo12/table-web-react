import React from 'react';
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";

const CellTitle: CustomCellComponent<string> = ({cellInformation}) => {
    return (
        <div className={cellInformation.className}>
            {cellInformation.externalValue}
        </div>
    );
};

export {CellTitle};
