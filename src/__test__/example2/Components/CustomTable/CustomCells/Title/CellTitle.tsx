import React from 'react';
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";
import {useCellCustomContext} from "../../../../../../componets/Column/Cell/Custom/CellCustomContext";
import clsx from "clsx";

const CellTitle: CustomCellComponent<string> = ({cellName, className}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<string>(cellName)

    return (
        <div className={clsx(cellInformation.className, className)}>
            {cellInformation.externalValue}
        </div>
    );
};

export {CellTitle};
