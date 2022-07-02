import React from 'react';
import cl from './Cost.module.scss'
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../../table/tableStructure";
import {useCellCustomContext} from "../../../../../../componets/Column/Cell/Custom/CellCustomContext";

const CellCost: CustomCellComponent<number> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<number>(cellName)
    const type = lineInformation.columns.get(EColumns2.type)?.value as string
    return (
        <div className={cl.wrapper}>
            <>
                {cellInformation.externalValue} <span className={cl.type}>грн/{type}</span>
            </>
        </div>
    );
};

export default CellCost;
