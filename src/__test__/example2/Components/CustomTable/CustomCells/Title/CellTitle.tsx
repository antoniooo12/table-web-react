import React from 'react';
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";
import {useCellCustomContext} from "../../../../../../componets/Column/Cell/Custom/CellCustomContext";

const CellTitle: CustomCellComponent<string> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<string>(cellName)

    return (
        <div className={cellInformation.className}>
            {cellInformation.externalValue}
        </div>
    );
};

export {CellTitle};
